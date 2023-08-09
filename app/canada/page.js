import React from 'react';
import HotOfferHero from '@/Components/HeroSection/HotOffersHero';
import Booking from '@/Components/Booking/Booking';
import ChatUs from '@/Components/chat/ChatUs';

import styles from './canada.module.scss';

export default function Canada() {
  return (
    <main className={styles.canada}>
      <HotOfferHero title='Canada Visas Program' bgUrl='/assets/canada.jpeg' />
      <section
        className={` container d-flex flex-column flex-md-row mt-5 justify-content-between`}
      >
        <article className={`${styles.deets} col-12 col-md-7`}>
          <p>
            Unlock a world of opportunities with our comprehensive Canada visas
            programs. Whether you&apos;re seeking work, aiming for citizenship,
            or reuniting with family, Canada offers a welcoming pathway to
            diverse life stages. Experience the essence of Canada&apos;s
            socio-economic stability, inclusivity, and quality of life.
            <br /> <br />
            Our work visas program grants you temporary residence, allowing you
            to delve into Canada&apos;s professional landscape and contribute to
            its dynamic workforce. With the opportunity for full-time employment
            and comprehensive insurance coverage, your journey in Canada is
            anchored in well-being and security.
            <br /> <br />
            As you establish your roots, Canada&apos;s welcoming environment
            offers a pathway to permanent residency and stability. The pursuit
            of citizenship is a testament to your connection with Canada,
            opening doors to a future of possibilities and belonging.
            <br /> <br />
            Canada&apos;s family visas program brings loved ones together,
            fostering a sense of unity and shared experiences. Whether
            you&apos;re exploring work, citizenship, or family reunification,
            our program guides you through a transformative journey that
            celebrates diversity, inclusion, and growth.
          </p>
          <ul className='mt-5'>
            <h4 className='mb-3'> Benefits Includes </h4>

            <li>
              <strong>Embrace Full-Time Employment:</strong>
              <br />
              Our program allows you to dive into a full-time job, enhancing
              your skills and contributing to Canada&apos;s workforce.
              Experience professional growth in a new environment.
            </li>
            <li>
              <strong>Cozy Accommodation:</strong>
              <br />
              Enjoy a comfortable living experience with our accommodation
              support. From cozy apartments to well-furnished residences, we
              ensure you have a place to call home during your stay.
            </li>
            <li>
              <strong>Comprehensive Insurance Coverage:</strong>
              <br />
              Your well-being matters. Our program provides insurance coverage,
              giving you peace of mind and ensuring you&apos;re covered for
              unexpected events during your time in Canada.
            </li>
            <li>
              <strong>Travel with Loved Ones:</strong>
              <br />
              Strengthen bonds with your family by bringing them along. Explore
              Canada&apos;s wonders together and create lasting memories in a
              new land.
            </li>
            <li>
              <strong>Path to Permanent Residency:</strong>
              <br />
              After your initial stay, seize the opportunity to apply for
              permanent residency. Canada&apos;s welcoming embrace can become a
              permanent part of your journey.
            </li>
            <li>
              <strong>Journey to Citizenship :</strong>
              <br />
              As a permanent resident for 5 years, you can progress to Canadian
              citizenship. Join the nation&apos;s proud citizens and experience
              the sense of belonging.
            </li>
            <li>
              <strong>Professional Growth:</strong>
              <br />
              Leverage our program to pursue professional growth and licensing.
              Expand your skillset, enhance your career prospects, and unlock
              diverse opportunities within Canada&apos;s industries.
            </li>
          </ul>
          <ul className={styles.requirements}>
            <h4 className='mb-3'> Requirements </h4>

            <li>International Passport</li>
            <li>CV/Resume</li>
            <li>Birth Certificate</li>
            <li>Passport photograph (White background, American size)</li>
            <li>School Certificate (If available)</li>
          </ul>
          <div className='col-12 col-md-8 col-lg-5 my-5'>
            <ChatUs />
          </div>
        </article>
        <aside className='col-12 col-md-4'>
          <Booking />
        </aside>
      </section>
    </main>
  );
}
