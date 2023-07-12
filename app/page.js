import Image from 'next/image';
import styles from './page.module.css';

import HeroSection from '@/Components/HeroSection/HeroSection';

export default function Home() {
  return (
    <main className={`${styles.main} `}>
      <HeroSection />
    </main>
  );
}
