import React, { useState } from 'react';
import './Auth.css';
import logo from '../../assets/Logo.png';
import { Link } from 'react-router-dom';
import { AuthService } from '../../services/auth.js';

const SignupPage = () => {
  const [form, setForm] = useState({ fullName: '', email: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState(false);

  const onChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.com$/; // must include @ and end with .com
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

    if (!form.fullName.trim()) newErrors.fullName = 'Full name is required';

    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!emailRegex.test(form.email)) newErrors.email = 'Enter a valid .com email (e.g., name@example.com)';

    if (!form.password) newErrors.password = 'Password is required';
    else if (!passwordRegex.test(form.password)) newErrors.password = 'Password must be 8+ chars, include upper, lower, number, and special char';

    if (!form.confirmPassword) newErrors.confirmPassword = 'Confirm your password';
    else if (form.password !== form.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    try {
      const result = await AuthService.signup({
        fullName: form.fullName.trim(),
        email: form.email.trim().toLowerCase(),
        password: form.password,
      });

      if (result.success) {
        setSuccessMessage('Account created successfully! Redirecting to login...');
        setTimeout(() => {
          window.location.href = '/login';
        }, 2000);
      } else {
        setErrors({ general: result.error });
      }
    } catch (error) {
      setErrors({ general: 'Network error. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left-half">
        <h1 className="auth-brand">KeepSafe</h1>
        <img src={logo} alt="KeepSafe Logo" className="auth-logo" />
      </div>
      <div className="auth-right-half">
        <div className="auth-form-card">
          <h2 className="auth-title">Create your account</h2>
          <p className="auth-subtitle">Fill in your details to get started.</p>
          <form className="auth-form" onSubmit={onSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                placeholder="John Doe"
                className="form-control"
                value={form.fullName}
                onChange={onChange}
              />
              {errors.fullName && <small style={{ color: '#d00' }}>{errors.fullName}</small>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="name@example.com"
                className="form-control"
                value={form.email}
                onChange={onChange}
              />
              {errors.email && <small style={{ color: '#d00' }}>{errors.email}</small>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPwd ? 'text' : 'password'}
                  id="password"
                  placeholder="At least 8 characters"
                  className="form-control"
                  value={form.password}
                  onChange={onChange}
                />
                <button
                  type="button"
                  onClick={() => setShowPwd((s) => !s)}
                  aria-label={showPwd ? 'Hide password' : 'Show password'}
                  style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#007bff', fontWeight: 600, cursor: 'pointer' }}
                >
                  {showPwd ? 'Hide' : 'Show'}
                </button>
              </div>
              {errors.password && <small style={{ color: '#d00' }}>{errors.password}</small>}
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showConfirmPwd ? 'text' : 'password'}
                  id="confirmPassword"
                  placeholder="Re-enter your password"
                  className="form-control"
                  value={form.confirmPassword}
                  onChange={onChange}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPwd((s) => !s)}
                  aria-label={showConfirmPwd ? 'Hide password' : 'Show password'}
                  style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#007bff', fontWeight: 600, cursor: 'pointer' }}
                >
                  {showConfirmPwd ? 'Hide' : 'Show'}
                </button>
              </div>
              {errors.confirmPassword && <small style={{ color: '#d00' }}>{errors.confirmPassword}</small>}
            </div>

            <button type="submit" className="btn btn-primary" disabled={isLoading}>
              {isLoading ? 'Creating account...' : 'Sign up'}
            </button>
            {successMessage && <small style={{ color: '#0a0', display: 'block', marginTop: '8px' }}>{successMessage}</small>}
            {errors.general && <small style={{ color: '#d00', display: 'block', marginTop: '8px' }}>{errors.general}</small>}
          </form>
            <button className="btn btn-social btn-google">
            <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google logo" />
            Sign in with Google
          </button>
          
          <button className="btn btn-social btn-facebook">
            <img src="https://img.icons8.com/fluency/16/000000/facebook-new.png" alt="Facebook logo" />
            Sign in with Facebook
          </button>

          <p className="auth-signup-link" style={{ marginTop: '16px' }}>
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
          <p className="auth-rights-reserved">© 2025 ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
