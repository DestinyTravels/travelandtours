import React from 'react';
import styles from './Footer.module.scss';
import Logo from '../../public/assets/DestinyLogoFooter.png';

import { BiCopyright } from 'react-icons/bi';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <div className={`${styles.footer} d-flex flex-column`}>
      <main className='d-flex flex-column flex-md-row  justify-content-between align-items-center'>
        {/* Logo */}
        <section
          className={`${styles.logo} col-12 col-md-4  d-flex flex-column`}
        >
          <figure>
            {' '}
            <Image
              className='col-12 col-md-5'
              src={Logo}
              alt=' Destiny E Travels and Tours
 Logo'
            />{' '}
          </figure>
          <div>
            {' '}
            <p>
              {' '}
              We offer comprehensive assistance with work visas, study visas,
              permanent residency, citizenship, business visas, and tourist
              visas.
            </p>{' '}
          </div>
        </section>
        <section className='d-flex flex-row col-12 col-md-2 justify-content-between'>
          <a
            href='https://www.facebook.com/profile.php?id=61551005468193&mibextid=LQQJ4d'
            target='_blank'
            rel='noreferrer'
          >
            <FaFacebook size={30} color='var(--secColor)' />{' '}
          </a>
          <a
            href='https://instagram.com/destiny_e_travel?igshid=OGQ5ZDc2ODk2ZA=='
            target='_blank'
            rel='noreferrer'
          >
            <FaInstagram size={30} color='var(--secColor)' />
          </a>
        </section>
      </main>
    </div>
  );
}

export default Footer;
