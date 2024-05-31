import React, { useState } from "react";

const ComplianceAndReporting = () => {
  const [isExpanded, setIsExpanded] = useState({
    regulatoryChanges: false,
    comprehensiveReporting: false,
  });

  const toggleExpand = (section) => {
    setIsExpanded((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="p-8 bg-gray-900 flex justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">Compliance and Reporting</h2>

        {/* Stay Ahead of Regulatory Changes */}
        <div className="mb-4">
          <button
            className="flex items-center w-full text-left focus:outline-none"
            onClick={() => toggleExpand("regulatoryChanges")}
          >
            <svg
              className={`w-5 h-5 transition-transform ${
                isExpanded.regulatoryChanges ? "transform rotate-90" : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6 10a1 1 0 011.707-.707L10 11.586l2.293-2.293A1 1 0 0114.707 10l-3 3a1 1 0 01-1.414 0l-3-3A1 1 0 016 10z"
                clipRule="evenodd"
              />
            </svg>
            <span className="ml-2 font-semibold">
              Stay Ahead of Regulatory Changes
            </span>
          </button>
          {isExpanded.regulatoryChanges && (
            <div className="pl-7 mt-2">
              <p>
                Our payroll system automatically updates with the latest tax
                laws and reporting requirements to ensure your business remains
                compliant.
              </p>
            </div>
          )}
        </div>

        {/* Comprehensive Reporting */}
        <div className="mb-4">
          <button
            className="flex items-center w-full text-left focus:outline-none"
            onClick={() => toggleExpand("comprehensiveReporting")}
          >
            <svg
              className={`w-5 h-5 transition-transform ${
                isExpanded.comprehensiveReporting ? "transform rotate-90" : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6 10a1 1 0 011.707-.707L10 11.586l2.293-2.293A1 1 0 0114.707 10l-3 3a1 1 0 01-1.414 0l-3-3A1 1 0 016 10z"
                clipRule="evenodd"
              />
            </svg>
            <span className="ml-2 font-semibold">Comprehensive Reporting</span>
          </button>
          {isExpanded.comprehensiveReporting && (
            <div className="pl-7 mt-2">
              <ul className="list-disc pl-5">
                <li className="mb-1">
                  Generate detailed payroll reports, including payslips, tax
                  forms, and employee records.
                </li>
                <li>
                  Easily access and export data for auditing and financial
                  purposes.
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComplianceAndReporting;
