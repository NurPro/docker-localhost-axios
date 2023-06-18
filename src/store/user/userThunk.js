import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserRequest } from '../../api/Axios.servise';



export const getUser = createAsyncThunk(
  "user/getUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getUserRequest();

      const articles = response.data.articles

      return articles;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
