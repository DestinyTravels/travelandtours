import Image from 'next/image';
import styles from './page.module.scss';
import { FaFly, FaHotel } from 'react-icons/fa';
import { BiBookReader } from 'react-icons/bi';
import {
  MdNaturePeople,
  MdAddBusiness,
  MdOutlineTour,
  MdHomeWork,
} from 'react-icons/md';

import HeroSection from '@/Components/HeroSection/HeroSection';
import Link from 'next/link';

export default function Home() {
  const servicesCard = [
    {
      title: ' Work visas Applications Assistance ',
      icon: <FaFly />,
      description:
        'Secure your dream job abroad with our comprehensive work visa application assistance. We provide expert guidance throughout the process, helping you gather the necessary documents, fill out forms accurately, and meet all requirements. Our team ensures your application stands out, increasing your chances of a successful outcome.',
      url: '/workvisas',
    },
    {
      title: 'Study or students visa application assistance ',
      url: '/studentvisas',
      description:
        'Pursue your educational aspirations globally with our dedicated study visa application assistance. We understand the significance of a well-prepared application, and our experts will guide you through the process, helping you choose the right course and institution, compile the required documents, and submit a compelling application.',
      icon: <BiBookReader />,
    },
    {
      title: 'Permanent residents visas applications assistance',
      url: '/permanentvisas',
      description:
        'If you wish to make a new country your home, our team is here to support you throughout the permanent residency visa application process. We provide personalized guidance, ensuring you meet all eligibility criteria and submit a thorough application. Trust us to make your dream of permanent residency a reality.',
      icon: <MdHomeWork />,
    },
    {
      title: ' Citizenship visa application assistance',
      url: '/citizenshipvisas',
      description:
        'Our citizenship visa application assistance service aims to make the journey to citizenship smoother for you. We understand the importance of acquiring citizenship and the rights and privileges it brings. Our experts will navigate you through the complex application process, making it simpler and more efficient.',
      icon: <MdNaturePeople />,
    },
    {
      title: 'Business visas application assistance',
      url: '/businessvisas',
      description:
        "Expand your business horizons globally with our expert business visa application assistance. Whether you're attending conferences, exploring investment opportunities, or establishing new business ventures abroad, we offer tailored solutions to meet your unique requirements. Our team ensures your application highlights your business objectives, increasing the likelihood of a favorable outcome.",
      icon: <MdAddBusiness />,
    },
    {
      title: 'Tourist visa application assistance',
      description:
        'Embark on unforgettable travel experiences with our hassle-free tourist visa application assistance. We simplify the process, providing expert guidance to help you gather the required documents, complete the application accurately, and enhance your chances of a successful visa approval. Let us take care of the paperwork while you focus on creating memories.',
      icon: <MdOutlineTour />,
      url: '/touristvisas',
    },
    {
      title: 'Reservations & Sales of local and international flight tickets.',
      url: '/hotelticket',
      description:
        'Make your travel experience truly exceptional with our convenient hotel and apartment reservation services. Our team works closely with a wide network of trusted partners worldwide to offer you a range of accommodation options that suit your preferences and budget. Rest assured that we will find the perfect place to stay, ensuring your trip is comfortable and memorable.',
      icon: <MdOutlineTour />,
    },
    {
      title:
        'Resvations And booking of local & international hotels and apartment.',
      url: '/hotelreservation',
      description:
        "At Expert Visa Solutions, we offer a one-stop solution for all your flight reservation needs. Our experienced travel agents will assist you in finding the best flight options tailored to your preferences and budget. Whether it's a domestic trip or an international adventure, we ensure your journey begins with convenience and comfort.",
      icon: <FaHotel />,
    },
  ];

  return (
    <main className={`${styles.main} `}>
      <section>
        <HeroSection />
      </section>

      <section className={`${styles.whyUs} pt-5 `}>
        <section className='container d-flex flex-column justify-content-between mt-5'>
          <article data-aos='zoom-out' className=''>
            <p>
              {' '}
              Welcome to <strong>Destiny Travel and Tours, </strong> your
              trusted partner for visa application assistance and travel
              services. We specialize in helping individuals and businesses
              navigate the complexities of visa applications, providing expert
              guidance and personalized support. Our team of experienced
              professionals is committed to ensuring a seamless and hassle-free
              visa application process. Additionally, we offer convenient
              reservations for flights, hotels, and apartments, making your
              travel experience truly exceptional.
            </p>
          </article>
          <aside className='mt-5'>
            <h4 data-aos='fade-left'> Wy choose us</h4>
            <div className='line'></div>
            <ul className='d-flex flex-wrap justify-content-center'>
              <li data-aos='fade-down' className='col-12 col-lg-3'>
                <span>Expertise:</span> <br />
                Our team of visa and travel experts has years of experience in
                assisting clients with their visa applications and travel needs.
                We stay up-to-date with changing regulations and requirements to
                provide you with accurate and reliable services.
              </li>

              <li data-aos='fade-down' className='col-12 col-lg-3'>
                <span>Personalized Assistance:</span> <br />
                We understand that everyone's situation is unique. That's why we
                offer personalized assistance tailored to your specific needs.
                Our team will listen to your concerns, answer your questions,
                and provide customized solutions.
              </li>

              <li data-aos='fade-down' className='col-12 col-lg-3'>
                <span>Efficiency:</span> <br />
                We value your time and strive to provide efficient and timely
                services. Our streamlined processes help expedite your visa
                applications and travel arrangements, ensuring a smooth and
                hassle-free experience.
              </li>

              <li data-aos='fade-down' className='col-12 col-lg-3'>
                <span>Customer Satisfaction:</span> <br />
                Our ultimate goal is your satisfaction. We are committed to
                delivering exceptional customer service and assisting you
                throughout your visa application and travel journey. Your
                success is our success.
              </li>
            </ul>
          </aside>
        </section>
      </section>

      <section className={`${styles.services}`}>
        <section>
          <h4 data-aos='fade-left'> Our services </h4>
          <div className='line'></div>
        </section>
        <section className='mt-5 d-flex flex-wrap container justify-content-between'>
          {servicesCard.map((card, idx) => (
            <article
              className={`${styles.serviceCard} d-flex flex-column justify-content-between mb-5  pb-5 `}
              key={idx}
            >
              <div
                className={`${styles.cardTitle} d-flex flex-column justify-content-center align-items-center`}
              >
                <span className={`${styles.Icon}`}>
                  {card.icon ? card.icon : ''}{' '}
                </span>
                <h3> {card.title}</h3>
              </div>

              <div className={`${styles.cardDescription}`}>
                {' '}
                {card.description}{' '}
              </div>

              <div>
                <button className='main-btn'>
                  {' '}
                  <Link href={card.url}> Read more </Link>{' '}
                </button>
              </div>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}
