import { configureStore } from '@reduxjs/toolkit';
import redditDataReducer from './redditDataSlice';

export const store = configureStore({ 
    reducer: { 
        redditData: redditDataReducer
    }
})