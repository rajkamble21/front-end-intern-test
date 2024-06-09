// src/components/Form.js
import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';

const Form = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email) {
      setError('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Invalid email format');
      return;
    }

    try {
      const response = await axios.post('http://34.225.132.160:8002/api', { email });
      if (response.status === 200) {
        setSuccess('Form Submitted');
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setError('Email domain @ez.works is not allowed');
      } else {
        setError('An error occurred');
      }
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className={error ? 'input-error' : ''}
        />
        <button type="submit">Contact Me</button>
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
      </form>
    </div>
  );
};

export default Form;
