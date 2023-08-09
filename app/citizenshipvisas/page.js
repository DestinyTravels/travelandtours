import React from 'react';
import styles from './citizenshipvisa.module.scss';
import Booking from '@/Components/Booking/Booking';

import work from '../../public/assets/destinytravelworkvisas.webp';
import Image from 'next/image';
import OffersSlde from '@/Components/HotOffers/OffersSlde';

export default function CitizenshipVisas() {
  return (
    <main className={`${styles.workVisas} `}>
      {' '}
      <section
        className={`${styles.workHero} d-flex justify-content-between align-items-center`}
      >
        <h2 className='col-11 col-md-6 mx-auto'>
          Citizenship visa application assistance
        </h2>
      </section>
      <article className=' d-flex flex-column flex-lg-row justify-content-between mt-5 '>
        <section className='container mt-5 col-12 col-lg-7 '>
          <p>
            {' '}
            Acquiring citizenship is a life-changing event, and Destiny Travel
            and Tours is here to make the process smooth and efficient for you.
            Our Citizenship Visa Application Assistance is designed to guide you
            through every step towards obtaining citizenship in your desired
            country.
            <br /> <br />
            Our team of experts navigates the intricacies of citizenship
            applications, ensuring all required documents are in order. We
            provide personalized advice on meeting residency and language
            requirements, as well as other essential criteria for citizenship.
            <br /> <br />
            At Destiny Travel and Tours, we believe in empowering our clients to
            achieve their citizenship goals. Trust us to handle your application
            with precision and care, giving you the best chance of obtaining
            citizenship and enjoying the benefits that come with it.
          </p>
          <figure className='col-12'>
            <Image src={work} alt='' />
          </figure>
          <button className='main-btn my-5'> Contact us</button>
        </section>
        <aside className='col-12 col-lg-4 container'>
          <Booking />
        </aside>
      </article>
      <OffersSlde />
    </main>
  );
}
