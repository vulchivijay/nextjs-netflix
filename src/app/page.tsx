import Footer from "./components/Footer";
import FrequentlyAskedQuestions from "./components/Faq";
import Hero from "./components/Hero";
import LandingHeader from "./components/HeroHeader";
import MoreReasonsToJoin from "./components/More";
import Ribbon from "./components/Ribbon";
import Subscribe from "./components/Subscribe";
import TrendingNow from "./components/TrendingNow";
import style from "./page.module.css";

export default function Home() {
  return (
    <div className={`${style.netflixbg} font-sans min-h-screen`}>
      <LandingHeader />
      <main className="relative z-10 text-white">
        <Hero />
        <Ribbon />
        <TrendingNow />
        <MoreReasonsToJoin />
        <FrequentlyAskedQuestions />
        <Subscribe />
      </main>
      <Footer />
    </div>
  );
}
