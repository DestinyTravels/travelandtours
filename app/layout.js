import './globals.css';
import { Outfit } from 'next/font/google';
import NavBar from '@/Components/Navbar/NavBar';
import Footer from '@/Components/Footer/Footer';
import AOSAnimation from '@/utils/AosInit';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata = {
  title: 'Destiny Travels and Tours',
  description:
    'Expert Visa Solutions offers comprehensive assistance with work visas, study visas, permanent residency, citizenship, business visas, and tourist visas. We also provide convenient reservations for flights, hotels, and apartments worldwide.',
  keywords:
    'airline ticketing system, ticketing and reservation, online booking process, air ticketing and reservation in nigeria, airline ticketing and reservation, visas assistance, study visas assistance in nigeria',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={outfit.className}>
        <NavBar />
        <AOSAnimation>{children}</AOSAnimation>
        <Footer />
      </body>
    </html>
  );
}
