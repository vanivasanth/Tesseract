import { classNames } from 'primereact/utils';
import { useCallback, useEffect, useRef, useState } from 'react';
import { FileUpload } from 'primereact/fileupload';
import { getExtension, chooseOptions, uploadOptions, cancelOptions } from "../Utilities";
import { updateData,enableUpLoader, disableUploader, uploadedFileData } from '../store/reducers/DataSlice';
import { Button } from "primereact/button";
import { Toast } from 'primereact/toast';
import { createWorker } from 'tesseract.js';
import { useDispatch } from 'react-redux';
import axios from 'axios';
const DocUploader = () =>{
    const fileUploadRef = useRef(null);
    const toastCenter = useRef(null);
    const dispatch = useDispatch();
    const worker = createWorker();

    const [totalSizeApp2Source, setTotalSizeApp2Source] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);
    const [textResult, setTextResult] = useState("");

    const convertImageToText = useCallback(async () => {       
        if(!selectedImage) return;
        await worker.load();
        await worker.loadLanguage(["eng", "hin", "tam"]);
        await worker.initialize("eng");
        const { data } = await worker.recognize(selectedImage);
        console.log(data.text)
        setTextResult(data.text);
        dispatch(updateData(data.text));        
        dispatch(disableUploader());
      }, [worker, selectedImage]);

    useEffect(() => {
       
        convertImageToText();
      }, [selectedImage]);
    
      const onTemplateRemoveSource = (file, callback) => {
        setTotalSizeApp2Source(totalSizeApp2Source - file.size);
        callback();
      };
    
    
      const itemTemplateSource = (file, props) => {
        return (
          <div className="flex justify-content-between ">
            <div className="flex align-items-center" style={{ width: "40%" }}>
              <span className="flex flex-column text-left ml-3">{file.name}</span>
            </div>
            <Button
              icon="pi pi-times"
              className="p-button-secondary"
              onClick={() => onTemplateRemoveSource(file, props.onRemove)}
            />
          </div>
        );
      };

      const fileUpload = (event) => {
        dispatch(enableUpLoader());
        const supportedFileFormat = ["csv", "txt","pdf","jpg","png"];
        let file = event.files[0];
        const url = URL.createObjectURL(file);
        setSelectedImage(event.files[0]);
        dispatch(uploadedFileData(url));
       
        fileUploadRef.current.clear();     
      
      };
    
    const headerTemplate = (options) => {
        const { className, chooseButton, uploadButton, cancelButton } = options;
    
        return (
            <div className={className} style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center' }}>
                {chooseButton}
                {uploadButton}
                {cancelButton}              
            </div>
        );
    };

    return(
        <>
        <div className="card">
            <Toast ref={toastCenter} position="center" />
            <FileUpload name="docUpload"
                        ref={fileUploadRef}
                        customUpload
              chooseOptions={chooseOptions}
              uploadOptions={uploadOptions}
              cancelOptions={cancelOptions}
              headerTemplate={headerTemplate}
              itemTemplate={itemTemplateSource}
              uploadHandler={fileUpload} 
              aria-hidden={false}
              emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
        </div>
        </>
    );
}
export default DocUploader;