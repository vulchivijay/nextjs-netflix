import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations('mediacenter');
  const pressReleases = t.raw('pressReleases') as any[];
  const images = t.raw('images') as any[];
  const stats = t.raw('stats') as any[];

  return (
    <>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 py-20">
          <div className="max-w-4xl mx-auto text-center px-8">
            <h1 className="text-5xl font-bold mb-6">{t('hero.title')}</h1>
            <p className="text-xl mb-8">
              {t('hero.description')}
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Press Releases Section */}
        <section className="py-16 px-8 bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">{t('sections.pressReleases.title')}</h2>
            <div className="space-y-8">
              {pressReleases.map((release, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{release.title}</h3>
                      <p className="text-gray-400 text-sm mb-2">{release.date}</p>
                      <p className="text-gray-300">{release.summary}</p>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded text-white font-medium transition-colors">
                        {t('sections.pressReleases.readMore')}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <button className="border border-white px-8 py-3 rounded-lg font-semibold text-white hover:bg-white hover:text-black transition-colors">
                {t('sections.pressReleases.viewAll')}
              </button>
            </div>
          </div>
        </section>

        {/* Images Section */}
        <section className="py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">{t('sections.images.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {images.map((image, index) => (
                <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-700 flex items-center justify-center">
                    <span className="text-gray-400">Image Placeholder</span>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-300 mb-2">{image.caption}</p>
                    <button className="text-red-400 hover:text-red-300 text-sm font-medium">
                      {t('sections.images.download')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <button className="border border-white px-8 py-3 rounded-lg font-semibold text-white hover:bg-white hover:text-black transition-colors">
                {t('sections.images.viewGallery')}
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-8 bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{t('sections.contact.title')}</h2>
            <p className="text-xl text-gray-300 mb-8">
              {t('sections.contact.description')}
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{t('sections.contact.pressContacts.title')}</h3>
                <div className="space-y-2 text-left">
                  <p className="text-gray-300">
                    <strong>{t('sections.contact.pressContacts.generalInquiries')}:</strong> {t('sections.contact.pressContacts.email')}
                  </p>
                  <p className="text-gray-300">
                    <strong>{t('sections.contact.pressContacts.phoneLabel')}:</strong> {t('sections.contact.pressContacts.phone')}
                  </p>
                  <p className="text-gray-300">
                    <strong>{t('sections.contact.pressContacts.addressLabel')}:</strong> {t('sections.contact.pressContacts.address')}
                  </p>
                </div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{t('sections.contact.socialMedia.title')}</h3>
                <p className="text-gray-300 mb-4">
                  {t('sections.contact.socialMedia.description')}
                </p>
                <div className="flex space-x-4 justify-center">
                  <a href="#" className="text-red-500 hover:text-red-400">{t('sections.contact.socialMedia.twitter')}</a>
                  <a href="#" className="text-red-500 hover:text-red-400">{t('sections.contact.socialMedia.facebook')}</a>
                  <a href="#" className="text-red-500 hover:text-red-400">{t('sections.contact.socialMedia.instagram')}</a>
                </div>
              </div>
            </div>
            <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
              {t('sections.contact.contactButton')}
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
