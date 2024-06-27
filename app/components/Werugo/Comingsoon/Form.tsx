// src/Form.js
"use client"
import React, { useState } from 'react';
import Success from '@/app/assets/werugo/images/icons/success.svg'
import Image from 'next/image';
const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className='pt-5 w-full max-w-xl'>
      {submitted ? (
        <div className="flex justify-center items-center">
          <div className='space-y-2'>
<Image src={Success} alt="success" width={100} height={100} className='mx-auto w-auto h-auto' />
<p className='text-black font-medium text-center'>Subscribed!</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>


<div className='space-y-1'>
            <label className='text-left text-black font-medium'>
            Get notified when launched
            </label>
            <div className='flex gap-2'>
              <input onChange={handleChange} required type='email' className='bg-black/5 outline-none focus:ring-1 focus:ring-[#39AE56] rounded-xl py-3 px-5 placeholder-black/50 flex-1' placeholder='Email address' />
            <button type="submit" className="rounded-xl font-semibold text-white leading-snug flex gap-2 py-3 px-6 items-center justify-center  ease-in-out duration-300  bg-[#39AE56] text-lg shrink-0">Subscribe</button>
            </div>
          </div> 
        </form>
      )}
    </div>
  );
};

export default Form;
