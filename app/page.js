import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Newsletter from '@/components/Newsletter';
import Media from '@/components/Media';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Newsletter />
      <Media />
      <Footer />
    </>
  );
}