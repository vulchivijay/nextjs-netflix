import Header from "../components/header";
import Footer from "../components/footer";

export default function Page() {
  const companyInfo = {
    founded: "1997",
    headquarters: "Los Gatos, California, USA",
    employees: "12,800+",
    offices: "Offices in 27 countries",
    content: "Over 17,000 titles in 40+ languages"
  };

  const leadership = [
    {
      name: "Reed Hastings",
      title: "Co-Founder & Co-CEO",
      bio: "Reed Hastings co-founded Netflix in 1997 and has served as CEO since 1998. He previously founded Pure Software, which was acquired by Rational Software in 1997."
    },
    {
      name: "Ted Sarandos",
      title: "Co-CEO & Chief Content Officer",
      bio: "Ted Sarandos oversees Netflix's content strategy and global operations. He joined Netflix in 2000 and has been instrumental in building Netflix's original content library."
    },
    {
      name: "Greg Peters",
      title: "Chief Operating Officer",
      bio: "Greg Peters oversees Netflix's product, engineering, marketing, communications, and other operational functions. He joined Netflix in 2011."
    },
    {
      name: "Spencer Neumann",
      title: "Chief Financial Officer",
      bio: "Spencer Neumann oversees Netflix's financial operations and strategy. He joined Netflix in 2010 and has held various leadership roles in finance and product."
    }
  ];

  const values = [
    {
      title: "Judgment",
      description: "We make wise decisions despite ambiguity.",
      icon: "🧠"
    },
    {
      title: "Communication",
      description: "We are honest, respectful, and collaborative.",
      icon: "💬"
    },
    {
      title: "Impact",
      description: "We focus on results that matter.",
      icon: "🎯"
    },
    {
      title: "Curiosity",
      description: "We learn rapidly and eagerly.",
      icon: "🔍"
    },
    {
      title: "Courage",
      description: "We take risks and challenge the status quo.",
      icon: "🦁"
    },
    {
      title: "Passion",
      description: "We love our work and care deeply about our members.",
      icon: "❤️"
    },
    {
      title: "Selflessness",
      description: "We value others' success as much as our own.",
      icon: "🤝"
    },
    {
      title: "Innovation",
      description: "We reimagine entertainment for the future.",
      icon: "💡"
    },
    {
      title: "Inclusion",
      description: "We embrace diverse perspectives and experiences.",
      icon: "🌍"
    }
  ];

  const milestones = [
    { year: "1997", event: "Netflix founded by Reed Hastings and Marc Randolph" },
    { year: "1999", event: "IPO on NASDAQ (NFLX)" },
    { year: "2007", event: "Streaming service launched" },
    { year: "2010", event: "International expansion begins" },
    { year: "2013", event: "First original series produced (House of Cards)" },
    { year: "2016", event: "Global subscriber base reaches 100 million" },
    { year: "2020", event: "Content production ramps up during pandemic" },
    { year: "2022", event: "Gaming service launched" }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 py-20">
          <div className="max-w-6xl mx-auto text-center px-8">
            <h1 className="text-5xl font-bold mb-6">Corporate Information</h1>
            <p className="text-xl mb-8">
              Learn about Netflix's mission, leadership, values, and journey from DVD rental service to global streaming leader.
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Company Overview</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold mb-2">Founded</h3>
                <p className="text-2xl font-bold text-red-500">{companyInfo.founded}</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold mb-2">Headquarters</h3>
                <p className="text-lg font-medium">{companyInfo.headquarters}</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold mb-2">Employees</h3>
                <p className="text-2xl font-bold text-red-500">{companyInfo.employees}</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold mb-2">Global Offices</h3>
                <p className="text-lg font-medium">{companyInfo.offices}</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold mb-2">Content Library</h3>
                <p className="text-lg font-medium">{companyInfo.content}</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold mb-2">Mission</h3>
                <p className="text-sm">Entertaining the world</p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 px-8 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Leadership Team</h2>
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
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
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
            <h2 className="text-3xl font-bold mb-12 text-center">Company History</h2>
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
            <h2 className="text-3xl font-bold mb-12 text-center">Diversity & Inclusion</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Our Commitment</h3>
                <p className="text-gray-300 mb-4">
                  At Netflix, we believe that diverse perspectives make us stronger. We're committed to fostering an inclusive workplace where everyone can thrive.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Employee Resource Groups</li>
                  <li>• Inclusive hiring practices</li>
                  <li>• Diversity training programs</li>
                  <li>• Equal opportunity policies</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Content Diversity</h3>
                <p className="text-gray-300 mb-4">
                  We strive to tell stories from around the world, featuring diverse voices and perspectives in our original content.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Global storytelling</li>
                  <li>• Local language content</li>
                  <li>• Cultural representation</li>
                  <li>• Inclusive narratives</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-8 bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <p className="text-xl text-gray-300 mb-8">
              Have questions about Netflix? We'd love to hear from you.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Media Inquiries</h3>
                <p className="text-gray-300 text-sm">press@netflix.com</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Investor Relations</h3>
                <p className="text-gray-300 text-sm">investor.relations@netflix.com</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">General Inquiries</h3>
                <p className="text-gray-300 text-sm">info@netflix.com</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
