import React, { useEffect, useContext } from 'react';
import ChatList from '../../components/Chat/ChatList';
import ChatWindow from '../../components/Chat/ChatWindow';
import { connectSocket, disconnectSocket, subscribeToMessages } from '../../services/socketService';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../redux/chatSlice';
import { AuthContext } from '../../context/AuthContext';

const ChatPage = () => {
    const dispatch = useDispatch();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        connectSocket('http://localhost:3000');

        subscribeToMessages((message) => {
            dispatch(addMessage({
                conversationId: message.conversationId,
                message: message,
            }));
        });

        return () => {
            disconnectSocket();
        };
    }, [dispatch]);

    return (
        <div className="chat-page container-fluid bg-light vh-100">
            <div className="row h-100">
                {/* Sidebar */}
                <div className="col-3 border-end p-0 bg-white">
                    <div className="d-flex flex-column h-100">
                        {/* Sidebar Header */}
                        <div className="bg-primary text-white py-3 px-3 d-flex align-items-center">
                            <img
                                src="https://via.placeholder.com/40"
                                alt="User Avatar"
                                className="rounded-circle me-2"
                                style={{ width: '40px', height: '40px' }}
                            />
                            <h6 className="mb-0">Xin chào, {user?.name || 'User'}!</h6>
                        </div>
                        {/* Chat List */}
                        <div className="flex-grow-1 overflow-auto">
                            <ChatList />
                        </div>
                        {/* Sidebar Footer */}
                        <div className="bg-light border-top py-2 px-3 d-flex justify-content-between">
                            <button className="btn btn-sm btn-outline-primary">Cài đặt</button>
                            <button className="btn btn-sm btn-outline-danger">Đăng xuất</button>
                        </div>
                    </div>
                </div>
                {/* Main Content */}
                <div className="col-9 p-0 bg-white">
                    {/* Header */}
                    <div className="bg-primary text-white py-3 px-4">
                        <h5 className="mb-0">Chào mừng đến với Zalo PC!</h5>
                        <p className="mb-0 small">Khám phá những tiện ích hỗ trợ làm việc và trò chuyện cùng người thân.</p>
                    </div>
                    {/* Chat Window */}
                    <div className="h-100 overflow-auto">
                        <ChatWindow />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatPage;