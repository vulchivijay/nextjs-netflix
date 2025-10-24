'use client';

import { useTranslations } from 'next-intl';
import Header from "../components/header";
import Footer from "../components/footer";

export default function Page() {
  const t = useTranslations('waystowatch');
  const devices = t.raw('devices');
  const platforms = t.raw('platforms');
  const viewingOptions = t.raw('viewingOptions');

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 py-20">
          <div className="max-w-6xl mx-auto text-center px-8">
            <h1 className="text-5xl font-bold mb-6">{t('hero.title')}</h1>
            <p className="text-xl mb-8">
              {t('hero.description')}
            </p>
          </div>
        </section>

        {/* Supported Devices */}
        <section className="py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">{t('devicesTitle')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {devices.map((device: any, index: number) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{device.icon}</span>
                    <h3 className="text-xl font-semibold">{device.name}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{device.description}</p>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-400">Popular options:</p>
                    {device.popular.map((item: string, itemIndex: number) => (
                      <p key={itemIndex} className="text-sm text-gray-300">• {item}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section className="py-16 px-8 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">{t('platformsTitle')}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {platforms.map((platform: any, index: number) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">{platform.name}</h3>
                  <p className="text-gray-300 mb-4">{platform.description}</p>
                  <ul className="space-y-2">
                    {platform.features.map((feature: string, featureIndex: number) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <span className="text-red-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Viewing Options */}
        <section className="py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">{t('viewingOptionsTitle')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {viewingOptions.map((option: any, index: number) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
                  <div className="text-5xl mb-4">{option.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{option.title}</h3>
                  <p className="text-gray-300">{option.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="py-16 px-8 bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{t('gettingStarted.title')}</h2>
            <p className="text-xl text-gray-300 mb-8">
              {t('gettingStarted.description')}
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {t.raw('gettingStarted.steps').map((step: any, index: number) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">{t('faq.title')}</h2>
            <div className="space-y-6">
              {t.raw('faq.questions').map((question: any, index: number) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">{question.title}</h3>
                  <p className="text-gray-300">
                    {question.answer}
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
              {t('cta.description')}
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
