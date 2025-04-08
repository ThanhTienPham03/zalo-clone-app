import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
// import { setActiveConversation } from '../../redux/chatSlice';
import './chatlist.css';
// import { setConversations } from '../../redux/chatSlice';
const ChatList = () => {
    const [conversation, setConversation] = useState(
        []
    );
    const fetchConversations = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/conversations'); // Replace with your API endpoint
            const data = await response.json();
            setConversation(data);
        } catch (error) {
            console.error('Failed to fetch conversations:', error);
        }
    }
    const user_id = useSelector((state) => state.auth.username);
    // const conversations = useSelector((state) => state.chat.conversations);
    const dispatch = useDispatch();
    useEffect(() => {fetchConversations()}, [])
    const handleSelectConversation = (conversation) => {
        dispatch(setActiveConversation(conversation));
    };

    return (
        <div className="chat-list" style={{ width: '30%', borderRight: '1px solid #ccc', overflowY: 'auto' }}>
            {conversations.map((conversation) => (
                <div
                    key={conversation.id}
                    onClick={() => handleSelectConversation(conversation)}
                    style={{
                        padding: '10px',
                        cursor: 'pointer',
                        borderBottom: '1px solid #eee',
                        backgroundColor: conversation.isActive ? '#f0f8ff' : 'white',
                    }}
                >
                    <strong>{conversation.name}</strong>
                    <p style={{ margin: 0, color: '#888' }}>{conversation.lastMessage}</p>
                </div>
            ))}
        </div>
    );
};

export default ChatList;