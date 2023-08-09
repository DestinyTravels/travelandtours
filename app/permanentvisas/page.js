import React from 'react';
import styles from './permanentvisa.module.scss';
import Booking from '@/Components/Booking/Booking';

import work from '../../public/assets/destinytravelpermanent.webp';
import Image from 'next/image';
import OffersSlde from '@/Components/HotOffers/OffersSlde';

export default function PermanentVisas() {
  return (
    <main className={`${styles.workVisas} `}>
      {' '}
      <section
        className={`${styles.workHero} d-flex justify-content-between align-items-center`}
      >
        <h2 className='col-11 col-md-6 mx-auto'>
          Permanent residents visas applications assistance
        </h2>
      </section>
      <article className=' d-flex flex-column flex-lg-row justify-content-between mt-5 '>
        <section className='container mt-5 col-12 col-lg-7 '>
          <p>
            {' '}
            At Destiny Travel and Tours, we understand the desire to make a new
            country your permanent home. Our Permanent Residents Visas
            Applications Assistance is tailored to provide you with
            comprehensive support throughout the process.
            <br /> <br />
            From evaluating eligibility criteria to preparing a thorough
            application package, our team ensures that your permanent residency
            application is complete and compelling. We stay up-to-date with the
            latest immigration policies, giving you the best chance of a
            successful outcome.
            <br /> <br />
            With our personalized approach and attention to detail, we ease the
            complexities of the application process, so you can focus on
            building a future in your chosen country. Trust Destiny Travel and
            Tours to guide you on your journey to becoming a permanent resident.
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
