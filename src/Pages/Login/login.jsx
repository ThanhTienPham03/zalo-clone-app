import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Card, Image, Form, Button } from 'react-bootstrap';

const Login = () => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý logic đăng nhập ở đây
        console.log('Phone:', phone);
        console.log('Password:', password);
    };

    return (
        <div style={{ backgroundColor: '#e8f3ff', minHeight: '100vh' }}>
            <div className="text-center  justify-content-center align-items-center mb-3  ">
                <h1 className="text-center text-primary fw-bolder mb-3"> Zalo</h1>
                <h3> Đăng nhập Zalo </h3>
                <h3> Kết nối ứng dụng nhắn gửi yêu thương</h3>
            </div>
            <Container className="d-flex justify-content-center align-items-center mt-3">
            
                <Card style={{ width: '400px' }} className="p-4 shadow">
                    <Form onSubmit={handleSubmit}>
                       
                        <Form.Group className="mb-3 " controlId="formPhone d-flex">
                            <Form.Label className= 'bi bi-telephone text-primary'> Số Điện Thoại</Form.Label>
                            <Form.Control  type="tel"  placeholder="Nhập số điện thoại" value={phone}onChange={(e) => setPhone(e.target.value)} required/>
                        </Form.Group>

                        
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label className= 'bi bi-shield-lock text-primary'> Mật Khẩu</Form.Label>
                            <Form.Control type="password"  placeholder="Nhập mật khẩu"  value={password}onChange={(e) => setPassword(e.target.value)}required />
                        </Form.Group>

                        
                        <Button  variant="primary" type="submit"  className="w-100 mb-3" style={{ backgroundColor: '#00A2FF', border: 'none' }}>
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
}

export default Login;