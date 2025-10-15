import Footer from "./Components/Footer";
import FrequentlyAskedQuestions from "./Components/FrequentlyAskedQuestions/page";
import HeroSection from "./Components/HeroSection/page";
import LandingHeader from "./Components/LandingHeader/page";
import MoreReasonsToJoin from "./Components/MoreReasonsToJoin/page";
import Subscribe from "./Components/Subscribe/page";
import TrendingNow from "./Components/TrendingNow/page";
import style from "./page.module.css";

export default function Home() {
  return (
    <div className={`${style.netflixbg} font-sans min-h-screen`}>
      <LandingHeader />
      <main className="relative z-10 text-white">
        <HeroSection />
        <TrendingNow />
        <MoreReasonsToJoin />
        <FrequentlyAskedQuestions />
        <Subscribe />
      </main>
      <Footer />
    </div>
  );
}
