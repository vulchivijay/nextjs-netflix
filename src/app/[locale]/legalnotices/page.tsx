import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations('legalnotices');

  return (
    <>
      <div className="relative z-10 bg-black text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">{t('title')}</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('copyrightNotice.title')}</h2>
            <p className="text-gray-300 mb-4">
              {t('copyrightNotice.content.0')}
            </p>
            <p className="text-gray-300 mb-4">
              {t('copyrightNotice.content.1')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('termsOfService.title')}</h2>
            <p className="text-gray-300 mb-4">
              {t('termsOfService.content')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('privacyPolicy.title')}</h2>
            <p className="text-gray-300 mb-4">
              {t('privacyPolicy.content')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('disclaimer.title')}</h2>
            <p className="text-gray-300 mb-4">
              {t('disclaimer.content')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('contactInformation.title')}</h2>
            <p className="text-gray-300 mb-4">
              {t('contactInformation.intro')}
            </p>
            <address className="text-gray-300 not-italic">
              {t('contactInformation.address.name')}<br />
              {t('contactInformation.address.street')}<br />
              {t('contactInformation.address.city')}<br />
              {t('contactInformation.address.country')}
            </address>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('lastUpdated.title')}</h2>
            <p className="text-gray-300">
              {t('lastUpdated.content')}
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
