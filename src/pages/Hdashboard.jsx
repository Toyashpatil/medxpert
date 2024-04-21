import React from "react";

const Hdashboard = () => {
  return (
    <div>
      <div className="h-fit gradient_wall p-4 flex items-start justify-center  w-[100vw]">
        <div className="  w-[100%] space-y-2">
          <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  {/* Logo/Title */}
                  <div className="flex-shrink-0 flex items-center">
                    <span className="text-xl font-bold">
                      Hospital Admin Dashboard
                    </span>
                  </div>
                  {/* Navigation Links */}
                  <div className="hidden sm:-my-px sm:ml-6 sm:flex">
                    <a
                      href="#"
                      className="inline-flex items-center px-4 py-2 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="ml-4 inline-flex items-center px-4 py-2 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
                    >
                      Doctors
                    </a>
                    <a
                      href="#"
                      className="ml-4 inline-flex items-center px-4 py-2 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
                    >
                      Appointments
                    </a>
                  </div>
                </div>
                {/* Logout Button */}
                <div className="hidden sm:flex sm:items-center sm:ml-6">
                  <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out">
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </nav>
          <div className="container mx-auto px-4 py-8">
  <h1 className="text-2xl font-semibold text-gray-800 mb-4">
    Analytics
  </h1>
  <div className="flex space-x-4">
    {/* Container 1: Appointments Today */}
    <div className="bg-white rounded-md shadow-md p-6 flex-1">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Appointments Today
      </h2>
      <p className="text-3xl font-bold text-blue-500">10</p>
      <p className="text-sm text-gray-500">
        as of <span className="font-semibold">21st April, 2024</span>
      </p>
    </div>
    {/* Container 2: Total Doctors */}
    <div className="bg-white rounded-md shadow-md p-6 flex-1">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Total Doctors
      </h2>
      <p className="text-3xl font-bold text-green-500">50</p>
      <p className="text-sm text-gray-500">in the hospital</p>
    </div>
    {/* Container 3: Total Appointments Till Date */}
    <div className="bg-white rounded-md shadow-md p-6 flex-1">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Total Appointments Till Date
      </h2>
      <p className="text-3xl font-bold text-purple-500">1000</p>
      <p className="text-sm text-gray-500">since inception</p>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default Hdashboard;
