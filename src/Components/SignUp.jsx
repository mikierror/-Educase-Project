import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
  const [formData, setFormData] = useState({
    id: Math.floor(Math.random() * 100),
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: '',
  });

  let navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      isAgency: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    // navigate....
    navigate(`/Login`)

    // reset form
    setFormData({
      id: Math.floor(Math.random() * 100),
      fullName: '',
      phoneNumber: '',
      email: '',
      password: '',
      companyName: '',
      isAgency: '',
    });
  };

  return (
    <div className="w-[390px] h-[844px] border border-zinc-300 bg-gray-50 px-6 py-8 overflow-y-auto shadow-xl rounded-xl">
      <h2 className="text-3xl font-[600] mb-6">
        Create your <br /> PopX account
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 h-[86%]">
        {/* Full Name */}
        <div className="relative">
          <label className="text-sm text-[#6C25FF] absolute ml-2 bg-gray-100 px-2">
            Full Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full mt-2 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-purple-600"
            placeholder="Marry Doe"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="relative">
          <label className="text-sm text-[#6C25FF] absolute ml-2 bg-gray-100 px-2">
            Phone number<span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full mt-2 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-purple-600"
            placeholder="9876543210"
            required
          />
        </div>

        {/* Email */}
        <div className="relative">
          <label className="text-sm text-[#6C25FF] absolute ml-2 bg-gray-100 px-2">
            Email address<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-2 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-purple-600"
            placeholder="email@example.com"
            required
          />
        </div>

        {/* Password */}
        <div className="relative">
          <label className="text-sm text-[#6C25FF] absolute ml-2 bg-gray-100 px-2">
            Password<span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mt-2 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-purple-600"
            placeholder="********"
            required
          />
        </div>

        {/* Company Name */}
        <div className="relative">
          <label className="text-sm text-[#6C25FF] absolute ml-2 bg-gray-100 px-2">
            Company name
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full mt-2 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-purple-600"
            placeholder="Company Pvt Ltd"
          />
        </div>

        {/* Agency Radio */}
        <div className="mt-2">
          <p className="text-sm font-medium text-gray-700 mb-2">
            Are you an Agency?<span className="text-red-500">*</span>
          </p>
          <div className="flex gap-6 items-center">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={formData.isAgency === 'yes'}
                onChange={handleRadioChange}
                className="accent-purple-600"
                required
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="isAgency"
                value="no"
                checked={formData.isAgency === 'no'}
                onChange={handleRadioChange}
                className="accent-purple-600"
              />
              <span>No</span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full h-fit mt-63 bg-[#6C25FF] text-white py-3 rounded-md text-sm font-medium hover:bg-purple-700 transition"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignupPage;
