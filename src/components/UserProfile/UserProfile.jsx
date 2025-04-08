import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './UserProfile.css';

const UserProfile = () => {
  const { id } = useParams(); 
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setError('User ID is missing.');
      setLoading(false);
      return;
    }

    // Fetch user details from the backend using the dynamic ID
    axios
      .get(`http://localhost:3000/api/userDetails/${id}`)
      .then((response) => {
        setUser(response.data.UserDetail);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        if (err.response) {
          setError(`Error ${err.response.status}: ${err.response.data || 'Failed to fetch user data'}`);
        } else if (err.request) {
          setError('No response from server. Please try again later.');
        } else {
          setError('An unexpected error occurred.');
        }
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mt-4" style={{ maxWidth: '400px' }}>
      <div className="card shadow-sm" style={{ borderRadius: '8px' }}>
        {/* Cover Image */}
        <div className="profile-cover" style={{ position: 'relative' }}>
          <img
            src={user.cover_url || './public/NKH.png'}
            alt="Cover"
            className="img-fluid w-100"
            style={{
              borderTopLeftRadius: '8px',
              borderTopRightRadius: '8px',
              height: '150px',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* User Info */}
        <div className="card-body d-flex align-items-center gap-2">
          {/* Avatar */}
          <div
            className="profile-avatar"
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '2px solid white',
            }}
          >
            <img
              src={user.avatar_url || './public/NKH.webp'}
              alt={`${user.fullname}'s avatar`}
              className="img-fluid"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          {/* Name and Buttons */}
          <div>
            <h5 className="card-title mb-1">{user.fullname}</h5>
            <div className="d-flex gap-1">
              <button className="btn btn-primary btn-sm">Kết bạn</button>
              <button className="btn btn-outline-primary btn-sm">Nhắn tin</button>
            </div>
          </div>
        </div>

        {/* Personal Info */}
        <div className="card-body">
          <h6 className="mb-2">Thông tin cá nhân</h6>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <i className="bi bi-gender-ambiguous me-2"></i>
              <strong>Giới tính:</strong> {user.gender ? 'Nam' : 'Nữ'}
            </li>
            <li className="list-group-item">
              <i className="bi bi-calendar-event me-2"></i>
              <strong>Tuổi:</strong> {user.age || '--/--/----'}
            </li>
            <li className="list-group-item">
              <i className="bi bi-calendar-check me-2"></i>
              <strong>Ngày tạo:</strong> {new Date(user.createdAt).toLocaleDateString()}
            </li>
            <li className="list-group-item">
              <i className="bi bi-calendar-check-fill me-2"></i>
              <strong>Ngày cập nhật:</strong> {new Date(user.updatedAt).toLocaleDateString()}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;