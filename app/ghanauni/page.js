import React from 'react';
import HotOfferHero from '@/Components/HeroSection/HotOffersHero';
import Booking from '@/Components/Booking/Booking';
import ChatUs from '@/Components/chat/ChatUs';

import styles from './ghanauni.module.scss';

export default function Ghanauni() {
  return (
    <main className={styles.ghanauni}>
      <HotOfferHero
        title='Universities in Ghana for Nigerians'
        bgUrl='/assets/SWEDEN.jpeg'
      />
      <section
        className={` container d-flex flex-column flex-md-row mt-5 justify-content-between`}
      >
        <article className={`${styles.deets} col-12 col-md-7`}>
          <p>
            Discover a world-class education in Ghana&apos;s renowned
            universities, tailored for Nigerian students seeking excellence. Our
            program offers a gateway to pursue higher education in Ghana, where
            academic distinction, cultural enrichment, and career prospects
            converge. With intakes in September 2023 and February 2024, seize
            the opportunity to shape your future and expand your horizons.
            <br /> <br />
            Ghana&apos;s universities uphold rigorous academic standards,
            fostering an environment of innovation, critical thinking, and
            practical skills. Benefit from top-tier education that prepares you
            for success in a globally competitive landscape. As a Nigerian
            student, you&apos;ll find a warm and welcoming community that
            celebrates diversity and encourages growth.
            <br /> <br />
            Ghana isn&apos;t just a destination for education; it&apos;s a
            cultural experience. Immerse yourself in vibrant festivals,
            historical sites, and the rich fabric of Ghanaian life. Our program
            ensures your educational investment is both rewarding and
            accessible, offering exceptional value for your academic journey.
            <br /> <br />
            As you graduate from a Ghanaian university, you carry a diverse
            skill set and cultural awareness that enhances your career prospects
            on a global scale. Join us in the pursuit of educational excellence
            and personal growth, as we guide you toward a brighter future
            through Ghana&apos;s esteemed universities.
          </p>

          <ul className={`${styles.requirements} mt-5`}>
            <h4 className='mb-3'> Programes </h4>

            <li>Faculty of Law</li>
            <li>Faculty of Engineering </li>
            <li>Faculty of Business Administrations</li>
            <li>Faculty of Allied Health Science </li>
            <li>Faculty of Nursing and Midwifery</li>
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
