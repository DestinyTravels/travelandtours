import React from 'react';
import styles from './About.module.scss';
import { FaCheckCircle } from 'react-icons/fa';
import Herosection from '@/Components/HeroSection/GlobalHero';

function About() {
  return (
    <main
      className={`${styles.about} d-flex flex-column justify-content-center `}
    >
      {/* Hero section */}
      <Herosection styles={styles} title=' About Destiny E Travels and Tours' />

      {/* Who we are section */}
      <section className={`d-flex flex-column container ${styles.whoWeAre}`}>
        <div className={styles.whoTitle}>
          <h3 className='mb-3'> Who we are</h3>
          <p>
            {' '}
            Welcome to Destiny Travel and Tours, your trusted global travel
            specialist with over 10 years of expertise in making travel dreams
            come true. Whether you are an individual seeking exciting adventures
            or a professional looking to explore new opportunities, we are here
            to make your journey unforgettable. <br />
            At Destiny Travel and Tours, we pride ourselves on offering a unique
            range of travel products that cater to diverse needs. From exclusive
            discounts on airfare to carefully curated accommodation packages and
            more, we ensure that you get the best value for every travel
            experience. With us, you can rest assured that your journey will be
            planned with precision and attention to detail.
            <br />
            With a vast network of over 200 partner airlines, we have the
            privilege of sending thousands of travelers to their desired
            destinations every year. Our partnerships with reputable airlines
            enable us to provide you with a wide range of flight options and
            competitive prices. Whether you&apos;re flying to a local hotspot or
            exploring a faraway paradise, we&apos;ve got you covered.
          </p>
        </div>

        <article
          className={`d-flex flex-column flex-lg-row mt-5 justify-content-between`}
        >
          <article className={` col-12 col-lg-5 `}>
            <h3 className='mb-3 mt-4'> Vision</h3>
            <p>
              {' '}
              At Destiny Travel and Tours, our vision is to be the foremost
              global travel specialist, setting new standards in the travel
              industry by providing unmatched services, creating unforgettable
              experiences, and inspiring the wanderlust in every traveler.
            </p>

            <h3 className='mb-3 mt-4'> Core Values</h3>
            <ul className=''>
              <li>
                {' '}
                <FaCheckCircle
                  className={styles.checkMark}
                  color='var(--secColor)'
                />{' '}
                Customer-Centric Approach
              </li>
              <li>
                {' '}
                <FaCheckCircle
                  color='var(--secColor)'
                  className={styles.checkMark}
                />
                Excellence and Integrity
              </li>
              <li>
                {' '}
                <FaCheckCircle
                  color='var(--secColor)'
                  className={styles.checkMark}
                />
                Innovation and Adaptability
              </li>
              <li>
                {' '}
                <FaCheckCircle
                  color='var(--secColor)'
                  className={styles.checkMark}
                />
                Passion for Travel
              </li>
              <li>
                {' '}
                <FaCheckCircle
                  color='var(--secColor)'
                  className={styles.checkMark}
                />
                Commitment to Sustainability
              </li>

              <li>
                {' '}
                <FaCheckCircle
                  color='var(--secColor)'
                  className={styles.checkMark}
                />
                Integrity
              </li>
              <li>
                {' '}
                <FaCheckCircle
                  color='var(--secColor)'
                  className={styles.checkMark}
                />
                Reliability
              </li>
            </ul>
          </article>
          <article className={`col-12 col-lg-6 ${styles.vision}`}>
            <h3 className='mb-3 mt-4'> Mission</h3>
            <p>
              {' '}
              Our mission is to empower individuals and professionals to explore
              the world through seamless travel solutions, personalized
              services, and exclusive offers. We aim to be the go-to travel
              partner for clients worldwide, ensuring that their journeys are
              filled with joy, discovery, and cherished memories.
            </p>
          </article>
        </article>
      </section>
    </main>
  );
}

export default About;
