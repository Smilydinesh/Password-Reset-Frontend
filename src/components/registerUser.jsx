import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/axiosConfig';

function RegisterUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/user/register', {
        name,
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      setError('Invalid data');
    }
  };

  return (
    <>
      <div className="flex justify-center mt-48">
        <div className="w-full sm:w-4/5 md:w-2/3 lg:w-1/3 h-auto border-2 border-black text-center rounded-lg bg-gray-400">
          <div className="mt-2 mb-2">
            <h2 className="p-2 font-bold text-2xl">Create Account</h2>
          </div>
          <form onSubmit={handleRegister}>
            <div className="p-2">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-60 sm:w-72 md:w-80 lg:w-96 h-12 border-2 border-gray text-center hover:border-yellow-400 outline-green-400 rounded-full"
              />
            </div>
            <div className="p-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-60 sm:w-72 md:w-80 lg:w-96 h-12 border-2 border-gray text-center hover:border-yellow-400 outline-green-400 rounded-full"
              />
            </div>
            <div className="p-2">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-60 sm:w-72 md:w-80 lg:w-96 h-12 border-2 border-gray text-center hover:border-yellow-400 outline-green-400 rounded-full"
              />
            </div>
            {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
            <div className="flex flex-col sm:flex-row justify-evenly mt-4 mb-4">
              <div className="p-2 mt-3 mb-3">
                <button
                  type="submit"
                  className="bg-green-400 p-4 rounded-full w-60 sm:w-72 md:w-80 lg:w-80 text-md text-blue-500 font-bold hover:bg-green-500"
                >
                  REGISTER USER
                </button>
              </div>
              <div className="p-2 mt-6 mb-3">
                <Link
                  to="/"
                  className="bg-pink-400 p-4 rounded-full w-60 sm:w-72 md:w-80 lg:w-96 text-md text-purple-900 font-bold hover:bg-pink-500"
                >
                  LOGIN PAGE
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterUser;
