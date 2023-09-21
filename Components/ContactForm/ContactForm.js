'use client';

import React from 'react';
import { useForm } from '@formspree/react';
import { BsSend } from 'react-icons/bs';

function ContactForm() {
  const [state, handleSubmit] = useForm('xaygbyde');
  if (state.succeeded) {
    return <p>Thank your for contacting us, we will respond to your email</p>;
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id='Name'
          name='Name'
          type='text'
          placeholder='Your name'
          className='form-control mb-3'
          required
        />
        <input
          id='Email'
          name='Email'
          type='email'
          placeholder='Your email'
          className='form-control mb-3'
          required
        />
        <input
          id='Number'
          name='Number'
          type='number'
          placeholder='Your number'
          className='form-control mb-3'
          required
        />

        <textarea
          name='Messgae'
          id='Message'
          cols='10'
          rows='5'
          className='form-control mb-3'
          placeholder='Message *'
          required
        ></textarea>

        <div className='col-12'>
          <button
            type='submit'
            className='main-btn mt-3 col-12'
            disabled={state.submitting}
          >
            <BsSend /> SUBMIT
          </button>
        </div>
      </form>{' '}
    </div>
  );
}

export default ContactForm;
