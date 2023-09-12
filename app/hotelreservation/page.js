import React from 'react';
import styles from './hotelreservation.module.scss';
import Booking from '@/Components/Booking/Booking';

import work from '../../public/assets/destinytravelworkvisas.webp';
import Image from 'next/image';
import OffersSlde from '@/Components/HotOffers/OffersSlde';
import Link from 'next/link';

export default function HotelReservation() {
  return (
    <main className={`${styles.workVisas} `}>
      {' '}
      <section
        className={`${styles.workHero} d-flex justify-content-between align-items-center`}
      >
        <h2 className='col-11 col-md-6 mx-auto'>
          Resvations And booking of local & international hotels and apartment.
        </h2>
      </section>
      <article className=' d-flex flex-column flex-lg-row justify-content-between mt-5 '>
        <section className='container mt-5 col-12 col-lg-7 '>
          <p>
            {' '}
            Indulge in the ultimate comfort and luxury during your travels with
            Destiny Travel and Tours&apos; Reservations and Booking of Local &
            International Hotels and Apartments. Whether you seek a cozy
            boutique hotel or a lavish apartment, our extensive network of
            trusted partners ensures you find the perfect accommodation that
            meets your needs and preferences.
            <br /> <br />
            Our travel experts work closely with you to understand your
            preferences, budget, and location preferences. We handle all the
            reservation and booking procedures, ensuring you have a seamless
            check-in experience at your chosen accommodation.
            <br /> <br />
            Let Destiny Travel and Tours take care of your travel logistics,
            leaving you free to focus on making unforgettable memories during
            your stay. Trust us to ensure your accommodation exceeds your
            expectations, making your journey truly extraordinary.
            <br /> <br />
            In conclusion, Destiny Travel and Tours is your premier partner for
            visa application assistance and travel services. With our
            personalized approach, expert guidance, and commitment to customer
            satisfaction, we turn your travel dreams into reality, ensuring
            every journey with us is unforgettable and stress-free.
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
