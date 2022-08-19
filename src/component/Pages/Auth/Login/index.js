import axios from 'axios';
import { useState } from 'react';
import { LOGIN_URL } from '../../../../apis/api';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Buttons from '../../../atoms/Buttons';
import InputField from '../../../atoms/InputField';
import Layout from '../../../Layout';
import '../auth.css';

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setLoginDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(LOGIN_URL, loginDetails);
      navigate('/');
      localStorage.setItem('urlloginDetails', JSON.stringify(data));
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="auth">
      <h1>Enter Login details</h1>
      <Layout>
        <div className="auth__form">
          <form onSubmit={handleSubmit}>
            <div className="auth__inputs">
              <InputField
                name="email"
                label="Email"
                placeholder="Enter email address"
                type="email"
                handleChange={handleChange}
                value={loginDetails.email}
              />
            </div>
            <div className="auth__inputs">
              <InputField
                label="Password"
                placeholder="Input password"
                type="password"
                name="password"
                handleChange={handleChange}
                value={loginDetails.password}
              />
            </div>
            <Buttons btnText="Login" />
          </form>
          <p className="links">
            Want to open an accout sign up <Link to="/signup">here</Link>
          </p>
        </div>
      </Layout>
    </div>
  );
};

export default Login;
