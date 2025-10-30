
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations('cookiepreferences');

  return (
    <>
      <div className="relative z-10 bg-black text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">{t('title')}</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('whatAreCookies.title')}</h2>
            <p className="text-gray-300 mb-4">
              {t('whatAreCookies.description')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('typesOfCookies.title')}</h2>

            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2">{t('typesOfCookies.essential.title')}</h3>
              <p className="text-gray-300 mb-2">
                {t('typesOfCookies.essential.description')}
              </p>
              <div className="bg-gray-800 p-4 rounded">
                <label className="flex items-center">
                  <input type="checkbox" checked disabled className="mr-2" />
                  <span className="text-gray-300">{t('typesOfCookies.essential.label')}</span>
                </label>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2">{t('typesOfCookies.performance.title')}</h3>
              <p className="text-gray-300 mb-2">
                {t('typesOfCookies.performance.description')}
              </p>
              <div className="bg-gray-800 p-4 rounded">
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-2" />
                  <span className="text-gray-300">{t('typesOfCookies.performance.label')}</span>
                </label>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2">{t('typesOfCookies.functional.title')}</h3>
              <p className="text-gray-300 mb-2">
                {t('typesOfCookies.functional.description')}
              </p>
              <div className="bg-gray-800 p-4 rounded">
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-2" />
                  <span className="text-gray-300">{t('typesOfCookies.functional.label')}</span>
                </label>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2">{t('typesOfCookies.targeting.title')}</h3>
              <p className="text-gray-300 mb-2">
                {t('typesOfCookies.targeting.description')}
              </p>
              <div className="bg-gray-800 p-4 rounded">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-gray-300">{t('typesOfCookies.targeting.label')}</span>
                </label>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('managingPreferences.title')}</h2>
            <p className="text-gray-300 mb-4">
              {t('managingPreferences.description')}
            </p>
            <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-white font-semibold">
              {t('managingPreferences.button')}
            </button>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('moreInformation.title')}</h2>
            <p className="text-gray-300 mb-4">
              {t('moreInformation.description')}
            </p>
            <p className="text-gray-300">
              {t('moreInformation.lastUpdated')}
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
