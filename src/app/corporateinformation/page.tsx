import Header from "../components/header";
import Footer from "../components/footer";
import { useTranslations } from "next-intl";

interface Leader {
  name: string;
  title: string;
  bio: string;
}

interface Value {
  title: string;
  description: string;
  icon: string;
}

interface Milestone {
  year: string;
  event: string;
}

interface Contact {
  title: string;
  email: string;
}

export default function Page() {
  const t = useTranslations('corporateinformation');
  const stats = t.raw('companyOverview.stats');
  const leadership = t.raw('leadership.team') as Leader[];
  const values = t.raw('values.list') as Value[];
  const milestones = t.raw('history.milestones') as Milestone[];
  const commitmentItems = t.raw('diversity.commitment.items') as string[];
  const contentItems = t.raw('diversity.content.items') as string[];
  const contacts = t.raw('contact.contacts') as Contact[];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 py-20">
          <div className="max-w-6xl mx-auto text-center px-8">
            <h1 className="text-5xl font-bold mb-6">{t('hero.title')}</h1>
            <p className="text-xl mb-8">
              {t('hero.description')}
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">{t('companyOverview.title')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold mb-2">{stats.founded.label}</h3>
                <p className="text-2xl font-bold text-red-500">{stats.founded.value}</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold mb-2">{stats.headquarters.label}</h3>
                <p className="text-lg font-medium">{stats.headquarters.value}</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold mb-2">{stats.employees.label}</h3>
                <p className="text-2xl font-bold text-red-500">{stats.employees.value}</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold mb-2">{stats.offices.label}</h3>
                <p className="text-lg font-medium">{stats.offices.value}</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold mb-2">{stats.content.label}</h3>
                <p className="text-lg font-medium">{stats.content.value}</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold mb-2">{stats.mission.label}</h3>
                <p className="text-sm">{stats.mission.value}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 px-8 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">{t('leadership.title')}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {leadership.map((leader, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{leader.name}</h3>
                  <p className="text-red-400 font-medium mb-4">{leader.title}</p>
                  <p className="text-gray-300 text-sm">{leader.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">{t('values.title')}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company History */}
        <section className="py-16 px-8 bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">{t('history.title')}</h2>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold mr-6 min-w-[80px] text-center">
                    {milestone.year}
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg flex-1">
                    <p className="text-gray-300">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diversity & Inclusion */}
        <section className="py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">{t('diversity.title')}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{t('diversity.commitment.title')}</h3>
                <p className="text-gray-300 mb-4">
                  {t('diversity.commitment.description')}
                </p>
                <ul className="space-y-2 text-gray-300">
                  {commitmentItems.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{t('diversity.content.title')}</h3>
                <p className="text-gray-300 mb-4">
                  {t('diversity.content.description')}
                </p>
                <ul className="space-y-2 text-gray-300">
                  {contentItems.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-8 bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{t('contact.title')}</h2>
            <p className="text-xl text-gray-300 mb-8">
              {t('contact.description')}
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {contacts.map((contact, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">{contact.title}</h3>
                  <p className="text-gray-300 text-sm">{contact.email}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
