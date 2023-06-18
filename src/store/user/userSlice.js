import { createSlice } from '@reduxjs/toolkit';
import { getUser } from './userThunk';

const initialState = {
  user:[]
};


export const UserSlice = createSlice({

  name: "user",
  initialState,

  reducer: {},

  extraReducers:((builder)=> {
    builder
   .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload;
       })
  })
})


export const {addCase}= UserSlice.actions
