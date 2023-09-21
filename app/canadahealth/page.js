import React from 'react';
import HotOfferHero from '@/Components/HeroSection/HotOffersHero';
import Booking from '@/Components/Booking/Booking';
import ChatUs from '@/Components/chat/ChatUs';

import styles from './canadahealth.module.scss';

export default function Canadahealth() {
  return (
    <main className={styles.canadahealth}>
      <HotOfferHero
        title='Canada Healthcare Visas Program'
        bgUrl='/assets/BELGIUM.jpeg'
      />
      <section
        className={` container d-flex flex-column flex-md-row mt-5 justify-content-between`}
      >
        <article className={`${styles.deets} col-12 col-md-7`}>
          <p>
            Elevate your healthcare career with our specialized visas program
            tailored for nurses, midwives, laboratory technicians, pharmacists,
            and more. Canada&apos;s healthcare system is globally acclaimed, and
            our program offers a unique opportunity to contribute to this
            dynamic sector. With a focus on healthcare professionals, our
            program provides a pathway to professional growth, personal
            enrichment, and new horizons.
            <br /> <br />
            Embrace a fulfilling experience in Canada&apos;s healthcare
            landscape, where excellence and innovation converge. As you provide
            vital care to patients, our program ensures you receive the support
            you need to succeed. Benefit from a comfortable living environment
            and comprehensive insurance coverage that prioritizes your
            well-being, allowing you to focus on your calling.
            <br /> <br />
            Beyond a temporary stay, our program often leads to permanent
            residency, setting the stage for a stable and rewarding future in
            Canada. As a permanent resident for 5 years, you&apos;re eligible to
            embark on the journey to Canadian citizenship, becoming a valued
            member of this welcoming nation.
          </p>
          <ul className='mt-5'>
            <h4 className='mb-3'> Benefits Includes </h4>

            <li>
              <strong>6 months - 2 Years of Thriving Experience:</strong> <br />
              Discover Canadian&apos;s vibrant culture and career opportunities
              with a temporary residence of 6 months to 2 years. Immerse
              yourself in its dynamic atmosphere and embark on an enriching
              journey.
            </li>
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
