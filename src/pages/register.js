import React from 'react';
import Form from '../components/register/formRegis';
import Image from '../components/register/imageRegis';

const Register = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden">
      <Form />
      <Image />
    </div>
  );
};

export default Register;
