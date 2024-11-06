import React from "react";
import { useSelector } from "react-redux";
import { Blocks } from 'react-loader-spinner';
import './loader.css';

const Uploader = () => {
  const  {uploading}  = useSelector((state) => state.extractedData);
  console.log(uploading)
  return (
    uploading && <div className="loader-layer" style={{zIndex: '200'}}>
          <div className='loader-wrapper'>
            <div className='loader'>
                    <Blocks
                            height="80"
                            width="80"
                            color="#4fa94d"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                            visible={true}/>
            </div>
            <div className='loaderText'>
              <h4>Uploading File ...</h4>
            </div>
          </div>
        </div>
  );
};

export default Uploader