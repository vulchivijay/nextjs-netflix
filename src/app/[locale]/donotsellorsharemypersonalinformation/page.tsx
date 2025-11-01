
import { useTranslations } from 'next-intl';

interface PrivacyRight {
  icon: string;
  title: string;
  description: string;
  details: string[];
}

interface FAQ {
  question: string;
  answer: string;
}

export default function Page() {
  const t = useTranslations();

  const privacyRights = t.raw('privacyRights.rights') as PrivacyRight[];
  const faqs = t.raw('faqs.questions') as FAQ[];
  const contactMethods = [
    {
      method: t('howToSubmit.methods.0.method'),
      description: t('howToSubmit.methods.0.description'),
      action: t('howToSubmit.methods.0.action'),
      primary: true
    },
    {
      method: t('howToSubmit.methods.1.method'),
      description: t('howToSubmit.methods.1.description'),
      action: t('howToSubmit.methods.1.action'),
      primary: false
    },
    {
      method: t('howToSubmit.methods.2.method'),
      description: t('howToSubmit.methods.2.description'),
      action: t('howToSubmit.methods.2.action'),
      primary: false
    }
  ];

  return (
    <>
      <div className="relative z-10 bg-black text-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 py-20">
          <div className="max-w-6xl mx-auto text-center px-8">
            <h1 className="text-4xl font-bold mb-6">{t('hero.title')}</h1>
            <p className="text-xl mb-8">
              {t('hero.subtitle')}
            </p>
          </div>
        </section>

        {/* Privacy Rights Overview */}
        <section className="py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">{t('privacyRights.title')}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {privacyRights.map((right, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{right.icon}</span>
                    <h3 className="text-xl font-semibold">{right.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{right.description}</p>
                  <ul className="space-y-2">
                    {right.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-sm">
                        <span className="text-red-400 mr-2">•</span>
                        <span className="text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Submit a Request */}
        <section className="py-16 px-8 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">{t('howToSubmit.title')}</h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <div key={index} className={`p-6 rounded-lg ${method.primary ? 'bg-red-600' : 'bg-gray-800'}`}>
                  <h3 className="text-xl font-semibold mb-3">{method.method}</h3>
                  <p className="text-gray-300 mb-4">{method.description}</p>
                  <button className={`w-full px-4 py-2 rounded font-medium transition-colors ${method.primary
                    ? 'bg-black hover:bg-gray-800 text-white'
                    : 'bg-red-600 hover:bg-red-700 text-white'
                    }`}>
                    {method.action}
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-12 bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{t('howToSubmit.expectations.title')}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">📧</div>
                  <p className="text-sm text-gray-300">{t('howToSubmit.expectations.items.0')}</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🔍</div>
                  <p className="text-sm text-gray-300">{t('howToSubmit.expectations.items.1')}</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">⏱️</div>
                  <p className="text-sm text-gray-300">{t('howToSubmit.expectations.items.2')}</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">✅</div>
                  <p className="text-sm text-gray-300">{t('howToSubmit.expectations.items.3')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="py-16 px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">{t('faqs.title')}</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-red-400">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-16 px-8 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">{t('additionalResources.title')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-5xl mb-4">📄</div>
                <h3 className="text-xl font-semibold mb-3">{t('additionalResources.resources.0.title')}</h3>
                <p className="text-gray-300 mb-4">
                  {t('additionalResources.resources.0.description')}
                </p>
                <button className="text-red-400 hover:text-red-300 text-sm font-medium">{t('additionalResources.resources.0.link')}</button>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-5xl mb-4">🍪</div>
                <h3 className="text-xl font-semibold mb-3">{t('additionalResources.resources.1.title')}</h3>
                <p className="text-gray-300 mb-4">
                  {t('additionalResources.resources.1.description')}
                </p>
                <button className="text-red-400 hover:text-red-300 text-sm font-medium">{t('additionalResources.resources.1.link')}</button>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-5xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold mb-3">{t('additionalResources.resources.2.title')}</h3>
                <p className="text-gray-300 mb-4">
                  {t('additionalResources.resources.2.description')}
                </p>
                <button className="text-red-400 hover:text-red-300 text-sm font-medium">{t('additionalResources.resources.2.link')}</button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16 px-8 bg-red-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{t('contactSupport.title')}</h2>
            <p className="text-xl mb-8">
              {t('contactSupport.subtitle')}
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-black bg-opacity-20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">{t('contactSupport.support.0.title')}</h3>
                <p className="text-gray-200 mb-2">{t('contactSupport.support.0.email')}</p>
                <p className="text-gray-200">{t('contactSupport.support.0.phone')}</p>
                <p className="text-gray-200 text-sm">{t('contactSupport.support.0.hours')}</p>
              </div>
              <div className="bg-black bg-opacity-20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">{t('contactSupport.support.1.title')}</h3>
                <p className="text-gray-200 mb-2">{t('contactSupport.support.1.description')}</p>
                <button className="text-red-400 hover:text-red-300 text-sm font-medium">{t('contactSupport.support.1.link')}</button>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              {t('contactSupport.footer')}
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
