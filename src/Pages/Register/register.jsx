import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Card, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const Register = () => {
    const [step, setStep] = useState(1); // Step 1: Register, Step 2: OTP Verification
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');

    const SUCCESS_MESSAGES = [
        "OTP sent to email",
        "Registration successful",
        "Email verification sent"
    ];
    
    const handleRegister = async (e) => {
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
            });
    
            console.log('Full server response:', response.data);
    
            if (response.data.success || SUCCESS_MESSAGES.includes(response.data.message)) {
                alert('Mã OTP đã được gửi đến email của bạn!');
                setStep(2); // Chuyển sang bước nhập OTP
            } else {
                const errorMessage = response.data.message || 'Đăng ký thất bại!';
                console.error('Server error message:', errorMessage);
                alert(errorMessage);
            }
        } catch (error) {
            console.error('Error details:', error.response ? error.response.data : error.message);
        if (error.message.includes('ERR_CONNECTION_REFUSED')) {
        alert('Không thể kết nối đến server. Vui lòng kiểm tra server hoặc thử lại sau!');
        } else {
         alert('Đã xảy ra lỗi. Vui lòng thử lại sau!');
        }
        }
    };
    
    const handleVerifyOtp = async (e) => {
        e.preventDefault();
    
        // Kiểm tra dữ liệu đầu vào
        if (!email || !otp || !password || !username || !phone) {
            alert('Vui lòng nhập đầy đủ thông tin!');
            return;
        }
    
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert('Email không hợp lệ!');
            return;
        }
    
        if (!/^\d{6}$/.test(otp)) { // Giả sử OTP là 6 chữ số
            alert('OTP phải là 6 chữ số!');
            return;
        }
    
        console.log('Verifying OTP with:', { email, otp, password, username, phone });
    
        try {
            const response = await axios.post('http://localhost:3000/auth/verifyOtp', {
                email,
                otp,
                password,
                username,
                phone,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
                timeout: 100000,
            });
    
            console.log('Server response:', response.data);
            if (response.data.success) {
                alert('Đăng ký thành công!');
                window.location.href = '/login';
            } else {
                throw new Error(response.data.message || 'Xác thực OTP thất bại!');
            }
        } catch (error) {
            handleError(error);
        }
    };
    
    // Hàm xử lý lỗi
    const handleError = (error) => {
        let errorMessage = 'Đã xảy ra lỗi không xác định';
    
        if (error.response) {
            switch (error.response.status) {
                case 400:
                    errorMessage = error.response.data.message || 'Yêu cầu không hợp lệ. Vui lòng kiểm tra lại dữ liệu!';
                    break;
                case 401:
                    errorMessage = 'Không được phép. Vui lòng đăng nhập lại!';
                    break;
                case 500:
                    errorMessage = 'Lỗi server. Vui lòng thử lại sau!';
                    break;
                default:
                    errorMessage = 'Lỗi không xác định từ server.';
            }
            console.error('Server response error:', error.response.data);
        } else if (error.code === 'ECONNABORTED') {
            errorMessage = 'Yêu cầu đã hết thời gian chờ. Vui lòng thử lại!';
        } else if (error.code === 'ERR_CONNECTION_REFUSED') {
            errorMessage = 'Không thể kết nối đến server. Vui lòng kiểm tra server hoặc thử lại sau!';
        } else {
            errorMessage = error.message;
        }
    
        console.error('Error details:', {
            message: error.message,
            code: error.code,
            status: error.response?.status,
            config: error.config,
        });
    
        alert(errorMessage);
    };
    return (
        <div style={{ backgroundColor: '#e8f3ff', minHeight: '100vh' }}>
            <Container className="d-flex justify-content-center align-items-center min-vh-100">
                <Card style={{ width: '400px' }} className="p-4 shadow">
                    {step === 1 ? (
                        <>
                            <div className="text-center mb-4">
                                <h4 className="text-primary">Đăng ký</h4>
                            </div>
                            <Form onSubmit={handleRegister}>
                                <Form.Group className="mb-3" controlId="formUserName">
                                    <Form.Label className="bi bi-person-circle text-primary"> UserName</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Nhập UserName"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label className="bi bi-envelope text-primary"> Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Nhập Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formPhone">
                                    <Form.Label className="bi bi-telephone text-primary"> Số Điện Thoại</Form.Label>
                                    <Form.Control
                                        type="tel"
                                        placeholder="Nhập số điện thoại"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
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
                                <Form.Group className="mb-3" controlId="formConfirmPassword">
                                    <Form.Label className="bi bi-shield-lock text-primary"> Nhập Lại Mật Khẩu</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Nhập Lại Mật Khẩu"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="w-100 mb-3 btn btn-primary"
                                    style={{ backgroundColor: '#00A2FF', border: 'none' }}
                                >
                                    Đăng Ký
                                </Button>
                            </Form>
                        </>
                    ) : (
                        <>
                            <div className="text-center mb-4">
                                <h4 className="text-primary">Xác Thực OTP</h4>
                            </div>
                            <Form onSubmit={handleVerifyOtp}>
                                <Form.Group className="mb-3" controlId="formOtp">
                                    <Form.Label className="bi bi-key text-primary"> Mã OTP</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Nhập mã OTP"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="w-100 mb-3 btn btn-primary"
                                    style={{ backgroundColor: '#00A2FF', border: 'none' }}
                                >
                                    Xác Thực
                                </Button>
                            </Form>
                        </>
                    )}
                </Card>
            </Container>
        </div>
    );
};

export default Register;