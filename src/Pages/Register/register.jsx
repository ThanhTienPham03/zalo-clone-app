import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Card, Image, Form, Button } from 'react-bootstrap';

const Register = () => {
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
            
            <Container className="d-flex justify-content-center align-items-center min-vh-100">
                <Card style={{ width: '400px' }} className="p-4 shadow">
                    {/* Logo Zalo */}
                    <div className="text-center mb-4  justify-content-center space-between align-items-center">
                        <h4 className='text-primary'> Đăng ký Zalo</h4>
                    </div>

                    <Form onSubmit={handleSubmit}>
                       
                        <Form.Group className="mb-3 " controlId="formPhone d-flex">
                            <Form.Label className= 'bi bi-telephone text-primary'> Số Điện Thoại</Form.Label>
                            <Form.Control  type="tel"  placeholder="Nhập số điện thoại" value={phone}onChange={(e) => setPhone(e.target.value)} required/>
                        </Form.Group>

                        
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label className= 'bi bi-shield-lock text-primary'> Mật Khẩu</Form.Label>
                            <Form.Control type="password"  placeholder="Nhập mật khẩu"  value={password}onChange={(e) => setPassword(e.target.value)}required />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label className= 'bi bi-shield-lock text-primary'> Nhập Lại Mật Khẩu</Form.Label>
                            <Form.Control type="password"  placeholder="Nhập Lại Mật Khẩu"  value={password}onChange={(e) => setPassword(e.target.value)}required />
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