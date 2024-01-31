import React from 'react';

const Result = ({ values }) => {
  return (
    <div className="w-1/2 mx-auto border p-6 mt-10 rounded-md border-n`eutral-900 shadow-sm flex flex-col items-center">
      <h2 className="text-4xl font-semibold mb-8 border-b-2 border-b-black">Form Details</h2>
      <div className="flex flex-col items-start w-full gap-4">
        <p className="text-lg text-gray-800 mb-2">
          <strong>First Name:</strong> {values.firstName}
        </p>
        <p className="text-lg text-gray-800 mb-2">
          <strong>Last Name:</strong> {values.lastName}
        </p>
        <p className="text-lg text-gray-800 mb-2">
          <strong>Email:</strong> {values.email}
        </p>
        <p className="text-lg text-gray-800 mb-2">
          <strong>Mobile:</strong> {values.mobile}
        </p>
        <p className="text-lg text-gray-800 mb-2">
          <strong>Address Line 1:</strong> {values.addressLine1}
        </p>
        <p className="text-lg text-gray-800 mb-2">
          <strong>Address Line 2:</strong> {values.addressLine2 || 'N/A'}
        </p>
        <p className="text-lg text-gray-800 mb-2">
          <strong>City:</strong> {values.city}
        </p>
        <p className="text-lg text-gray-800 mb-2">
          <strong>Country:</strong> {values.country}
        </p>
        <p className="text-lg text-gray-800 mb-2">
          <strong>Card Number:</strong> {values.cardNumber.replace(/.(?=.{4})/g, '*')}
        </p>
        <p className="text-lg text-gray-800 mb-2">
          <strong>Expiry Date:</strong> {values.expiryDate}
        </p>
        <p className="text-lg text-gray-800 mb-2">
          <strong>CVV:</strong> {values.cvv.replace(/./g, '*')}
        </p>
      </div>
    </div>
  );
};

export default Result;
