

// File uploader UI Style options  
export const chooseOptions = {icon:"pi pi-plus"  };
export const uploadOptions = { icon: 'pi pi-fw pi-cloud-upload' };
export const cancelOptions = { icon: 'pi pi-fw pi-times'};

export const getExtension=(path) =>{
    var basename = path.split(/[\\/]/).pop(),  // extract file name from full path ...
        // (supports `\\` and `/` separators)
        pos = basename.lastIndexOf(".");       // get last position of `.`

    if (basename === "" || pos < 1)            // if file name is empty or ...
        return "";                             //  `.` not found (-1) or comes first (0)

    return basename.slice(pos + 1);            // extract extension ignoring `.`
}

// Extract text from Image using Tesseract

