import React from "react";
import { useSelector } from "react-redux";
import { MagnifyingGlass } from 'react-loader-spinner';
import './loader.css';

const PageLoader = () => {
  const  {loading}  = useSelector((state) => state.extractedData);
  return (
   <>
    <div className="loader-layer" style={{zIndex: '200'}}>
    <div className='loader-wrapper'>
      <div className='loader'>
      <MagnifyingGlass
                visible={true}
                height="80"
                width="80"
                ariaLabel="magnifying-glass-loading"
                wrapperStyle={{}}
                wrapperClass="magnifying-glass-wrapper"
                glassColor="#c0efff"
                color="#12055e"/>
      </div>
      <div className='loaderText'>
        <h4>Extracting...</h4>
      </div>
    </div>
  </div>
   </>
  );
};

export default PageLoader