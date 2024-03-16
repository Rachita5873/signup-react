import React, { useState } from 'react';
import '../style/form.css';

const Form = () => {
  // State variables for input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // State variables for input validation
  const [emailValidated, setEmailValidated] = useState(false);
  const [passwordValidated, setPasswordValidated] = useState(false);
  const [confirmPasswordValidated, setConfirmPasswordValidated] = useState(false);

  // Function to handle form submission
  const handleSubmit = () => {
    if (emailValidated && passwordValidated && confirmPasswordValidated) {
      alert('Form submitted successfully');
    } else {
      alert("Can't submit the form");
    }
  };

  // Function to handle email input validation
  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValidated(emailRegex.test(value));
  };

  // Function to handle password input validation
  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
    setPasswordValidated(value.length >= 8);
  };

  // Function to handle confirm password input validation
  const handleConfirmPasswordChange = (e) => {
    const { value } = e.target;
    setConfirmPassword(value);
    setConfirmPasswordValidated(value === password);
  };

  return (
    <div className='form-container'>
      <div className='input-container'>
        <label>Email:</label>
        <input
          type='email'
          value={email}
          onChange={handleEmailChange}
          className={emailValidated ? 'valid' : 'invalid'}
        />
        {!emailValidated && <p className='error'>Invalid email format</p>}
      </div>
      <div className='input-container'>
        <label>Password:</label>
        <input
          type='password'
          value={password}
          onChange={handlePasswordChange}
          className={passwordValidated ? 'valid' : 'invalid'}
        />
        {!passwordValidated && <p className='error'>Password must be at least 8 characters long</p>}
      </div>
      <div className='input-container'>
        <label>Confirm Password:</label>
        <input
          type='password'
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          className={confirmPasswordValidated ? 'valid' : 'invalid'}
        />
        {!confirmPasswordValidated && <p className='error'>Passwords do not match</p>}
      </div>
      <button onClick={handleSubmit}>Sign Up</button>
    </div>
  );
};

export default Form;
