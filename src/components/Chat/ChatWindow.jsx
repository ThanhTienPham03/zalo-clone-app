import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from '../../redux/chatSlice';
import { sendMessage } from '../../services/socketService';

const ChatWindow = () => {
    const activeConversation = useSelector((state) => state.chat.activeConversation);
    const dispatch = useDispatch();
    const [message, setMessage] = useState('');

    const handleSendMessage = () => {
        if (message.trim()) {   
            const newMessage = {
                sender: 'me',
                text: message,
                timestamp: new Date().toISOString(),
            };

            // Gửi tin nhắn qua WebSocket
            sendMessage(activeConversation.id, newMessage);

            // Cập nhật Redux store
            dispatch(addMessage({
                conversationId: activeConversation.id,
                message: newMessage,
            }));

            setMessage('');
        }
    };

    if (!activeConversation) {
        return <div className="chat-window" style={{ width: '70%', padding: '20px' }}>Chọn một cuộc trò chuyện để bắt đầu</div>;
    }

    return (
        <div className="chat-window" style={{ width: '70%', padding: '20px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1, overflowY: 'auto', marginBottom: '10px' }}>
                {activeConversation.messages.map((msg, index) => (
                    <div
                        key={index}
                        style={{
                            textAlign: msg.sender === 'me' ? 'right' : 'left',
                            margin: '10px 0',
                        }}
                    >
                        <span
                            style={{
                                display: 'inline-block',
                                padding: '10px',
                                borderRadius: '10px',
                                backgroundColor: msg.sender === 'me' ? '#00A2FF' : '#f1f1f1',
                                color: msg.sender === 'me' ? 'white' : 'black',
                            }}
                        >
                            {msg.text}
                        </span>
                    </div>
                ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Nhập tin nhắn..."
                    style={{ flex: 1, padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
                <button
                    onClick={handleSendMessage}
                    style={{
                        marginLeft: '10px',
                        padding: '10px 20px',
                        backgroundColor: '#00A2FF',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Gửi
                </button>
            </div>
        </div>
    );
};

export default ChatWindow;