import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PaymentDetails = ({ onPrev, onSubmit, values, handleChange }) => {
  const { cardNumber, expiryDate, cvv } = values;

  const handleSubmit = () => {
    
    if (!cardNumber ||cardNumber.trim().length  !== 16) {
      toast.error('Card Number must be of 16 digits ');
      return;
    }

    if (!expiryDate) {
      toast.error('Expiry Date can not be empty');
      return;
    }

    if (!cvv || cvv.trim().length !==3 ) {
      toast.error('CVV must be of 3 digits');
      return;
    }

    onSubmit();
  };


  
  return (
    <div className="w-1/2 mx-auto border p-6 mt-16 rounded-md border-neutral-900 shadow-sm flex flex-col items-center">
      <h2 className="sm:text-2xl md:text-3xl lg:text-4xl">Payment Details</h2>
      <form className="flex flex-col items-start w-full gap-4">
        <label className="flex flex-col mb-4 w-full">
          <span className="text-lg text-gray-800 mb-2">Card Number :</span>
          <input
            className="w-full border rounded-md py-2 px-3"
            type="text"
            placeholder="Enter your Card Number"
            value={values.cardNumber || ''}
            onChange={(e) => handleChange('cardNumber', e.target.value)}
            required
          />
        </label>
        <label className="flex flex-col mb-4 w-full">
          <span className="text-lg text-gray-800 mb-2">Expiry Date :</span>
          <input
            className="w-full border rounded-md py-2 px-3"
            type="date"
            placeholder="Enter Expiry Date"
            value={values.expiryDate || ''}
            onChange={(e) => handleChange('expiryDate', e.target.value)}
            required
          />
        </label>
        <label className="flex flex-col mb-4 w-full">
          <span className="text-lg text-gray-800 mb-2">CVV :</span>
          <input
            className="w-full border rounded-md py-2 px-3"
            type="text"
            placeholder="Enter CVV"
            value={values.cvv || ''}
            onChange={(e) => handleChange('cvv', e.target.value)}
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
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentDetails;
