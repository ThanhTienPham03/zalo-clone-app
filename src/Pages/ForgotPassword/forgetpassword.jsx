import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Card, Image, Form, Button } from 'react-bootstrap';

const Forgetpassword = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/auth/forgotPassword', {
                email,
            });

            if (response.status === 200) {
                alert(response.data.message);
            } else {
                alert(response.data.message || 'Something went wrong');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to send OTP. Please try again later.');
        }
    };

    return (
        <div style={{ backgroundColor: '#e8f3ff', minHeight: '100vh' }}>
            <Container className="d-flex justify-content-center align-items-center min-vh-100">
                <Card style={{ width: '400px' }} className="p-4 shadow">
                    <div className="text-center mb-4 justify-content-center space-between align-items-center">
                        <h5 className="text-primary">Đổi mật khẩu</h5>
                    </div>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label className="bi bi-envelope text-primary">Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Nhập Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Button
                            variant="primary"
                            type="submit"
                            className="w-100 mb-3"
                            style={{ backgroundColor: '#00A2FF', border: 'none' }}
                        >
                            Nhận mã OTP
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

export default Forgetpassword;
