import { useState } from 'react';
import axios from 'axios';

import InputField from '../../../atoms/InputField';
import Buttons from '../../../atoms/Buttons';
import Layout from '../../../Layout';
import { REGISTER_URL } from '../../../../apis/api';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [signUpDetails, setSignUpDetails] = useState({
    name: '',
    password1: '',
    password2: '',
    email: '',
  });
  const handleChange = (e) => {
    setSignUpDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(REGISTER_URL, signUpDetails);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="auth">
      <h1>Enter Signup details</h1>
      <Layout>
        <div className="auth__form">
          <form className="auth__form" onSubmit={handleSubmit}>
            <div className="auth__inputs">
              <InputField
                name="name"
                label="User name"
                placeholder="Enter Username"
                type="name"
                handleChange={handleChange}
                value={signUpDetails.name}
              />
            </div>
            <div className="auth__inputs">
              <InputField
                name="email"
                label="Email"
                placeholder="Enter email address"
                type="email"
                handleChange={handleChange}
                value={signUpDetails.email}
              />
            </div>

            <div className="auth__inputs">
              <InputField
                name="password1"
                label="Password"
                placeholder="Enter password"
                type="password"
                handleChange={handleChange}
                value={signUpDetails.password1}
              />
            </div>
            <div className="auth__inputs">
              <InputField
                name="password2"
                label="Confirm Password"
                placeholder="Confirm password"
                type="password"
                handleChange={handleChange}
                value={signUpDetails.password2}
              />
            </div>
            <Buttons btnText="Sign In" />
          </form>
          <p className="links">
            Want to open an accout sign up <Link to="/login">here</Link>
          </p>
        </div>
      </Layout>
    </div>
  );
};

export default SignUp;
