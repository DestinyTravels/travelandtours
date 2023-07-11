import React from 'react';
import styles from './Footer.module.scss';
import Logo from '../../public/assets/DestinyLogo.png';

import { BiCopyright } from 'react-icons/bi';
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
  return (
    <div className={`${styles.footer} d-flex flex-column`}>
      <main className='d-flex flex-column flex-lg-row  justify-content-between align-items-center align-items-lg-start '>
        {/* Logo */}
        <section
          className={`${styles.logo} col-12 col-md-8 col-lg-3 d-flex flex-column text-center text-lg-start mx-auto`}
        >
          <div className='d-flex flex-row col-10 col-md-6 col-lg-12 mx-auto align-items-center '>
            <figure>
              {' '}
              <Image
                className='col-12'
                src={Logo}
                alt=' Destiny Travels and tours Logo'
              />{' '}
            </figure>
          </div>
        </section>

        <section className='d-flex flex-row justify-content-between col-12 col-lg-9'>
          <div className='d-flex flex-column flex-lg-row justify-content-between col-lg-6'>
            {/* company */}
            <aside className='d-flex align-content-center col-12 col-lg-6 flex-column '>
              <h4> Company </h4>
              <div className='d-flex flex-column'>
                <Link href='/about'>About</Link>
                <Link href='/blog'>Blog</Link>
                <Link href='/careers'> Careers</Link>
                <Link href='/partners'> Partners </Link>
                <Link href='/contact'> Contact us </Link>
                <Link href='/affiliate'> Affiliates </Link>
                <Link href='/legal'> Legal </Link>
                <Link href='/service'> Service Status </Link>
              </div>
              <h4 className='mt-4'> Solutions </h4>
              <div className='d-flex flex-column'>
                <Link href='/about'>Online Store Farming</Link>
                <Link href='/blog'>DEFI Discounts</Link>
                <Link href='/careers'> Ecommerce Website</Link>
              </div>
            </aside>

            {/* services */}
            <aside className='d-flex col-12 col-lg-6  flex-column '>
              <h4> Developer </h4>
              <Link href='/ntfarts'>Oasis.dev</Link>
              <Link href='/ivory'> White Paper</Link>
              <Link href='/musicnft'> Github </Link>
              <Link href='/cryptocard'> API Docs </Link>
            </aside>
          </div>

          <div className='d-flex flex-column flex-lg-row justify-content-between col-lg-6'>
            {/* Support */}
            <aside className='d-flex col-12 col-lg-6  flex-column '>
              <h4> Support </h4>
              <Link href='/about'>Help center</Link>
              <Link href='/contact'> FAQ </Link>
            </aside>
            <aside className='d-flex col-12 col-lg-6  flex-column '>
              <h4> Resources </h4>
              <Link href='/about'>Timelock</Link>
              <Link href='/careers'> Product Farming</Link>
              <Link href='/donate'> Oasis Market </Link>
              <Link href='/contact'> Shopify Fulfillment Network </Link>
              <Link href='/contact'> Linkpop </Link>
              <Link href='/contact'>Commerce Components</Link>
            </aside>
          </div>
        </section>
      </main>

      <article className='d-flex flex-column flex-lg-row justify-content-between align-items-center text-center text-lg-start'>
        <small>
          {' '}
          <BiCopyright /> 2022 Wolfpackherd Network,inc. All rights reserved
        </small>
        <div className='d-flex col-8 col-md-3 mt-3 mt-lg-0 flex-row justify-content-between'>
          <small> Terms of use</small>
          <small> Privacy policy</small>
        </div>
      </article>
    </div>
  );
}

export default Footer;
