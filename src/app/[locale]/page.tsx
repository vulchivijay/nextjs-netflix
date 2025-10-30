import Hero from "../components/hero";
import MoreReasonsToJoin from "../components/more";
import Ribbon from "../components/ribbon";
import Subscribe from "../components/subscribe";
import TrendingNow from "../components/trending";
import FrequentlyAskedQuestions from "../components/faq";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="relative z-10 text-white">
        <Hero />
        <Ribbon />
        <TrendingNow />
        <MoreReasonsToJoin />
        <FrequentlyAskedQuestions />
        <Subscribe />
      </main>
    </div>
  );
}
