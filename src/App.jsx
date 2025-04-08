import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/login';
import Register from './Pages/Register/register';
import ForgotPassword from './Pages/ForgotPassword/forgetpassword';
import Home from './Pages/Home/home';
import ChatPage from './Pages/Chat/ChatPage';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import ConfirmOTP from './Pages/ConfimOTP/ConfirmOTP';
import UserProfile from './components/UserProfile/UserProfile';
import ResetPassword from './Pages/ResetPassword/ResetPasswordForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const mockUser = {
    user_id: 1,
    fullname: "Nguyễn Đức Huy",
    age: 23,
    gender: true,
    avatar_url: "",
    createdAt: "2025-04-06T09:30:13.000Z",
    updatedAt: "2025-04-06T10:14:46.000Z"
  };
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<UserProfile user={mockUser} />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />
          <Route path="/confirmotp" element={<ConfirmOTP />} />
          <Route path="/chat" element={<ProtectedRoute><ChatPage /></ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;