import React, { useState } from 'react';
import rightSideImage from '../assets/rightside.png';

const styles = `
/* Font Imports */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Spicy+Rice&display=swap');

.surveyterra-login * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.surveyterra-login {
  width: 100%;
  height: 100vh;
  min-height: 900px; /* Added minimum height */
  position: relative;
  background: white;
  overflow: hidden;
  font-family: 'Poppins', sans-serif;
}

/* Logo */
.surveyterra-login .logo {
  position: absolute;
  left: 48px;
  top: 48px;
  width: 219.54px;
  height: 56px;
  overflow: hidden;
}

.surveyterra-login .logo-text {
  position: absolute;
  left: 0;
  top: 14px;
  color: black;
  font-size: 36px;
  font-family: 'Spicy Rice', cursive;
  font-weight: 400;
  line-height: 28px;
  word-wrap: break-word;
}

/* Right Side Image */
.surveyterra-login .right-image {
  width: 616px;
  height: 816px;
  position: absolute;
  left: 720px;
  top: 104px;
  background: #D9D9D9;
  border-radius: 30px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* Pagination Dots */
.surveyterra-login .pagination-dots {
  position: absolute;
  left: 994px;
  top: 886px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
}

.surveyterra-login .dot-active {
  width: 32px;
  height: 10px;
  background: #515DEF;
  border-radius: 5px;
}

.surveyterra-login .dot-inactive {
  width: 10px;
  height: 10px;
  background: white;
  border-radius: 50%;
  border: 1px solid #ccc;
}

/* Login Form Container */
.surveyterra-login .login-container {
  width: 512px;
  position: absolute;
  left: 104px;
  top: 204px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
}

/* Header */
.surveyterra-login .login-title {
  color: #313131;
  font-size: 40px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  word-wrap: break-word;
}

.surveyterra-login .login-subtitle {
  opacity: 0.75;
  color: #313131;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  word-wrap: break-word;
}

/* Form */
.surveyterra-login .form-container {
  width: 512px;
  position: absolute;
  left: 104px;
  top: 339px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 40px;
  padding-bottom: 60px; /* Added bottom padding */
}

.surveyterra-login .form-fields {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
}

/* Input Field */
.surveyterra-login .input-field {
  width: 100%;
  height: 56px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.surveyterra-login .input-wrapper {
  width: 100%;
  background: white;
  border-radius: 4px;
  border: 1px solid #79747E;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  position: relative;
}

.surveyterra-login .input-wrapper:focus-within {
  border-color: #515DEF;
}

.surveyterra-login .input-content {
  width: 100%;
  padding: 8px 16px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.surveyterra-login .input-main {
  flex: 1;
  height: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.surveyterra-login .input-value {
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  color: #1C1B1F;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  padding: 0;
}

.surveyterra-login .input-label {
  position: absolute;
  left: -4px;
  top: -16px;
  padding: 0 4px;
  background: white;
  color: #1C1B1F;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  transition: all 0.2s ease;
}

.surveyterra-login .input-wrapper:focus-within .input-label {
  color: #515DEF;
}

/* Password Field */
.surveyterra-login .password-toggle {
  width: 48px;
  height: 48px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.surveyterra-login .eye-icon {
  width: 24px;
  height: 24px;
  position: relative;
  overflow: hidden;
}

/* Remember Me and Forgot Password */
.surveyterra-login .form-options {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 252px;
}

.surveyterra-login .remember-me {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
}

.surveyterra-login .checkbox {
  width: 24px;
  height: 24px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.surveyterra-login .checkbox-input {
  width: 18px;
  height: 18px;
  position: absolute;
  left: 3px;
  top: 3px;
  border: 2px solid #313131;
  background: transparent;
  cursor: pointer;
}

.surveyterra-login .checkbox-input:checked {
  background: #515DEF;
  border-color: #515DEF;
}

.surveyterra-login .checkbox-label {
  color: #313131;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  cursor: pointer;
}

.surveyterra-login .forgot-password {
  text-align: right;
  color: #FF8682;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
}

.surveyterra-login .forgot-password:hover {
  text-decoration: underline;
}

/* Login Button */
.surveyterra-login .login-section {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
}

.surveyterra-login .login-button {
  width: 512px;
  height: 48px;
  padding: 8px 16px;
  background: #91FF66;
  border-radius: 4px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.surveyterra-login .login-button:hover {
  background: #7FE650;
  transform: translateY(-1px);
}

.surveyterra-login .login-button-text {
  color: black;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
}

/* Sign Up Link */
.surveyterra-login .signup-link {
  width: 100%;
  text-align: center;
}

.surveyterra-login .signup-text {
  color: #313131;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
}

.surveyterra-login .signup-link-text {
  color: #FF8682;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
}

.surveyterra-login .signup-link-text:hover {
  text-decoration: underline;
}

/* Divider */
.surveyterra-login .divider-section {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
}

.surveyterra-login .divider-line {
  flex: 1;
  height: 0.5px;
  opacity: 0.25;
  background: #313131;
}

.surveyterra-login .divider-text {
  opacity: 0.5;
  color: #313131;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

/* Social Login - UPDATED */
.surveyterra-login .social-login {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
}

.surveyterra-login .social-button {
  flex: 1;
  padding: 20px 24px; /* Increased padding */
  border-radius: 4px;
  border: 1px solid #515DEF;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 64px; /* Added minimum height */
}

.surveyterra-login .social-button:hover {
  background: #f8f9ff;
  transform: translateY(-1px);
}

.surveyterra-login .social-icon {
  width: 32px;  /* Increased from 24px */
  height: 32px; /* Increased from 24px */
  position: relative;
  overflow: hidden;
}

/* Facebook icon specific styles */
.surveyterra-login .social-button.facebook {
  border-color: #1877F2;
}

.surveyterra-login .social-button.google {
  border-color: #DB4437;
}

.surveyterra-login .social-button.apple {
  border-color: #000000;
}

/* Responsive Design */
@media (max-width: 1400px) {
  .surveyterra-login .right-image {
    left: 620px;
    width: 516px;
    height: 716px;
  }
  
  .surveyterra-login .pagination-dots {
    left: 844px;
  }
}

@media (max-width: 1200px) {
  .surveyterra-login .right-image {
    display: none;
  }
  
  .surveyterra-login .pagination-dots {
    display: none;
  }
  
  .surveyterra-login .login-container,
  .surveyterra-login .form-container {
    left: 50%;
    transform: translateX(-50%);
  }
}

@media (max-width: 600px) {
  .surveyterra-login .login-container,
  .surveyterra-login .form-container {
    width: 90%;
    left: 5%;
    transform: none;
  }
  
  .surveyterra-login .logo {
    left: 20px;
    top: 20px;
  }
  
  .surveyterra-login .login-button {
    width: 100%;
  }
  
  .surveyterra-login .form-options {
    gap: 20px;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .surveyterra-login .social-login {
    flex-direction: column;
  }
  
  .surveyterra-login .social-button {
    width: 100%;
  }
}
`;

