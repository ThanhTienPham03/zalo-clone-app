import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        conversations: [],
        activeConversation: null
    },
    reducers: {
        setActiveConversation: (state, action) => {
            state.conversations = state.conversations.map((conversation) =>
                conversation.id === action.payload.id
                    ? { ...conversation, isActive: true }
                    : { ...conversation, isActive: false }
            );
            state.activeConversation = action.payload;
        },
        addMessage: (state, action) => {
            const { conversationId, message } = action.payload;
            const conversation = state.conversations.find((conv) => conv.id === conversationId);
            if (conversation) {
                conversation.messages.push(message);
                conversation.lastMessage = message.text; // Cập nhật tin nhắn cuối cùng
            }
        }
    }
});

export const { setActiveConversation, addMessage } = chatSlice.actions;
export default chatSlice.reducer;