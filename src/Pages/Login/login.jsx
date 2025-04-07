import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { setUser } from "../../redux/store/userSlice"; // Import setUser từ userSlice

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(null);
    const dispatch = useDispatch(); // Khởi tạo dispatch

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/auth/login', {
                username,
                password,
            });

            if (response.status === 200) {
                setMessage({ type: 'success', text: 'Đăng nhập thành công!' });
                dispatch(setUser(response.data.user)); // Lưu thông tin user vào Redux
                console.log('Login successful:', response.data);
            } else {
                setMessage({ type: 'danger', text: 'Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.' });
                console.error('Login failed:', response.statusText);
            }
        } catch (error) {
            if (error.code === 'ERR_NETWORK') {
                setMessage({ type: 'danger', text: 'Không thể kết nối đến máy chủ. Vui lòng kiểm tra kết nối mạng hoặc thử lại sau.' });
                console.error('Network error:', error.message);
            } else {
                setMessage({ type: 'danger', text: 'Đã xảy ra lỗi. Vui lòng thử lại sau.' });
                console.error('Error during login:', error);
            }
        }
    };

    return (
        <div style={{ backgroundColor: '#e8f3ff', minHeight: '100vh' }}>
            <div className="text-center justify-content-center align-items-center mb-3">
                <h1 className="text-center text-primary fw-bolder mb-3">Zalo</h1>
                <h3>Đăng nhập Zalo</h3>
                <h3>Kết nối ứng dụng nhắn gửi yêu thương</h3>
            </div>
            <Container className="d-flex justify-content-center align-items-center mt-3">
                <Card style={{ width: '400px' }} className="p-4 shadow">
                    {message && (
                        <Alert variant={message.type} className="text-center">
                            {message.text}
                        </Alert>
                    )}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formPhone">
                            <Form.Label className="bi bi-person-circle text-primary"> UserName</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nhập tên đăng nhập"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label className="bi bi-shield-lock text-primary"> Mật Khẩu</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Nhập mật khẩu"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Button
                            variant="primary"
                            type="submit"
                            className="w-100 mb-3"
                            style={{ backgroundColor: '#00A2FF', border: 'none' }}
                        >
                            Đăng nhập
                        </Button>

                        <div className="text-center">
                            <a href="./forgotpassword" className="d-block mb-2" style={{ color: '#00A2FF' }}>
                                Quên mật khẩu?
                            </a>
                            <small>
                                Chưa có tài khoản?{' '}
                                <a href="./register" style={{ color: '#00A2FF' }}>
                                    Đăng ký ngay
                                </a>
                            </small>
                        </div>
                    </Form>
                </Card>
            </Container>
        </div>
    );
};

export default Login;