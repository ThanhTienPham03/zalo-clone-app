import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Card, Image, Form, Button } from 'react-bootstrap';
import axios from 'axios';
const Register = () => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Mật khẩu và xác nhận mật khẩu không khớp!');
            return;
        }
    
        try {
            const response = await axios.post('http://localhost:3000/auth/register', {
                phone,
                username,
                email,
                password,
            }, {
                withCredentials: true,
            }
        );
            console.log('Payload:', { phone, username, email, password });
            if (response.data.success) {
                alert('Đăng ký thành công!');
                window.location.href = './login';
            } else {
                alert(response.data.message || 'Đăng ký thất bại!');
            }
        } catch (error) {
            console.error('Đã xảy ra lỗi:', error);
    
            // Xử lý lỗi chi tiết
            if (error.response) {
                // Lỗi từ server (có phản hồi)
                alert(`Lỗi từ server: ${error.response.data.message || 'Đăng ký thất bại!'}`);
            } else if (error.request) {
                // Không nhận được phản hồi từ server
                alert('Không thể kết nối đến server. Vui lòng kiểm tra kết nối mạng hoặc server!');
            } else {
                // Lỗi khác
                alert(`Đã xảy ra lỗi: ${error.message}`);
            }
        }

    };
    return (
        <div style={{ backgroundColor: '#e8f3ff', minHeight: '100vh' }}>
            
            <Container className="d-flex justify-content-center align-items-center min-vh-100">
                <Card style={{ width: '400px' }} className="p-4 shadow">
                    {/* Logo Zalo */}
                    <div className="text-center mb-4  justify-content-center space-between align-items-center">
                        <h4 className='text-primary'> Đăng ký</h4>
                    </div>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3 " controlId="formUserName d-flex">
                            <Form.Label className= 'bi bi-person-circle text-primary'> UserName</Form.Label>
                            <Form.Control  type="username"  placeholder="Nhập UserName" value={username}onChange={(e) => setUsername(e.target.value)} required/>
                        </Form.Group>
                        <Form.Group className="mb-3 " controlId="formEmail d-flex">
                            <Form.Label className= 'bi bi-envelope text-primary'> Email</Form.Label>
                            <Form.Control  type="email"  placeholder="Nhập Email" value={email}onChange={(e) => setEmail(e.target.value)} required/>
                        </Form.Group>
                       
                        <Form.Group className="mb-3 " controlId="formPhone d-flex">
                            <Form.Label className= 'bi bi-telephone text-primary'> Số Điện Thoại</Form.Label>
                            <Form.Control  type="tel"  placeholder="Nhập số điện thoại" value={phone}onChange={(e) => setPhone(e.target.value)} required/>
                        </Form.Group>

                        
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label className= 'bi bi-shield-lock text-primary'> Mật Khẩu</Form.Label>
                            <Form.Control type="password"  placeholder="Nhập mật khẩu"  value={password}onChange={(e) => setPassword(e.target.value)}required />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formConFirmPassword">
                            <Form.Label className= 'bi bi-shield-lock text-primary'> Nhập Lại Mật Khẩu</Form.Label>
                            <Form.Control type="password"  placeholder="Nhập Lại Mật Khẩu"  value={confirmPassword}onChange={(e) => setConfirmPassword(e.target.value)}required />
                        </Form.Group>
                        
                        <Button  variant="primary" type="submit"  className="w-100 mb-3 btn btn-primary" style={{ backgroundColor: '#00A2FF', border: 'none' }}>
                            Đăng Ký
                        </Button>

                       
                        <div className="text-center">

                            <small>
                                Quay lại {' '}
                                <a href="./login" style={{ color: '#00A2FF' }}>
                                    Đăng Nhập
                                </a>
                            </small>
                        </div>
                    </Form>
                </Card>
            </Container>
        </div>
    );
};

export default Register;