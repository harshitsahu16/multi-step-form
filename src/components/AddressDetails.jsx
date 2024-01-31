import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddressDetails = ({ onPrev, onNext, values, handleChange }) => {
  const { addressLine1,city,country } = values;

  const handleNext = () => {

    if (!addressLine1) {
      toast.error('Address can not be empty');
      return;
    }

    if (!city) {
      toast.error('City Name can not be empty');
      return;
    }

    if (!country) {
      toast.error('Country Name can not be empty');
      return;
    }


    onNext();
};
  return (
    <div className="w-1/2 mx-auto border p-6 mt-16 rounded-md border-neutral-900 shadow-sm flex flex-col items-center">
      <h2 className="sm:text-2xl md:text-3xl lg:text-4xl">Address Details</h2>
      <form className="flex flex-col w-full gap-4">
        <label className="flex flex-col mb-4 w-full">
          <span className="text-lg text-gray-800 mb-2">Address Line 1 :</span>
          <input
            className="w-full border rounded-md py-2 px-3"
            type="text"
            placeholder="Enter your Address Line 1"
            value={values.addressLine1 || ''}
            onChange={(e) => handleChange('addressLine1', e.target.value)}
            required
          />
        </label>
        <label className="flex flex-col mb-4 w-full">
          <span className="text-lg text-gray-800 mb-2">Address Line 2 :</span>
          <input
            className="w-full border rounded-md py-2 px-3"
            type="text"
            placeholder="Enter your Address Line 2 (Optional)"
            value={values.addressLine2 || ''}
            onChange={(e) => handleChange('addressLine2', e.target.value)}
          />
        </label>
        <label className="flex flex-col mb-4 w-full">
          <span className="text-lg text-gray-800 mb-2">City :</span>
          <input
            className="w-full border rounded-md py-2 px-3"
            type="text"
            placeholder="Enter City"
            value={values.city || ''}
            onChange={(e) => handleChange('city', e.target.value)}
            required
          />
        </label>
        <label className="flex flex-col mb-4 w-full">
          <span className="text-lg text-gray-800 mb-2">Country :</span>
          <input
            className="w-full border rounded-md py-2 px-3"
            type="text"
            placeholder="Enter Country"
            value={values.country || ''}
            onChange={(e) => handleChange('country', e.target.value)}
            required
          />
        </label>
        <div className="flex justify-end gap-4 w-full">
          <button
            type="button"
            className="bg-gray-600 text-white py-2 px-4 rounded-md self-end hover:bg-slate-900"
            onClick={onPrev}
          >
            Previous
          </button>
          <button
            type="button"
            className="bg-gray-600 text-white py-2 px-4 rounded-md self-end hover:bg-slate-900"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddressDetails;
