import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    chatHistory:[],
    username: "Kae2"
    
}

const chatHistorySlice = createSlice({
  name: 'chatroom',
  initialState,
  reducers: {
    updateUserName:(state,action) => {
        // console.log(action);
        console.log(action.payload);
        state.username=action.payload;
    },
    addUserMessage:(state,action)=>{
        let userMessage = {
            sender:'Me',
            text: action.payload

        }
        state.chatHistory.push(userMessage);
        console.log(state.chatHistory)
    }
    
  }
});

export const {updateUserName,addUserMessage} = chatHistorySlice.actions

export default chatHistorySlice.reducer