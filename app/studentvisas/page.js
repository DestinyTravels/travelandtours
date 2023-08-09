import React from 'react';
import styles from './studentvisa.module.scss';
import Booking from '@/Components/Booking/Booking';

import work from '../../public/assets/destinytravelstudentvisas.webp';
import Image from 'next/image';
import OffersSlde from '@/Components/HotOffers/OffersSlde';

export default function WorkVisas() {
  return (
    <main className={`${styles.workVisas} `}>
      {' '}
      <section
        className={`${styles.workHero} d-flex justify-content-between align-items-center`}
      >
        <h2 className='col-11 col-md-6 mx-auto'>
          Study or Student Visa Application Assistance
        </h2>
      </section>
      <article className=' d-flex flex-column flex-lg-row justify-content-between mt-5 '>
        <section className='container mt-5 col-12 col-lg-7 '>
          <p>
            {' '}
            Embark on an enriching educational journey with Destiny Travel and
            Tours&apos; Study or Student Visa Application Assistance. We
            understand that pursuing education abroad is a significant
            investment in your future, and our team is committed to making the
            application process seamless and successful.
            <br /> <br />
            Our experts work closely with you to determine the best study
            destination, program, and institution that aligns with your academic
            goals. We assist in preparing a comprehensive application, ensuring
            you meet all requirements, including financial documentation and
            language proficiency tests.
            <br /> <br />
            With our vast experience in student visa applications, we guide you
            through potential challenges, increasing your chances of obtaining a
            student visa. Trust Destiny Travel and Tours to be your reliable
            partner in turning your educational dreams into a reality.
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
