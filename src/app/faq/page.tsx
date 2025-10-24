import Header from "../components/header";
import Footer from "../components/footer";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations('faq');
  const categories = t.raw('categories') as any[];
  const helpSection = t.raw('helpSection') as any;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">{t('title')}</h1>

          <div className="mb-8">
            <p className="text-gray-300 text-center text-lg">
              {t('subtitle')}
            </p>
          </div>

          {categories.map((category, categoryIndex) => (
            <section key={categoryIndex} className="mb-12">
              <h2 className="text-3xl font-semibold mb-6 text-red-600">{category.title}</h2>
              <div className="space-y-6">
                {category.questions.map((item, questionIndex) => (
                  <div key={questionIndex} className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-medium mb-3 text-white">{item.q}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}

          <section className="mt-16 bg-gray-800 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">{helpSection.title}</h2>
            <p className="text-gray-300 mb-6">
              {helpSection.description}
            </p>
            <div className="space-x-4">
              <a href="/helpcenter" className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold text-white inline-block transition-colors">
                {helpSection.helpCenterButton}
              </a>
              <a href="/contactus" className="border border-white px-6 py-3 rounded-lg font-semibold text-white hover:bg-white hover:text-black inline-block transition-colors">
                {helpSection.contactButton}
              </a>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
