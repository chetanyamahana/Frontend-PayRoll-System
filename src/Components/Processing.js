import React from "react";
import img2 from "../assets/img2.jpg";

const PayrollProcessing = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-5xl bg-white rounded-lg shadow-md p-6 flex">
        <div className="w-1/2 flex items-center justify-center">
          <img
            className="rounded-md shadow-md"
            src={img2}
            alt="Payroll System"
          />
        </div>
        <div className="w-1/2 pr-6 flex flex-col justify-center">
          <h1 className="text-5xl font-semibold mb-4 text-gray-800 text-left">
            Streamlined Payroll Processing
          </h1>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-200">
                  <span className="text-xl font-semibold text-gray-800">1</span>
                </div>
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-medium text-gray-800">
                  Time Tracking
                </h2>
                <p className="mt-1 text-gray-600">
                  Easily manage employee timesheets and attendance records.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-200">
                  <span className="text-xl font-semibold text-gray-800">2</span>
                </div>
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-medium text-gray-800">
                  Payroll Calculation
                </h2>
                <p className="mt-1 text-gray-600">
                  Automatically compute wages, taxes, and deductions.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-200">
                  <span className="text-xl font-semibold text-gray-800">3</span>
                </div>
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-medium text-gray-800">
                  Direct Deposit
                </h2>
                <p className="mt-1 text-gray-600">
                  Seamlessly process payments to employee bank accounts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayrollProcessing;
