import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/axiosConfig';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await api.post('/user/forgot-password', { email });

      if (response.data.message) {
        setMessage('Password reset link has been sent to your email.');
      }
    } catch (error) {
      setMessage('Error: Could not send password reset link. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center mt-60">
      <div className="w-full sm:w-4/5 md:w-2/3 lg:w-1/3 border-2 border-black text-center rounded-lg bg-gray-400">
        <div className="p-2">
          <p className="p-4 font-bold text-2xl">Forgot Password</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-60 sm:w-72 md:w-80 lg:w-96 h-12 border-2 border-gray rounded-full text-center hover:border-green-400 focus:outline-none focus:border-green-400"
            />
            {message && <p className="mt-4 text-sm text-red-500">{message}</p>}
          </form>
        </div>
        <div className="p-2">
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={loading}
            className="p-2 w-60 sm:w-72 md:w-80 lg:w-96 h-12 bg-green-400 rounded-full text-blue-700 font-bold hover:bg-green-500"
          >
            {loading ? 'Sending...' : 'SEND RESET LINK'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
