import React from 'react';

const UserProfile = () => {
  return (
    <div className="bg-gray-100 my-10 sm:my-12 md:my-16 lg:my-20 rounded-lg shadow-lg container mx-auto p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
      <div className="flex flex-col items-center text-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-48 lg:h-48 transition-transform duration-300 ease-in-out hover:scale-110"
        />
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-800 my-4 font-bold transition-colors duration-300 ease-in-out hover:text-blue-500">
          John Doe
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mt-2">
          Developer at Example Co. Loves to write code and explore new technologies.
        </p>
      </div>
    </div>
  );
};

export default UserProfile;