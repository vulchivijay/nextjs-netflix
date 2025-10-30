'use client';
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('termsofuse');
  const sections = t.raw('sections');
  return (
    <>
      <div className="min-h-screen bg-black text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">{t('title')}</h1>

          {sections.map((section, index) => (
            <section key={index} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              <p className="text-gray-300 mb-4">
                {section.content}
              </p>
              {section.list && (
                <ul className="list-disc list-inside text-gray-300 mb-4 ml-4">
                  {section.list.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('contact.title')}</h2>
            <p className="text-gray-300 mb-4">
              {t('contact.intro')}
            </p>
            <address className="text-gray-300 not-italic">
              {t('contact.address.company')}<br />
              {t('contact.address.street')}<br />
              {t('contact.address.city')}<br />
              {t('contact.address.country')}<br />
              {t('contact.address.email')}
            </address>
            <p className="text-gray-300 mt-4">
              {t('lastUpdated')}
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
