import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PersonalDetails = ({ onNext, values, handleChange }) => {
    const { firstName, lastName, email, mobile } = values;

    const handleNext = () => {

        if (!firstName) {
          toast.error('First Name can not be empty');
          return;
        }

        if (!lastName) {
            toast.error('Last Name can not be empty');
            return;
          }
    
        if (!email) {
            toast.error('Email Address can not be empty');
          return;
        }

        if (!mobile || mobile.trim().length !== 10) {
            toast.error('Mobile Number should be of 10 digits');
            return;
          }

        onNext();
    };

  return (
    <div className="w-1/2 mx-auto border p-6 mt-16  rounded-md border-neutral-900 shadow-sm  flex flex-col items-center">
      <h2 className="text-4xl font-semibold mb-8">Personal Details</h2>
      <form className="flex flex-col items-start w-full gap-4">
        <label className="flex flex-col mb-4 w-full">
          <span className="text-lg text-gray-800 mb-2">First Name :</span>
          <input
            className="w-full border rounded-md py-2 px-3"
            type="text"
            placeholder="Enter your First Name"
            value={values.firstName || ''}
            onChange={(e) => handleChange('firstName', e.target.value)}
            required
          />
        </label>
        <label className="flex flex-col mb-4 w-full">
          <span className="text-lg text-gray-800 mb-2">Last Name :</span>
          <input
            className="w-full border rounded-md py-2 px-3"
            type="text"
            placeholder="Enter your Last Name"
            value={values.lastName || ''}
            onChange={(e) => handleChange('lastName', e.target.value)}
            required
          />
        </label>
        <label className="flex flex-col mb-4 w-full">
          <span className="text-lg text-gray-800 mb-2">Email :</span>
          <input
            className="w-full border rounded-md py-2 px-3"
            type="email"
            placeholder="Enter your email"
            value={values.email || ''}
            onChange={(e) => handleChange('email', e.target.value)}
            required
          />
        </label>
        <label className="flex flex-col mb-4 w-full">
          <span className="text-lg text-gray-800 mb-2">Mobile :</span>
          <input
            className="w-full border rounded-md py-2 px-3"
            type="tel"
            placeholder="Enter your Mobile"
            value={values.mobile || ''}
            onChange={(e) => handleChange('mobile', e.target.value)}
            required
          />
        </label>
        <button
          type="button"
          className="bg-gray-600 text-white py-2 px-4 rounded-md self-end hover:bg-slate-900"
          onClick={handleNext}
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default PersonalDetails;
