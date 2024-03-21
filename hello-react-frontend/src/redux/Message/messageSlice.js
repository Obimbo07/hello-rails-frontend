import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: {}, // Change from array to object
  status: 'idle',
  error: null,
};

export const fetchData = createAsyncThunk('messages/fetchData', async () => {
  try {
    const response = await axios.get('http://127.0.0.1:3000/');
    return response.data;
  } catch (error) {
    throw Error('Failed to fetch data');
  }
});

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload.message;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectData = (state) => state.messages.data;

export default messagesSlice.reducer;
