import React, { useState } from 'react'
import PersonalDetails from './components/PersonalDetails';
import AddressDetails from './components/AddressDetails';
import PaymentDetails from './components/PaymentDetails';
import Result from './components/Result';

const App = () => {
  const [index,setIndex]=useState(1);
  const [formValues, setFormValues] = useState({});

  const onNext = () => {
    setIndex(index + 1);
  };

  const onPrev = () => {
    setIndex(index - 1);
  };

  const onSubmit = () => {
    setIndex(index + 1); 
  };

  const handleChange = (field, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  return (
    <div>
      {index === 1 && (
        <PersonalDetails onNext={onNext} values={formValues} handleChange={handleChange} />
      )}
      {index === 2 && (
        <AddressDetails onNext={onNext} onPrev={onPrev} values={formValues} handleChange={handleChange} />
      )}
      {index === 3 && (
        <PaymentDetails onPrev={onPrev} onSubmit={onSubmit} values={formValues} handleChange={handleChange} />
      )}
      {index === 4 && (
        <Result values={formValues} />
      )}
    </div>
  )
}

export default App
