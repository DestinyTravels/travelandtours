import Image from 'next/image';
import styles from './page.module.css';

import Under from '../public/assets/under-construction.webp';

export default function Home() {
  return (
    <main className={`${styles.main} container text-center`}>
      <figure className='col-12 col-md-7'>
        <Image src={Under} alt='Destiny trave and tours under constructions' />
      </figure>
      <h1> Working hard to take you round the world</h1>
    </main>
  );
}
