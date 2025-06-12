import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginScreen() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    password: '',
    email: '',
  });

  const [errror, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("hello");
    
// for temporary storing this data on localstorage....
    const savedUser = JSON.parse(localStorage.getItem('user'));

    if (
      savedUser &&
      savedUser.email === loginData.email &&
      savedUser.password === loginData.password
    ) {
      alert(`Welcome ${savedUser.fullName}`)
      navigate(`/Profile/${savedUser.id}`);
    } else {
      setError('Account not found. Please create an account first or check your credentials.');

    }
  };

  return (
    <div className="w-[390px] h-[844px] border border-zinc-300 bg-gray-50 px-6 py-8 overflow-y-auto shadow-xl rounded-xl">
      <div className="h-fit w-70">
        <h2 className="text-2xl font-bold text-[#1D2226]">
          Sign in to your <br /> PopX account
        </h2>
        <p className="text-lg text-gray-600 mt-2 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>

      <form onSubmit={handleLogin} className="space-y-5">

        {/* Email Address */}
        <div className="relative">
          <label className="text-sm text-[#6C25FF] absolute ml-2 bg-gray-100 px-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            className="w-full mt-3 border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-purple-600"
            placeholder="email@example.com"
            required
          />
        </div>

        {/* Password */}
        <div className="relative">
          <label className="text-sm text-[#6C25FF] absolute ml-2 bg-gray-100 px-2">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            className="w-full mt-3 border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-purple-600"
            placeholder="********"
            required
          />
        </div>

        {/* Error Message */}
        {errror && <p className="text-red-500 text-sm font-medium">{errror}</p>}

        {/* Login Button */}
        <button
          type="submit"
          className="w-full mt-2 bg-[#6C25FF] text-white py-3 rounded-md text-sm font-semibold hover:bg-purple-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginScreen; 