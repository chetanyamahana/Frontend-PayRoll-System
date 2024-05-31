import React from "react";
import img3 from "../assets/img3.jpg";


const ScalableBusinessComponent = () => {
  return (
    <div className="flex justify-between items-center p-8 bg-white">
      <div>
        <h2 className="text-2xl font-bold mb-4">
          Scalable for Growing Businesses
        </h2>
        <div className="space-y-8">
          <div className="flex items-center">
            <div className="w-10 h-10 flex justify-center items-center bg-gray-100 rounded-full text-xl font-semibold text-gray-600 mr-4">
              1
            </div>
            <div>
              <h3 className="font-semibold">Scalable Platform</h3>
              <p>
                Accommodate increasing employee headcount and payroll complexity
                as your business expands.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 flex justify-center items-center bg-gray-100 rounded-full text-xl font-semibold text-gray-600 mr-4">
              2
            </div>
            <div>
              <h3 className="font-semibold">Flexible Integrations</h3>
              <p>
                Seamlessly integrate with your existing HR, accounting, and
                other business systems.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 flex justify-center items-center bg-gray-100 rounded-full text-xl font-semibold text-gray-600 mr-4">
              3
            </div>
            <div>
              <h3 className="font-semibold">Dedicated Support</h3>
              <p>
                Rely on our team of payroll experts to provide personalized
                guidance and assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <img
          src={img3}
          alt="Scalable Business"
          className="w-96 h-auto object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default ScalableBusinessComponent;
