import Header from "../components/header";
import Footer from "../components/footer";
import { useTranslations } from "next-intl";

interface AdChoice {
  title: string;
  description: string;
  options: string[];
}

interface Tool {
  name: string;
  description: string;
  link: string;
}

interface Platform {
  name: string;
  instruction: string;
  note: string;
}

export default function Page() {
  const t = useTranslations('adchoices');
  const adChoices = t.raw('yourAdvertisingChoices.choices') as AdChoice[];
  const tools = t.raw('industryOptOutTools.tools') as Tool[];
  const platforms = t.raw('mobileAdvertising.iosAndroid.platforms') as Platform[];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">{t('title')}</h1>

          <div className="mb-8 p-6 bg-gray-800 rounded-lg">
            <p className="text-gray-300">
              {t('intro')}
            </p>
          </div>

          {/* Ad Choices Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-red-600">{t('yourAdvertisingChoices.title')}</h2>
            <div className="space-y-8">
              {adChoices.map((choice, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">{choice.title}</h3>
                  <p className="text-gray-300 mb-4">{choice.description}</p>
                  <div className="space-y-2">
                    {choice.options.map((option, optionIndex) => (
                      <button key={optionIndex} className="block w-full text-left bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-sm transition-colors">
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Industry Tools Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-red-600">{t('industryOptOutTools.title')}</h2>
            <p className="text-gray-300 mb-6">
              {t('industryOptOutTools.description')}
            </p>
            <div className="grid md:grid-cols-1 gap-6">
              {tools.map((tool, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                  <p className="text-gray-300 mb-4">{tool.description}</p>
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white text-sm font-medium transition-colors inline-block"
                  >
                    Visit Tool
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Browser Controls Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-red-600">{t('browserBasedControls.title')}</h2>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{t('browserBasedControls.doNotTrack.title')}</h3>
              <p className="text-gray-300 mb-4">
                {t('browserBasedControls.doNotTrack.description')}
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-400">{t('browserBasedControls.doNotTrack.instructions.title')}</p>
                <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                  {(t.raw('browserBasedControls.doNotTrack.instructions.steps') as string[]).map((step: string, index: number) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Mobile Advertising Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-red-600">{t('mobileAdvertising.title')}</h2>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{t('mobileAdvertising.iosAndroid.title')}</h3>
              <p className="text-gray-300 mb-4">
                {t('mobileAdvertising.iosAndroid.description')}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {platforms.map((platform, index) => (
                  <div key={index}>
                    <h4 className="font-semibold mb-2">{platform.name}</h4>
                    <p className="text-sm text-gray-300 mb-2">{platform.instruction}</p>
                    <p className="text-sm text-gray-400">{platform.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mt-16 bg-gray-800 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">{t('contact.title')}</h2>
            <p className="text-gray-300 mb-6">
              {t('contact.description')}
            </p>
            <div className="space-x-4">
              <a href="/privacy" className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold text-white inline-block transition-colors">
                {t('contact.links.privacyPolicy')}
              </a>
              <a href="/contactus" className="border border-white px-6 py-3 rounded-lg font-semibold text-white hover:bg-white hover:text-black inline-block transition-colors">
                {t('contact.links.contactSupport')}
              </a>
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
