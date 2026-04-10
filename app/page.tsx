import FlowerCarousel from "@/components/FlowerCarousel";
import Hero from "@/components/Hero";
import Topbar from "@/components/Topbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main id="home" className="w-full min-h-screen">
      <Topbar></Topbar>
      <Hero />
      <FlowerCarousel />
      <Footer></Footer>
    </main>
  );
}