'use client';

import { useTranslations } from 'next-intl';
import Header from "../components/header";
import Footer from "../components/footer";

export default function Page() {
  const t = useTranslations('privacy');
  const sections = t.raw('sections');

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">{t('title')}</h1>

          <div className="mb-8 p-6 bg-gray-800 rounded-lg">
            <p className="text-gray-300 text-sm mb-4">
              <strong>{t('effectiveDate')}</strong>
            </p>
            <p className="text-gray-300">
              {t('intro')}
            </p>
          </div>

          {sections.map((section, index) => (
            <section key={index} className="mb-12">
              <h2 className="text-3xl font-semibold mb-6 text-red-600">{section.title}</h2>
              <div className="space-y-4">
                {section.content.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-gray-800 p-6 rounded-lg">
                    <p className="text-gray-300 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}

          <section className="mt-16 bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">{t('contact.title')}</h2>
            <p className="text-gray-300 mb-6">
              {t('contact.intro')}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">{t('contact.privacyTeam.title')}</h3>
                <p className="text-gray-300 text-sm">
                  {t('contact.privacyTeam.email')}<br />
                  {t('contact.privacyTeam.phone')}<br />
                  {t('contact.privacyTeam.address')}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{t('contact.dataProtectionOfficer.title')}</h3>
                <p className="text-gray-300 text-sm">
                  {t('contact.dataProtectionOfficer.description')}<br />
                  {t('contact.dataProtectionOfficer.email')}
                </p>
              </div>
            </div>
          </section>

          <section className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              {t('footer')}
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
