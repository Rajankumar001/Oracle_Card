import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';  // ✅ Import useNavigate
import './Login.css';
import { UserAction } from '../../Action/UserAction';
import Loader from '../../Loader';
import PhoneInput from 'react-phone-number-input';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();  // ✅ useNavigate for redirection
  const { LoginUser, loading, error } = useSelector((state) => state.LoginReducer);

  const [mobile, setMobile] = useState('');
  const [countryCode, setCountryCode] = useState('');

  useEffect(() => {
    const fetchCountryCode = async () => {
      try {
        const response = await axios.get('https://api-prod-new.tagmango.com/get-country-through-ip');
        if (response.data && response.data.result) {
          const resultObj = JSON.parse(response.data.result);
          if (resultObj && resultObj.countryCode) {
            setCountryCode(resultObj.countryCode);
          }
        }
      } catch (error) {
        console.error('Error fetching country code:', error);
      }
    };
    fetchCountryCode();
  }, []);

  // ✅ Use React Router's navigation instead of full-page reload
  useEffect(() => {
    if (LoginUser && Object.keys(LoginUser).length > 0) {
      localStorage.setItem('LoginUser', JSON.stringify(LoginUser)); // ✅ Save user in localStorage
      console.log("Stored User:", localStorage.getItem('LoginUser')); // ✅ Proper logging
      navigate('/home'); // ✅ Use React Router for smooth transition
    }
  }, [LoginUser, navigate]);

  const SigninHandler = async (e) => {
    e.preventDefault(); 
    if (!mobile || !mobile.startsWith('+') || mobile.length < 10) {  // ✅ More accurate validation
      toast.error('Please enter a valid mobile number with country code.');
      return;
    }

    try {
      await dispatch(UserAction({ mobile })); // ✅ Dispatch login action
    } catch (error) {
      console.error('Error signing in:', error);
      toast.error('Login failed. Please try again.');
    }
  };

  return (
    <>
      <div className="login-main-container">
        {loading && <p><Loader /></p>}
        {error && <p>Error: {error}</p>}
        <div className="Login_container">
          <Form>
            <h2>Login</h2>
            <Form.Group className="mb-3">
              <Form.Label className="title">Mobile Number</Form.Label>
              <PhoneInput
                international
                defaultCountry={countryCode || "IN"}
                placeholder="Enter your mobile number"
                value={mobile}
                onChange={setMobile} // ✅ Update state on change
                className="form_input form-control"
              />
            </Form.Group>
            <Button type="button" onClick={SigninHandler} className="login-button">
              Verify
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
