import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Card, Form, Button } from 'react-bootstrap';

const ConfirmOTP = () => {
    const [otp, setOtp] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your OTP verification logic here
        console.log('OTP entered:', otp);
    };

    return (
        <div style={{ backgroundColor: '#e8f3ff', minHeight: '100vh' }}>
            <Container className="d-flex justify-content-center align-items-center min-vh-100">
                <Card style={{ width: '400px' }} className="p-4 shadow">
                    {/* Logo Zalo */}
                    <div className="text-center mb-4 justify-content-center space-between align-items-center">
                        <h5 className="text-primary">Nhập mã OTP</h5>
                    </div>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formOTP">
                            <Form.Label className="text-primary">Mã OTP</Form.Label>
                            <Form.Control
                                type="otp"
                                placeholder="Nhập mã OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Button
                            variant="primary"
                            type="submit"
                            className="w-100 mb-3"
                            style={{ backgroundColor: '#00A2FF', border: 'none' }}
                        >
                            Xác nhận
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
};

export default ConfirmOTP;