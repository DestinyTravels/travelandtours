import React from 'react';
import styles from './touristvisa.module.scss';
import Booking from '@/Components/Booking/Booking';

import work from '../../public/assets/destinytravelworkvisas.webp';
import Image from 'next/image';
import OffersSlde from '@/Components/HotOffers/OffersSlde';
import Link from 'next/link';

export default function WorkVisas() {
  return (
    <main className={`${styles.workVisas} `}>
      {' '}
      <section
        className={`${styles.workHero} d-flex justify-content-between align-items-center`}
      >
        <h2 className='col-11 col-md-6 mx-auto'>
          Tourist Visa Application Assistance
        </h2>
      </section>
      <article className=' d-flex flex-column flex-lg-row justify-content-between mt-5 '>
        <section className='container mt-5 col-12 col-lg-7 '>
          <p>
            {' '}
            Embark on unforgettable travel adventures with Destiny Travel and
            Tours&apos; Tourist Visa Application Assistance. We understand the
            excitement of exploring new destinations and ensure your visa
            application process is hassle-free and convenient.
            <br /> <br />
            Our dedicated team works closely with you to determine the ideal
            tourist visa options for your dream destinations. We assist you in
            gathering essential documents, filling out application forms, and
            addressing any specific requirements for your chosen country.
            <br /> <br />
            With our expertise, you can rest assured that your application will
            stand out among other applicants. We have extensive experience in
            managing tourist visa applications for a wide range of countries,
            making us your go-to choice for a memorable and stress-free travel
            experience.
          </p>
          <figure className='col-12'>
            <Image src={work} alt='' />
          </figure>
          <Link href='/contact' className='main-btn my-5'>
            {' '}
            Contact us
          </Link>
        </section>
        <aside className='col-12 col-lg-4 container'>
          <Booking />
        </aside>
      </article>
      <OffersSlde />
    </main>
  );
}
