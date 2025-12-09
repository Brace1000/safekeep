import React, { useState } from 'react';
import './Auth.css';
import logo from '../../assets/Logo.png';
import { Link } from 'react-router-dom';
import { AuthService } from '../../services/auth.js';

const LoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [authError, setAuthError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPwd, setShowPwd] = useState(false);

  const onChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.com$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!emailRegex.test(form.email)) newErrors.email = 'Enter a valid .com email';

    if (!form.password) newErrors.password = 'Password is required';
    else if (!passwordRegex.test(form.password)) newErrors.password = 'Invalid password format';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setAuthError('');
    if (!validate()) return;

    setIsLoading(true);
    try {
      const result = await AuthService.login({
        email: form.email.trim().toLowerCase(),
        password: form.password,
      });

      if (result.success) {
        window.location.href = '/dashboard';
      } else {
        setAuthError(result.error);
      }
    } catch (error) {
      setAuthError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      {/* Left Half */}
      <div className="auth-left-half">
        <h1 className="auth-brand">KeepSafe</h1>
        <img src={logo} alt="KeepSafe Logo" className="auth-logo" />
        
        {}
        <div className="auth-illustration">
          {}
          {}
        </div>
        
        </div>

      {/* Right Half */}
      <div className="auth-right-half">
        <div className="auth-form-card">
          <h2 className="auth-title">Welcome Back</h2>
          <p className="auth-subtitle">
            Today is a new day. It's your day. You shape it.<br />
            Sign in to start managing your projects.
          </p>
          
          <form className="auth-form" onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Example@email.com"
                className="form-control"
                value={form.email}
                onChange={onChange}
              />
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
              <Link to="/forgot-password" className="forgot-password">
                Forgot Password?
              </Link>
            </div>
            
            {errors.email && <small style={{ color: '#d00' }}>{errors.email}</small>}
            {errors.password && <small style={{ color: '#d00', display: 'block', marginTop: '4px' }}>{errors.password}</small>}

            <button type="submit" className="btn btn-primary" disabled={isLoading}>
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
            {authError && <small style={{ color: '#d00', display: 'block', marginTop: '8px' }}>{authError}</small>}
          </form>
          
          <div className="auth-divider">
            <span className="auth-divider-text">Or</span>
          </div>
          
          <button className="btn btn-social btn-google">
            <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google logo" />
            Sign in with Google
          </button>
          
          <button className="btn btn-social btn-facebook">
            <img src="https://img.icons8.com/fluency/16/000000/facebook-new.png" alt="Facebook logo" />
            Sign in with Facebook
          </button>
          
          <p className="auth-signup-link">            Don't you have an account? <Link to="/signup">Sign up</Link>
          </p>
          <p className="auth-rights-reserved">© 2025 ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
