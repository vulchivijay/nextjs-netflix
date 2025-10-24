'use client';

import { useTranslations } from 'next-intl';
import Header from "../components/header";
import Footer from "../components/footer";

export default function Page() {
  const t = useTranslations('onlyonnetflix');
  const originals = t.raw('originals');
  const upcoming = t.raw('upcoming');
  const genres = t.raw('genres');
  const whyOriginals = t.raw('whyOriginals');

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 py-20">
          <div className="max-w-6xl mx-auto text-center px-8">
            <h1 className="text-5xl font-bold mb-6">{t('hero.title')}</h1>
            <p className="text-xl mb-8">
              {t('hero.subtitle')}
            </p>
          </div>
        </section>

        {/* Featured Originals */}
        <section className="py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Netflix Originals</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {originals.map((show: any, index: number) => (
                <div key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors">
                  <div className="aspect-video bg-gray-700 flex items-center justify-center text-6xl">
                    {show.image}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{show.title}</h3>
                    <p className="text-red-400 text-sm font-medium mb-3">{show.genre}</p>
                    <p className="text-gray-300 text-sm">{show.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Releases */}
        <section className="py-16 px-8 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Coming Soon</h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {upcoming.map((show: any, index: number) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{show.title}</h3>
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {show.release}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">{show.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Original Genres */}
        <section className="py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Explore Netflix Original Genres</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {genres.map((genre: any, index: number) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors">
                  <div className="text-5xl mb-4">{genre.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{genre.name}</h3>
                  <p className="text-red-400 text-sm font-medium">{genre.count}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Netflix Originals */}
        <section className="py-16 px-8 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Netflix Originals?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyOriginals.map((item: any, index: number) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-8 bg-red-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{t('cta.title')}</h2>
            <p className="text-xl mb-8">
              {t('cta.subtitle')}
            </p>
            <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors">
              {t('cta.button')}
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
