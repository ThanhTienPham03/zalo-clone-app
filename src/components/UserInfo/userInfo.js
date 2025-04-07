import React from 'react';
import { useSelector } from 'react-redux';

const UserInfo = () => {
    const userInfo = useSelector((state) => state.user.userInfo); // Lấy thông tin user từ Redux

    return (
        <div>
            {userInfo ? (
                <div>
                    <h3>Thông tin người dùng:</h3>
                    <p><strong>Username:</strong> {userInfo.username}</p>
                    <p><strong>Email:</strong> {userInfo.email}</p>
                </div>
            ) : (
                <h3>Chưa có thông tin người dùng. Vui lòng đăng nhập.</h3>
            )}
        </div>
    );
};

export default UserInfo;