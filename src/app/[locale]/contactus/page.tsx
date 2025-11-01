
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations('contactus');
  const socialLinks = t.raw('socialMedia.links') as string[];

  return (
    <>
      <div className="relative z-10 bg-black text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">{t('title')}</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('getInTouch.title')}</h2>
            <p className="text-gray-300 mb-6">
              {t('getInTouch.description')}
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{t('customerSupport.title')}</h3>
              <p className="text-gray-300 mb-4">
                {t('customerSupport.description')}
              </p>
              <div className="space-y-2">
                <p className="text-gray-300">
                  <strong>Phone:</strong> {t('customerSupport.phone')}
                </p>
                <p className="text-gray-300">
                  <strong>Hours:</strong> {t('customerSupport.hours')}
                </p>
                <p className="text-gray-300">
                  <strong>Email:</strong> {t('customerSupport.email')}
                </p>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{t('businessInquiries.title')}</h3>
              <p className="text-gray-300 mb-4">
                {t('businessInquiries.description')}
              </p>
              <div className="space-y-2">
                <p className="text-gray-300">
                  <strong>Email:</strong> {t('businessInquiries.email')}
                </p>
                <p className="text-gray-300">
                  <strong>Phone:</strong> {t('businessInquiries.phone')}
                </p>
              </div>
            </div>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('mailingAddress.title')}</h2>
            <address className="text-gray-300 not-italic bg-gray-800 p-6 rounded-lg whitespace-pre-line">
              {t('mailingAddress.address')}
            </address>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('internationalOffices.title')}</h2>
            <p className="text-gray-300 mb-4">
              {t('internationalOffices.description')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('socialMedia.title')}</h2>
            <p className="text-gray-300 mb-4">
              {t('socialMedia.description')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a key={index} href="#" className="text-red-500 hover:text-red-400">{link}</a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('helpCenter.title')}</h2>
            <p className="text-gray-300 mb-4">
              {t('helpCenter.description')}
            </p>
            <a href="/helpcenter" className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-white font-semibold inline-block">
              {t('helpCenter.button')}
            </a>
          </section>
        </div>
      </div>
    </>
  );
}
