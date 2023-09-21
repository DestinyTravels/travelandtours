import React from 'react';
import HotOfferHero from '@/Components/HeroSection/HotOffersHero';
import Booking from '@/Components/Booking/Booking';
import ChatUs from '@/Components/chat/ChatUs';

import styles from './australia.module.scss';

export default function Australia() {
  return (
    <main className={styles.australia}>
      <HotOfferHero
        title='Australia Visas Program'
        bgUrl='/assets/australia.jpeg'
      />
      <section
        className={` container d-flex flex-column flex-md-row mt-5 justify-content-between`}
      >
        <article className={`${styles.deets} col-12 col-md-7`}>
          <p>
            Open the door to possibilities in Australia with our
            all-encompassing visas program. Whether you&apos;re looking to work,
            study, visit, or engage in business ventures, our program caters to
            a range of aspirations. Embark on a journey that spans from 6 months
            to 2 years, allowing you to explore Australia&apos;s breathtaking
            landscapes, dynamic cities, and innovative opportunities.
            <br /> <br />
            As you embrace the Australian lifestyle, dive into full-time work
            opportunities that provide valuable industry insights and
            professional growth. Our accommodation solutions ensure you have a
            comfortable haven to retreat to after a day of exploration.
            Comprehensive insurance coverage safeguards your well-being, letting
            you navigate your Australian adventure with confidence.
            <br /> <br />
            Your loved ones remain close, as our program enables you to explore
            Australia together as a family. For those seeking professional
            advancement, our program facilitates licensing and recognition,
            allowing you to elevate your expertise and qualifications. Whether
            you&apos;re aiming for a new career trajectory or a life-changing
            experience, let us guide you through the exciting journey of growth
            and exploration in Australia.
          </p>
          <ul className='mt-5'>
            <h4 className='mb-3'> Benefits Includes </h4>

            <li>
              <strong>6 months - 1 Years of Thriving Experience:</strong> <br />
              Discover Australia&apos;s vibrant culture and career opportunities
              with a temporary residence of 6 months to 1 years. Immerse
              yourself in its dynamic atmosphere and embark on an enriching
              journey.
            </li>
            <li>
              <strong>Embrace Full-Time Employment:</strong>
              <br />
              Our program allows you to dive into a full-time job, enhancing
              your skills and contributing to Australia&apos;s workforce.
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
              unexpected events during your time in Australia.
            </li>
            <li>
              <strong>Path to Permanent Residency:</strong>
              <br />
              After your initial stay, seize the opportunity to apply for
              permanent residency. Australia&apos;s welcoming embrace can become
              a permanent part of your journey.
            </li>
            <li>
              <strong>Journey to Citizenship :</strong>
              <br />
              As a permanent resident for 5 years, you can progress to
              Australian citizenship. Join the nation&apos;s proud citizens and
              experience the sense of belonging.
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
