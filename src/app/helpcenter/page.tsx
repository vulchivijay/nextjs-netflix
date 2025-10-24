import Header from "../components/header";
import Footer from "../components/footer";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations('helpcenter');
  const browseByTopic = t.raw('browseByTopic') as any;
  const quickActions = t.raw('quickActions') as any[];
  const popularArticles = t.raw('popularArticles') as any;
  const contactSupport = t.raw('contactSupport') as any;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 py-20">
          <div className="max-w-4xl mx-auto text-center px-8">
            <h1 className="text-5xl font-bold mb-6">{t('hero.title')}</h1>
            <p className="text-xl mb-8">
              {t('hero.subtitle')}
            </p>
            <div className="max-w-md mx-auto">
              <input
                type="text"
                placeholder={t('searchPlaceholder')}
                className="w-full px-4 py-3 rounded-lg text-black"
              />
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">{t('quickActionsTitle')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickActions.map((action: any, index: number) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
                  <h3 className="text-xl font-semibold mb-3">{action.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{action.description}</p>
                  <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white font-medium transition-colors">
                    {action.action}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="py-16 px-8 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">{browseByTopic.title}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {browseByTopic.categories.map((category: any, index: number) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{category.icon}</span>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.topics.map((topic: any, topicIndex: number) => (
                      <li key={topicIndex}>
                        <a
                          href={topic.link}
                          className="text-gray-300 hover:text-white text-sm block py-1 transition-colors"
                        >
                          {topic.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-16 px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">{popularArticles.title}</h2>
            <div className="space-y-6">
              {popularArticles.articles.map((article: any, index: number) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                  <p className="text-gray-300 mb-4">
                    {article.description}
                  </p>
                  <a href="#" className="text-red-400 hover:text-red-300 text-sm font-medium">{article.link}</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16 px-8 bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{contactSupport.title}</h2>
            <p className="text-xl text-gray-300 mb-8">
              {contactSupport.subtitle}
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {contactSupport.supportOptions.map((option: any, index: number) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">{option.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{option.description}</p>
                  <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white font-medium transition-colors">
                    {option.action}
                  </button>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              {contactSupport.footer}
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