// Types
interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface SurveyTerraLoginProps {
  onLogin?: (formData: LoginFormData) => void;
  onSignUp?: () => void;
  onForgotPassword?: () => void;
  onSocialLogin?: (provider: 'facebook' | 'google' | 'apple') => void;
  rightImageSrc?: string;
  isLoading?: boolean;
}

const SurveyTerraLogin: React.FC<SurveyTerraLoginProps> = ({
  onLogin,
  onSignUp,
  onForgotPassword,
  onSocialLogin,
  rightImageSrc,
  isLoading = false
}) => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
    rememberMe: false
  });
  
  const [showPassword, setShowPassword] = useState(false);

  // Inject styles
  React.useEffect(() => {
    const styleId = 'surveyterra-login-styles';
    if (!document.getElementById(styleId)) {
      const styleElement = document.createElement('style');
      styleElement.id = styleId;
      styleElement.textContent = styles;
      document.head.appendChild(styleElement);
    }
  }, []);

  const handleInputChange = (field: keyof LoginFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onLogin) {
      onLogin(formData);
    }
  };

  const handleSocialLogin = (provider: 'facebook' | 'google' | 'apple') => {
    if (onSocialLogin) {
      onSocialLogin(provider);
    }
  };

  const EyeIcon = ({ visible }: { visible: boolean }) => (
    <svg className="eye-icon" viewBox="0 0 24 24" fill="none">
      {visible ? (
        <>
          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z" stroke="#313131" strokeWidth="2"/>
          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke="#313131" strokeWidth="2"/>
        </>
      ) : (
        <>
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" stroke="#313131" strokeWidth="2"/>
          <path d="M1 1l22 22" stroke="#313131" strokeWidth="2"/>
        </>
      )}
    </svg>
  );

  const FacebookIcon = () => (
    <svg className="social-icon" viewBox="0 0 24 24" fill="#1877F2">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );

  const GoogleIcon = () => (
    <svg className="social-icon" viewBox="0 0 24 24">
      <path fill="#EA4335" d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"/>
      <path fill="#34A853" d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2616287 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"/>
      <path fill="#4A90E2" d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"/>
      <path fill="#FBBC05" d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"/>
    </svg>
  );

  const AppleIcon = () => (
    <svg className="social-icon" viewBox="0 0 24 24" fill="#000000">
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z"/>
    </svg>
  );

  return (
    <div className="surveyterra-login">
      {/* Logo */}
      <div className="logo">
        <div className="logo-text">SurveyTeraa</div>
      </div>

      {/* Right Side Image */}
      <div 
        className="right-image"
        style={{ backgroundImage: `url(${rightSideImage})` }}
      ></div>

      {/* Pagination Dots */}
      <div className="pagination-dots">
        <div className="dot-active"></div>
        <div className="dot-inactive"></div>
        <div className="dot-inactive"></div>
      </div>

      {/* Login Header */}
      <div className="login-container">
        <div className="login-title">Login</div>
        <div className="login-subtitle">Login to access your travelwise account</div>
      </div>

      {/* Login Form */}
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-fields">
          {/* Email Field */}
          <div className="input-field">
            <div className="input-wrapper">
              <div className="input-content">
                <div className="input-main">
                  <input
                    type="email"
                    className="input-value"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="john.doe@gmail.com"
                    required
                  />
                  <div className="input-label">Email</div>
                </div>
              </div>
            </div>
          </div>

          {/* Password Field */}
          <div className="input-field">
            <div className="input-wrapper">
              <div className="input-content">
                <div className="input-main">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="input-value"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    placeholder="•••••••••••••••••••••••••"
                    required
                  />
                  <div className="input-label">Password</div>
                </div>
                <div 
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <EyeIcon visible={showPassword} />
                </div>
              </div>
            </div>
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="form-options">
            <div className="remember-me">
              <div className="checkbox">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  checked={formData.rememberMe}
                  onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
                />
              </div>
              <label className="checkbox-label">Remember me</label>
            </div>
            <a 
              href="#" 
              className="forgot-password"
              onClick={(e) => {
                e.preventDefault();
                if (onForgotPassword) onForgotPassword();
              }}
            >
              Forgot Password
            </a>
          </div>
        </div>

        {/* Login Button and Sign Up */}
        <div className="login-section">
          <button 
            type="submit" 
            className="login-button"
            disabled={isLoading}
          >
            <div className="login-button-text">
              {isLoading ? 'Logging in...' : 'Login'}
            </div>
          </button>
          
          <div className="signup-link">
            <span className="signup-text">Don't have an account? </span>
            <a 
              href="#" 
              className="signup-link-text"
              onClick={(e) => {
                e.preventDefault();
                if (onSignUp) onSignUp();
              }}
            >
              Sign up
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-section">
          <div className="divider-line"></div>
          <div className="divider-text">Or login with</div>
          <div className="divider-line"></div>
        </div>

        {/* Social Login */}
        <div className="social-login">
          <div 
            className="social-button facebook"
            onClick={() => handleSocialLogin('facebook')}
          >
            <FacebookIcon />
          </div>
          <div 
            className="social-button google"
            onClick={() => handleSocialLogin('google')}
          >
            <GoogleIcon />
          </div>
          <div 
            className="social-button apple"
            onClick={() => handleSocialLogin('apple')}
          >
            <AppleIcon />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SurveyTerraLogin;