import Footer from "./Components/Footer";
import FrequentlyAskedQuestions from "./Components/Faq/page";
import Hero from "./Components/Hero/page";
import LandingHeader from "./Components/HeroHeader/page";
import MoreReasonsToJoin from "./Components/More/page";
import Ribbon from "./Components/Ribbon/page";
import Subscribe from "./Components/Subscribe/page";
import TrendingNow from "./Components/TrendingNow/page";
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
