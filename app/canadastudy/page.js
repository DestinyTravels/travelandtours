import React from 'react';
import HotOfferHero from '@/Components/HeroSection/HotOffersHero';
import Booking from '@/Components/Booking/Booking';
import ChatUs from '@/Components/chat/ChatUs';

import styles from './canadastudy.module.scss';

export default function Canadastudy() {
  return (
    <main className={styles.canadastudy}>
      <HotOfferHero
        title='Canada Work and Study Visas'
        bgUrl='/assets/destinytravelstudent.webp'
      />
      <section
        className={` container d-flex flex-column flex-md-row mt-5 justify-content-between`}
      >
        <article className={`${styles.deets} col-12 col-md-7`}>
          <p>
            Embrace a harmonious blend of work and study in Canada through our
            specialized visas program. Experience the unique opportunity to
            balance education with practical exposure, creating a comprehensive
            skill set that sets you apart in a competitive world.
            <br /> <br />
            Our program enables you to immerse yourself in Canada&apos;s
            cooperative learning environment, engaging with peers, professors,
            and professionals. As you gain theoretical knowledge and hands-on
            experience, you&apos;re equipped to excel in your chosen field both
            nationally and internationally.
            <br /> <br />
            Canada&apos;s work and study visas provide the foundation for
            enhanced employability, bridging the gap between academia and
            industry demands. Whether you&apos;re aiming to elevate your career
            or expand your horizons, our program guides you through a
            transformative journey that combines education, experience, and
            personal growth.
            <br /> <br />
            Lay the groundwork for a successful future as our program often
            leads to permanent residency, establishing roots in a land known for
            its stability and inclusivity. Your journey in Canada extends beyond
            a temporary stay; it&apos;s a pathway to a prosperous and fulfilling
            life.
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
