import React, { useState } from "react";

const CollapsibleItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-2">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="mr-2">{isOpen ? "▼" : "►"}</span>
        <span className="font-semibold">{title}</span>
      </div>
      {isOpen && <div className="pl-6 mt-2">{children}</div>}
    </div>
  );
};

const Features = () => {
  return (
    <div className="p-8">
      {/* Comprehensive Employee Records */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          Comprehensive Employee Records
        </h2>
        <ul className="list-none">
          <CollapsibleItem title="Secure Storage of Employee Information">
            <p>
              Easily manage and access employee personal details, contact
              information, payroll history, and important documents in a
              centralized, secure database.
            </p>
          </CollapsibleItem>
          <CollapsibleItem
            title="Customizable User Permissions"
          >
            <p>
              Assign different levels of access to ensure sensitive information
              is only viewable by authorized personnel.
            </p>
          </CollapsibleItem>
        </ul>
      </div>

      {/* Flexible Payment Options */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Flexible Payment Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Direct Deposit</h3>
            <p>
              Ensure timely and secure payment of wages directly into employee
              bank accounts.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Paper Checks</h3>
            <p>
              Offer the option to receive physical paychecks for those who
              prefer traditional methods.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Debit Cards</h3>
            <p>
              Provide employees with reloadable debit cards for easy access to
              their earnings.
            </p>
          </div>
        </div>
      </div>

      {/* Secure Data Management */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Secure Data Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">1</div>
            <h3 className="text-xl font-semibold mb-2">Encrypted Storage</h3>
            <p>
              Safeguard sensitive employee and payroll information with advanced
              encryption protocols.
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">2</div>
            <h3 className="text-xl font-semibold mb-2">Backup and Recovery</h3>
            <p>
              Ensure business continuity with regular data backups and reliable
              disaster recovery solutions.
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">3</div>
            <h3 className="text-xl font-semibold mb-2">Access Controls</h3>
            <p>
              Implement role-based permissions to restrict access and maintain
              data integrity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
