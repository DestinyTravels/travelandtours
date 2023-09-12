'use client';

import React from 'react';
import styles from './Booking.module.scss';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { useForm, ValidationError } from '@formspree/react';

function Booking() {
  const [state, handleSubmit] = useForm('mwkdqkbd');
  if (state.succeeded) {
    return (
      <p>
        Thank you for Booking our services, We will reach out to you via your
        email
      </p>
    );
  }

  const service = [
    { name: ' Work visas assistance ', url: '/workvisas' },
    {
      name: 'Study visa assistance        ',
      url: '/studentvisas',
    },
    {
      name: 'Permanent residents visas',

      url: '/permanentvisas',
    },
    {
      name: ' Citizenship visas assistance',
      url: '/citizenshipvisas',
    },
    {
      name: 'Business visas assistance',

      url: '/businessvisas',
    },
    { name: 'Tourist visa assistance', url: '/touristvisas' },
    {
      name: 'Flight tickets assistance.',
      url: '/hotelticket',
    },
    {
      name: 'Hotels and apartment reservation.        ',
      url: '/hotelreservation',
    },
  ];
  return (
    <main className='mb-5'>
      <section className='border  py-5 px-3 mb-5'>
        <h3>Book a service</h3>
        <form onSubmit={handleSubmit}>
          <input
            id='Name'
            name='Name'
            type='text'
            placeholder='Your name'
            className='form-control mb-3'
            required
          />
          <ValidationError prefix='Name' field='name' errors={state.errors} />
          <input
            id='Email'
            name='Email'
            type='email'
            placeholder='Your email'
            className='form-control mb-3'
            required
          />
          <ValidationError prefix='Email' field='email' errors={state.errors} />
          <input
            id='Number'
            name='Number'
            type='number'
            placeholder='Your number'
            className='form-control mb-3'
            required
          />
          <ValidationError
            prefix='Number'
            field='number'
            errors={state.errors}
          />
          <input
            id='Date'
            name='Date'
            type='date'
            placeholder='Your number'
            className='form-control mb-3'
            required
          />
          <ValidationError prefix='Date' field='date' errors={state.errors} />
          <select
            required
            className='form-control mb-3'
            id='Service'
            name='Service'
          >
            {service.map(({ name }) => (
              <option key={name}> {name} </option>
            ))}
          </select>
          <textarea
            name='messgae'
            id='message'
            cols='30'
            rows='10'
            className='form-control mb-3'
            placeholder='Message *'
            required
          ></textarea>
          <ValidationError
            prefix='Message'
            field='message'
            errors={state.errors}
          />
          <div className='col-12'>
            <button
              type='submit'
              className='main-btn mt-3 col-12'
              disabled={state.submitting}
            >
              BOOK NOW
            </button>
          </div>
        </form>{' '}
      </section>

      <section className={`${styles.question} mt-5`}>
        <h3>Any Question?</h3>
        <p>
          If you require additional information on Tours, Ticketing &
          Reservation, Hotel Reservation, Visa Counseling, Immigration &
          Protocol Service and any other; kindly contact us:
        </p>
        <div className='d-flex flex-column mt-3'>
          <h5>
            <BsFillTelephoneFill />{' '}
            <a href='tel: +2349133214070'>+2349133214070</a>
          </h5>

          <h5>
            <BsFillTelephoneFill />
            <a href='tel: +2349022113315'>+2349022113315</a>
          </h5>

          <p>
            <FiMail />
            <a href='mailto: info@destineytravelandtours.com'>
              info@destineytravelandtours.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Booking;
