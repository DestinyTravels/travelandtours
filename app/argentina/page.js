import React from 'react';
import HotOfferHero from '@/Components/HeroSection/HotOffersHero';
import Booking from '@/Components/Booking/Booking';
import ChatUs from '@/Components/chat/ChatUs';

import styles from './argentina.module.scss';

export default function Argentina() {
  return (
    <main className={styles.argentina}>
      <HotOfferHero
        title='Argentina Visas Program'
        bgUrl='/assets/ARGENTINA.jpeg'
      />
      <section
        className={` container d-flex flex-column flex-md-row mt-5 justify-content-between`}
      >
        <article className={`${styles.deets} col-12 col-md-7`}>
          <p>
            Experience the rich tapestry of Argentina through our comprehensive
            visas program, designed to cater to a spectrum of aspirations.
            Whether you&apos;re drawn to Argentina for work, study, business, or
            leisure, our program offers a gateway to this diverse nation. Embark
            on a temporary residence journey that spans from 6 to 2 years,
            immersing yourself in Argentina&apos;s vibrant culture,
            opportunities, and landscapes.
            <br /> <br />
            As you make your mark in Argentina, seize the chance to engage in
            full-time employment and contribute to the nation&apos;s dynamic
            workforce. We provide accommodation solutions that ensure you have a
            comfortable and inviting place to call home. With comprehensive
            insurance coverage, your well-being is protected, allowing you to
            focus on your pursuits with peace of mind.
          </p>
          <ul className='mt-5'>
            <h4 className='mb-3'> Benefits Includes </h4>

            <li>
              <strong>6 - 2 Years of Thriving Experience:</strong> <br />
              Discover Argentina&apos;s vibrant culture and career opportunities
              with a temporary residence of 6 to 2 years. Immerse yourself in
              its dynamic atmosphere and embark on an enriching journey.
            </li>
            <li>
              <strong>Embrace Full-Time Employment:</strong>
              <br />
              Our program allows you to dive into a full-time job, enhancing
              your skills and contributing to Argentina&apos;s workforce.
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
              unexpected events during your time in Argentina.
            </li>
            <li>
              <strong>Path to Permanent Residency:</strong>
              <br />
              After your initial stay, seize the opportunity to apply for
              permanent residency. Argentina&apos;s welcoming embrace can become
              a permanent part of your journey.
            </li>
            <li>
              <strong>Journey to Citizenship :</strong>
              <br />
              As a permanent resident for 5 years, you can progress to Argentine
              citizenship. Join the nation&apos;s proud citizens and experience
              the sense of belonging.
            </li>
            <li>
              <strong>Professional Growth:</strong>
              <br />
              Leverage our program to pursue professional growth and licensing.
              Expand your skillset, enhance your career prospects, and unlock
              diverse opportunities within Australia&apos;s industries.
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
