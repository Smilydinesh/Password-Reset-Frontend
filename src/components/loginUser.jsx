import React, { useState } from 'react';
import api from '../api/axiosConfig';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();    try {
      const response = await api.post('/user/login', {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <>
      <div className="flex justify-center mt-48 register">
        <div className="w-full sm:w-4/5 md:w-2/3 lg:w-1/3 h-autoborder-2 border-black text-center rounded-lg bg-gray-400">
          <div className="mt-2 mb-2">
            <h2 className="p-2 font-bold text-2xl">Login Page</h2>
          </div>
          <form onSubmit={handleLogin}>
            <div className="p-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-60 sm:w-72 md:w-80 lg:w-96 h-12border-2 border-gray text-center hover:border-yellow-400 outline-green-400 rounded-full"
              />
            </div>
            <div className="p-2">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-60 sm:w-72 md:w-80 lg:w-96 h-12border-2 border-gray text-center hover:border-yellow-400 outline-green-400 rounded-full"
              />
            </div>
            {error && (
              <div className="text-red-500 text-sm mb-2">{error}</div> 
            )}
            <div>
              <button
                type="submit"
                className="bg-pink-400 p-4 rounded-full w-60 sm:w-72 md:w-80 lg:w-96 text-md font-bold mb-4 mt-4 hover:bg-pink-500"
              >
                Login
              </button>
            </div>
          </form>
          <div className="flex flex-col sm:flex-row justify-evenly mt-2 mb-4">
            <div className="p-2 mt-3 mb-3">
              <Link
                to="/forgotPassword"
                className="bg-blue-400 p-4 rounded-full sm:w-72 md:w-80 lg:w-96 text-md text-red-500 font-bold hover:bg-blue-500"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="p-2 mt-3 mb-3">
              <Link
                to="/createaccount"
                className="bg-green-400 p-4 rounded-full w-60 sm:w-72 md:w-80 lg:w-96 text-md text-blue-500 font-bold hover:bg-green-500"
              >
                CREATE ACCOUNT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
