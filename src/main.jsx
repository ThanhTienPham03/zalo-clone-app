import React from 'react';
import ReactDOM from 'react-dom/client'; // Sử dụng 'react-dom/client' thay vì 'react-dom'
import { Provider } from 'react-redux';
import store from './redux/store/store'; // Đường dẫn đến store của bạn
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Tạo root bằng createRoot
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);