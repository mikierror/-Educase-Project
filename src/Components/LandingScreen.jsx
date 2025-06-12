import React from 'react'
import { Link } from 'react-router-dom';

function LandingScreen() {
  return (     
    <div className="w-[390px] h-[844px] bg-gray-50 border border-zinc-300 shadow-xl rounded-xl px-6 py-10 flex flex-col justify-end">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Welcome to PopX</h1>
        <p className=" text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit,
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <Link to='/SignUp' className="bg-[#6C25FF] text-white font-medium py-3 rounded-md text-center">
          Create Account
        </Link>
        <Link to="/Login" className="bg-[#CEBAFB] text-[#1d2226ec] font-bold py-3 rounded-md text-center">
          Already Registered? Login
        </Link>
      </div>
    </div>
  );
}

export default LandingScreen;
