import React, { useEffect, useState } from 'react';
import { RiCameraFill } from '@remixicon/react';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      setUser(storedUser);
    }
  }, []);

  return (
    <div className="w-[390px] h-[844px] border border-zinc-300 bg-gray-50 overflow-y-auto shadow-xl rounded-xl">   
      <div className='h-15 p-3 border-b border-gray-300'>
        <h3 className="text-[19px] text-gray-900 mb-5 pb-3">Account Settings</h3>
      </div>

      <div className="flex flex-col gap-4 mt-2 p-4">
        <div className="flex gap-4 items-center">
          <div className='relative'>
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.0_INywwz74o8LLO4Lz7vCAHaEo&pid=Api&P=0&h=220"
              className="w-17 h-17 rounded-full object-cover border border-[#6C25FF]"
              alt="Profile"
            />
            <span className='absolute top-12 left-13 bg-[#6C25FF] h-fit w-fit rounded-full p-1'>
              <RiCameraFill size={16} color='white' />
            </span>
          </div>
          <div className="-mt-2">
            <p className="text-sm font-bold text-gray-900">{user?.fullName || 'Marry Doe'}</p>
            <p className="text-[13px] font-medium text-gray-600">{user?.email || 'marry@gmail.com'}</p>
          </div>
        </div>

        <p className="text-sm text-gray-600 font-semibold leading-relaxed mt-3">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  );
};

export default Profile;
