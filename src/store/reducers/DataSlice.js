import { createSlice } from '@reduxjs/toolkit'



export const dataSliceReducer = createSlice({
  name: 'extractedData',
  initialState:{
    loading:false,
    uploading:false,
    format:'',
    usedLibrary:'',
    value: '',
    uploadedData:'',
    googlevision:[],
  },
  reducers: {
    enableUpLoader: (state, action) => {
      state.loading = true; 
      state.value = '';
     },
    disableUploader:(state, action)=>{
      state.uploading = false; 
      state.loading = false; 
    },
    updateVisionData:(state, action)=>{
      state.loading = false; 
      state.googlevision = action.payload
    },
    uploadedFile:(state, action) =>{
       state.uploadedData = action.payload;
    },

    updateExtractedData: (state, action) => {    
     state.loading = false;
    //  let cleanedText = action.payload
    //     .replace(/[^a-zA-Z0-9\s.,@-]/g, '') // Remove unwanted characters
    //     .replace(/\s+/g, ' ') // Replace multiple spaces with a single space
    //     .trim(); 
    //let lines = cleanedText.split('\n');
    console.log(action.payload) 
    state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { enableLoader, 
               enableUpLoader,
               disableUploader,
               uploadedFile,
               updateExtractedData, 
               updateVisionData } = dataSliceReducer.actions

export const updateData = (payload) => async (dispatch) => {
    dispatch(updateExtractedData( payload ));
};

export const GoogleVisionData = (payload) => async (dispatch) => {
  dispatch(updateVisionData( payload ));
};
  
export const uploadedFileData = (payload) => async (dispatch) => {
  dispatch(uploadedFile(payload))
}

export default dataSliceReducer.reducer