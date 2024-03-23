import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from './Message/messageSlice';

const store = configureStore({
  reducer: {
    messages: messagesReducer,
  },
});

export default store;
