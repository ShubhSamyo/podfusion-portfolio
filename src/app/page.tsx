import Footer from "@/componants/footer";
import Header from "@/componants/header";
import WhatYouGet from "@/componants/whatYouGet";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <Header />
      <WhatYouGet />
      <Footer />
    </main>
  );
}
