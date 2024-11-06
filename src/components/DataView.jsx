import { classNames } from 'primereact/utils';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../App.css'
const DataView = () =>{

    const retrievedText = useSelector((state) => state.extractedData.value);

    const { loading } = useSelector((state) => state.extractedData);
    const  {uploadedData}  = useSelector((state) => state.extractedData);
    useEffect(() => {
     
    }, [retrievedText, loading]);

    return(
        <>
         <div style={{display:'flex'}}>
         <div style={{width:'50%', textAlign:'left',margin:'10px'}}>
         <h3>Uploaded File</h3>
         <div >
          <img src={uploadedData}/>
         </div>
        </div>
        <div style={{width:'50%', textAlign:'left', margin:'10px'}}>         
          <h3>Extracted Information</h3>
          <pre>{retrievedText}</pre>
        </div>
         </div>
           
        </>
    );
}
export default DataView;