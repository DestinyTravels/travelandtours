import React from 'react';
import { BsHouse, BsPhone, BsSend } from 'react-icons/bs';
import styles from './Contact.module.scss';
import Herosection from '@/Components/HeroSection/GlobalHero';
import { FiMail } from 'react-icons/fi';

function Contact() {
  return (
    <main className={`${styles.contact}`}>
      <Herosection styles={styles} title=' Contact Us' />
      <section className=' container d-flex flex-column flex-md-row justify-content-between my-5 py-5'>
        <article className='d-flex flex-column col-12 col-md-6'>
          <div>
            <h3>Get in touch with us</h3>
          </div>
          <ul
            className={`${styles.contactList} d-flex flex-column justify-content-between  mt-5`}
          >
            <li className='d-flex flex-row justify-content-between '>
              <div className={`${styles.Icons} me-3 `}>
                <BsHouse />
              </div>
              <address>
                Suit 14B, Second floor, SAY Plaza, Plot23 AE, Ekukinam street,
                Utako, Abuja, FCT.
              </address>
            </li>
            <li className='d-flex flex-row '>
              <div className={`${styles.Icons}  me-3`}>
                <BsPhone />
              </div>
              <div>
                <a href='tel: +2349133214070'>+2349133214070</a> <br />
                <a href='tel: +2349022113315'>+2349022113315</a>
              </div>
            </li>

            <li className='d-flex flex-row align-items-center'>
              <div className={`${styles.Icons} me-3`}>
                <FiMail />
              </div>

              <a href='mailto: info@destineytravelandtours.com'>
                info@destineytravelandtours.com
              </a>
            </li>
          </ul>

          {/* <iframe
            title='Map with Directions'
            width='600'
            height='450'
            src='https://goo.gl/maps/zjKpYsZaW1SG4wXV6'
            allowFullScreen
          ></iframe> */}
        </article>
        <aside className={`${styles.form}  col-12 col-md-5 mt-5 mt-md-0`}>
          <h3 className='mb-5'>
            Send us a message and we will get back to you
          </h3>
          <form>
            <input
              type='text'
              placeholder='Your name'
              className='form-control mb-3'
              required
            />
            <input
              type='email'
              placeholder='Your email'
              className='form-control mb-3'
              required
            />
            <input
              type='number'
              placeholder='Your number'
              className='form-control mb-3'
              required
            />

            <textarea
              name='messgae'
              id='booking-message'
              cols='10'
              rows='5'
              className='form-control mb-3'
              placeholder='Message *'
              required
            ></textarea>

            <div className='col-12'>
              <button type='submit' className='main-btn mt-3 col-12'>
                <BsSend /> SUBMIT
              </button>
            </div>
          </form>{' '}
        </aside>
      </section>
    </main>
  );
}

export default Contact;
