import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import './Login.css';
import { UserAction } from '../../Action/UserAction';
import Loader from '../../Loader';
import PhoneInput from 'react-phone-number-input';

const Login = () => {
  const dispatch = useDispatch();
  const User = useSelector((state) => state.LoginReducer);
  const { LoginUser, loading, error } = User;
  console.log("loginUser", LoginUser);
  
  const [mobile, setMobile] = useState('');
  const [countryCode, setCountryCode] = useState('');

  useEffect(() => {
    const fetchCountryCode = async () => {
      try {
        const response = await axios.get('https://api-prod-new.tagmango.com/get-country-through-ip');
        if (response.data?.result) {
          const resultObj = JSON.parse(response.data.result);
          if (resultObj?.countryCode) {
            setCountryCode(resultObj.countryCode);
          }
        }
      } catch (error) {
        console.error('Error fetching country code:', error);
      }
    };
    fetchCountryCode();
  }, []);

  useEffect(() => {
    console.log("LoginUser in useEffect:", LoginUser);
    if (LoginUser && Object.keys(LoginUser).length > 0) {
      const userString = JSON.stringify(LoginUser);
      localStorage.setItem('LoginUser', userString);
      console.log("Stored in localStorage:", localStorage.getItem('LoginUser'));
      window.location.href = '/home';
    }
  }, [LoginUser]);

  const notifyContactNotFound = () => {
    toast.error("Contact not found!");
  };

  const SigninHandler = async (e) => {
    e.preventDefault(); 
    console.log("SigninHandler function is calling");

    if (!mobile || !mobile.startsWith('+') || mobile.length < 10) {
      alert('Please enter a valid mobile number with country code.');
      return;
    }

    try {
      await dispatch(UserAction({ mobile }));
      console.log("User after dispatch:", mobile);
    } catch (error) {
      console.error('Error signing in:', error);
      notifyContactNotFound();
    }
  };

  return (
    <>
      <div className="login-main-container">
        {loading && <Loader />}
        {error && <p className="error-text">{error}</p>}
        {LoginUser && (
          <div className="welcome-container">
            <p><span>Welcome</span> {LoginUser.name}</p>
          </div>
        )}
        <div className="Login_container">
          <h2>Login</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicMobile">
              <Form.Label className="title">Mobile Number</Form.Label>
              <PhoneInput
                international
                defaultCountry={countryCode || "IN"}
                placeholder="Enter your mobile number"
                value={mobile}
                onChange={setMobile}
                className="form_input form-control"
              />
              <Form.Text className="text-muted">
                <p>We'll never share your mobile number with anyone else.</p>
              </Form.Text>
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
