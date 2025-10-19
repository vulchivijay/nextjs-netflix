import Footer from "./components/footer";
import FrequentlyAskedQuestions from "./components/faq";
import Hero from "./components/hero";
import LandingHeader from "./components/header-secondary";
import MoreReasonsToJoin from "./components/more";
import Ribbon from "./components/ribbon";
import Subscribe from "./components/subscribe";
import TrendingNow from "./components/trending";
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
