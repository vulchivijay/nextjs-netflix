import HeroSection from "./Components/HeroSection/page";
import LandingHeader from "./Components/LandingHeader/page";
import style from "./page.module.css";

export default function Home() {
  return (
    <div className={`${style.netflixbg} font-sans min-h-screen`}>
      <LandingHeader />
      <main>
        <HeroSection />
      </main>
    </div>
  );
}
