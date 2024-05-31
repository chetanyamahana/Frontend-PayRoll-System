import React from 'react'
import img1 from "../assets/img1.jpg";
const Header = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-5xl bg-white rounded-lg shadow-md p-6 flex">
        <div className="w-1/2 pr-6 flex flex-col justify-center">
          <h1 className="text-6xl text-left font-semibold mb-10 text-gray-800">
            Payroll System: A Business-Friendly Solution
          </h1>
          <p className="text-lg text-gray-600 mb-10 text-left">
            Streamline your payroll with our comprehensive solution that
            automates key processes and ensures compliance, freeing up time to
            focus on growing your business.
          </p>
          <div className="flex gap-4">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline">
              Get Started
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <img
            className="rounded-md shadow-md"
            src={img1}
            alt="Payroll System"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;