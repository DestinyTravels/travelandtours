import React from 'react';
import styles from './HeroSection.module.scss';
import Image from 'next/image';
import artisans from '../../public/assets/artisans.webp';

function HeroSection() {
  return (
    <section
      className={`d-flex flex-column flex-lg-row justify-content-between align-items-center ${styles.hero}`}
    >
      <div className='col-12 col-lg-5'>
        <h1> Life is short, and the world is wide</h1>
        <p>
          {' '}
          To get the best of adventure you just need to leave and go where you
          love We are waiting for you.{' '}
        </p>
      </div>
      <fgiure className='col-12 col-lg-6'>
        <Image
          className='col-12'
          src={artisans}
          alt='Destiny travel pictures'
        />
      </fgiure>
    </section>
  );
}

export default HeroSection;
