import LandingHeader from "../components/HeroHeader";
import Ribbon from "../components/Ribbon";
import TrendingNow from "../components/TrendingNow";
import Footer from "../components/Footer";
import style from "../page.module.css";

export default function HomePage() {
  return (
    <div className={`${style.netflixbg} font-sans min-h-screen text-white`}>
      <LandingHeader />
      <main className="relative z-10">
        <section className="px-6 pt-8">
          <h2 className="text-2xl font-semibold mb-4">Continue watching</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {/* placeholders for continue watching thumbnails */}
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="bg-gray-800 rounded overflow-hidden h-40 flex items-end p-2">
                <div className="text-sm text-gray-200">Show {i + 1}</div>
              </div>
            ))}
          </div>
        </section>

        <Ribbon />
        <TrendingNow />
      </main>

      <Footer />
    </div>
  );
}
