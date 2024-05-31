import React from 'react'

function taxcalculations() {
  return (
    <div className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-8">
          Automated Tax Calculations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-green-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Tax Compliance</h3>
            <p>
              Stay up-to-date with the latest tax regulations and requirements.
            </p>
          </div>
          <div className="bg-green-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Accurate Deductions</h3>
            <p>
              Ensure proper withholding and reporting of federal, state, and
              local taxes.
            </p>
          </div>
          <div className="bg-green-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Filing Assistance</h3>
            <p>
              Generate necessary tax forms and documents for end-of-year filing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default taxcalculations;
