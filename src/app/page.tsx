import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import {
  FAQSchema,
  ProductSchema,
  OrganizationSchema,
  WebsiteSchema,
  BreadcrumbSchema,
  SpeakableSchema,
} from '@/components/StructuredData';

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <FAQSchema />
      <ProductSchema />
      <OrganizationSchema />
      <WebsiteSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://getclipkeeper.com' },
        ]}
      />
      <SpeakableSchema
        url="https://getclipkeeper.com"
        cssSelector={['h1', '.hero-description', '#faq']}
      />

      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
