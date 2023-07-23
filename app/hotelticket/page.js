import React from 'react';
import styles from './hotelticket.module.scss';
import Booking from '@/Components/Booking/Booking';

import work from '../../public/assets/destinytravelworkvisas.webp';
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
            Experience the utmost convenience in travel booking with Destiny
            Travel and Tours&apos; Reservations & Sales of Local and
            International Flight Tickets. As your trusted travel partner, we
            offer a seamless booking process that ensures you secure the best
            flight deals, whether it&apos;s for local or international travel.
            <br /> <br />
            Our expert travel agents are skilled in finding flights that align
            perfectly with your preferences, budget, and schedule. We keep you
            informed about exclusive offers, discounts, and seat availability,
            enabling you to make informed decisions for your upcoming journeys.
            <br /> <br />
            At Destiny Travel and Tours, we understand that the perfect flight
            is an essential element of a successful trip. Trust us to make your
            flight reservations, so you can focus on the exciting adventures
            that await you.
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
    </main>
  );
}
