import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import  dataSliceReducer  from './reducers/DataSlice';

const rootReducer = combineReducers({
  extractedData: dataSliceReducer,
});

const store = configureStore({ 
    reducer:rootReducer
});

export {store};