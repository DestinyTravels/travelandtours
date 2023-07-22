import React from 'react';
import styles from './workvisa.module.scss';
import Booking from '@/Components/Booking/Booking';

import work from '../../public/assets/destinytravelworkvisas.jpeg';
import Image from 'next/image';

export default function WorkVisas() {
  return (
    <main className={`${styles.workVisas} `}>
      {' '}
      <section
        className={`${styles.workHero} d-flex justify-content-between align-items-center`}
      >
        <h2 className='col-11 col-md-6 mx-auto'>
          Reservations & Sales of local and international flight tickets.
        </h2>
      </section>
      <article className=' d-flex flex-column flex-lg-row justify-content-between mt-5 '>
        <section className='container mt-5 col-12 col-lg-7 '>
          <p>
            {' '}
            Welcome to Destiny Travel and Tours, your trusted partner in
            realizing your career aspirations abroad.
            <br /> <br /> Our comprehensive Work Visa Applications Assistance
            service is designed to make your international job opportunities a
            reality. Navigating the intricacies of work visa applications can be
            daunting, but with our expert guidance, you can rest assured that
            every detail will be handled with precision. <br /> <br />
            Our seasoned visa experts will walk you through the entire process,
            starting with understanding your career goals and the specific
            requirements of your chosen destination. We will meticulously assist
            you in gathering all necessary documents, filling out forms
            accurately, and meeting the eligibility criteria. With our
            personalized approach, we ensure that your work visa application
            stands out among the competition, significantly increasing your
            chances of obtaining the visa.
          </p>
          <div className='col-12'>
            <Image src={work} alt='' />
          </div>
          <button className='main-btn my-5'> Contact us</button>
        </section>
        <aside className='col-12 col-lg-4 container'>
          <Booking />
        </aside>
      </article>
    </main>
  );
}
