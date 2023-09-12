import React from 'react';
import styles from './businessvisa.module.scss';
import Booking from '@/Components/Booking/Booking';

import work from '../../public/assets/destinytravelworkvisas.webp';
import Image from 'next/image';
import OffersSlde from '@/Components/HotOffers/OffersSlde';
import Link from 'next/link';

export default function BusinessVisas() {
  return (
    <main className={`${styles.workVisas} `}>
      {' '}
      <section
        className={`${styles.workHero} d-flex justify-content-between align-items-center`}
      >
        <h2 className='col-11 col-md-6 mx-auto'>
          Business visas application assistance
        </h2>
      </section>
      <article className=' d-flex flex-column flex-lg-row justify-content-between mt-5 '>
        <section className='container mt-5 col-12 col-lg-7 '>
          <p>
            {' '}
            Unlock global business opportunities with Destiny Travel and
            Tours&apos; Business Visas Application Assistance. Whether
            you&apos;re exploring investment prospects, attending international
            conferences, or initiating partnerships, we are your trusted partner
            for seamless business visa processing.
            <br /> <br />
            Our experienced team comprehends the criticality of time in the
            business world, and we go the extra mile to ensure your visa
            application is expedited without compromising quality. We provide
            personalized guidance, assisting you in selecting the right visa
            category and preparing business-related documentation.
            <br /> <br />
            Destiny Travel and Tours&apos; exceptional networking with embassies
            and consulates enables us to stay updated on the latest visa
            regulations, ensuring your application aligns perfectly with the
            specific country&apos;s requirements. Trust us to facilitate your
            business endeavors globally, so you can focus on expanding your
            horizons with confidence.
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
