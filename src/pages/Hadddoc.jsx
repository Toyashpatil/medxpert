import React from "react";

const Hadddoc = () => {
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
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">
              Add New Doctor
            </h1>
            {/* Doctor Form */}
            <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
              {/* Doctor's Name */}
              <div className="mb-4">
                <label
                  htmlFor="doctorName"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Doctor's Name
                </label>
                <input
                  type="text"
                  id="doctorName"
                  name="doctorName"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter doctor's name"
                  required=""
                />
              </div>
              {/* Experience in Years */}
              <div className="mb-4">
                <label
                  htmlFor="experience"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Experience (in years)
                </label>
                <input
                  type="number"
                  id="experience"
                  name="experience"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter experience in years"
                  min={0}
                  required=""
                />
              </div>
              {/* Specialty Dropdown */}
              <div className="mb-4">
                <label
                  htmlFor="specialty"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Specialty
                </label>
                <select
                  id="specialty"
                  name="specialty"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  required=""
                >
                  <option value="">Select specialty</option>
                  <option value="Cardiologist">Cardiologist</option>
                  <option value="Dermatologist">Dermatologist</option>
                  <option value="Pediatrician">Pediatrician</option>
                  <option value="Neurologist">Neurologist</option>
                  <option value="Orthopedic Surgeon">Orthopedic Surgeon</option>
                </select>
              </div>
              {/* Ratings (0 to 5) */}
              <div className="mb-6">
                <label
                  htmlFor="ratings"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Ratings (0 to 5)
                </label>
                <input
                  type="number"
                  id="ratings"
                  name="ratings"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter ratings (0 to 5)"
                  min={0}
                  max={5}
                  required=""
                />
              </div>
              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                >
                  Add Doctor
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hadddoc;
