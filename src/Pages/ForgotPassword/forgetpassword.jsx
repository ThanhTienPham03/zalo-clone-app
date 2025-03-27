import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Card, Image, Form, Button } from 'react-bootstrap';

const Forgetpassword = () => {

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
                    <Image src=" ./Icon_of_Zalo.png" width="50"className="mb-3" />
                        <h5> Nhập Số điện thoại của bạn</h5>
                    </div>

                    <Form onSubmit={handleSubmit}>
                       
                        <Form.Group className="mb-3 " controlId="formPhone d-flex">
                            <Form.Label className= 'bi bi-telephone text-primary'> Số Điện Thoại</Form.Label>
                            <Form.Control  type="tel"  placeholder="Nhập số điện thoại" value={phone}onChange={(e) => setPhone(e.target.value)} required/>
                        </Form.Group>

                        
                        <Button  variant="primary" type="submit"  className="w-100 mb-3" style={{ backgroundColor: '#00A2FF', border: 'none' }}>
                            Tiếp tục
                        </Button>

                       
                        <div className="text-right">
                        <small>
                                
                                <a href="./login" style={{ color: '#00A2FF' }}>
                                Quay lại
                                </a>
                            </small>
                        </div>
                    </Form>
                </Card>
            </Container>
        </div>
    );
}

export default Forgetpassword;
