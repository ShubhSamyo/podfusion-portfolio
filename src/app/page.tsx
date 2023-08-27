import Footer from "@/componants/footer";
import Header from "@/componants/header";
import HeroSection from "@/componants/hero";
import WhatYouGet from "@/componants/whatYouGet";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhatYouGet />
      <Footer />
    </main>
  );
}
