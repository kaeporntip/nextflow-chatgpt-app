import { configureStore } from '@reduxjs/toolkit';
import chatHistorySlice from './chatHistorySlice';


const store = configureStore({
    reducer: {
        chatroom: chatHistorySlice
    }
});

export default store;


