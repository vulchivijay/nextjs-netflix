export default function Page() {
  const locations = [
    {
      city: "Los Angeles",
      country: "USA",
      description: "Our headquarters and creative hub in Hollywood.",
      image: "🏙️",
      features: ["Content Production", "Technology Innovation", "Global Operations"]
    },
    {
      city: "Amsterdam",
      country: "Netherlands",
      description: "European content creation and localization center.",
      image: "🌷",
      features: ["European Originals", "Content Localization", "Marketing Hub"]
    },
    {
      city: "London",
      country: "UK",
      description: "British and international content production studio.",
      image: "🏰",
      features: ["UK Productions", "International Co-productions", "Talent Development"]
    },
    {
      city: "Mexico City",
      country: "Mexico",
      description: "Latin American content creation powerhouse.",
      image: "🌮",
      features: ["Latin American Originals", "Spanish Content", "Regional Operations"]
    },
    {
      city: "Seoul",
      country: "South Korea",
      description: "Asian content innovation and production center.",
      image: "🏯",
      features: ["Korean Originals", "Asian Content", "Gaming Development"]
    },
    {
      city: "Tokyo",
      country: "Japan",
      description: "Anime and Japanese content production studio.",
      image: "🗼",
      features: ["Anime Productions", "Japanese Content", "Manga Adaptations"]
    }
  ];

  const initiatives = [
    {
      title: "Content Creation",
      description: "Supporting local creators and telling authentic stories from diverse cultures around the world.",
      icon: "🎬",
      impact: "Over 1,000 original productions worldwide"
    },
    {
      title: "Talent Development",
      description: "Investing in emerging filmmakers, writers, and creators through mentorship and training programs.",
      icon: "🎭",
      impact: "100+ creators supported annually"
    },
    {
      title: "Cultural Preservation",
      description: "Documenting and celebrating cultural heritage through documentaries and storytelling.",
      icon: "📚",
      impact: "50+ cultural preservation projects"
    },
    {
      title: "Innovation Labs",
      description: "Exploring new technologies and formats for storytelling, from interactive content to virtual reality.",
      icon: "🔬",
      impact: "20+ experimental projects launched"
    }
  ];

  const stats = [
    { number: "27", label: "Countries with Netflix offices", icon: "🌍" },
    { number: "12,800+", label: "Employees worldwide", icon: "👥" },
    { number: "40+", label: "Languages for content", icon: "🗣️" },
    { number: "190+", label: "Countries where Netflix is available", icon: "📺" }
  ];

  return (
    <>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 py-20">
          <div className="max-w-6xl mx-auto text-center px-8">
            <h1 className="text-5xl font-bold mb-6">Netflix Around the World</h1>
            <p className="text-xl mb-8">
              Discover how Netflix operates globally, supporting local creators and bringing diverse stories to audiences everywhere.
            </p>
          </div>
        </section>

        {/* Global Stats */}
        <section className="py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Netflix by the Numbers</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
                  <div className="text-5xl mb-4">{stat.icon}</div>
                  <div className="text-4xl font-bold text-red-500 mb-2">{stat.number}</div>
                  <p className="text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Locations */}
        <section className="py-16 px-8 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Global Locations</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locations.map((location, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{location.image}</span>
                    <div>
                      <h3 className="text-xl font-semibold">{location.city}</h3>
                      <p className="text-red-400 text-sm">{location.country}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{location.description}</p>
                  <div className="space-y-1">
                    {location.features.map((feature, featureIndex) => (
                      <p key={featureIndex} className="text-sm text-gray-400">• {feature}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Initiatives */}
        <section className="py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Global Initiatives</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {initiatives.map((initiative, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{initiative.icon}</span>
                    <h3 className="text-xl font-semibold">{initiative.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{initiative.description}</p>
                  <p className="text-red-400 font-medium">{initiative.impact}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cultural Impact */}
        <section className="py-16 px-8 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Cultural Impact</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-5xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold mb-3">Global Storytelling</h3>
                <p className="text-gray-300">
                  Amplifying voices from every corner of the world, bringing diverse perspectives to global audiences.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-5xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold mb-3">Creative Freedom</h3>
                <p className="text-gray-300">
                  Supporting creators with the freedom to tell bold, authentic stories without traditional constraints.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-3">Local Partnerships</h3>
                <p className="text-gray-300">
                  Collaborating with local talent, production companies, and cultural institutions worldwide.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-5xl mb-4">📈</div>
                <h3 className="text-xl font-semibold mb-3">Industry Growth</h3>
                <p className="text-gray-300">
                  Contributing to the growth of creative industries and job creation in entertainment sectors globally.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-5xl mb-4">🎓</div>
                <h3 className="text-xl font-semibold mb-3">Education & Training</h3>
                <p className="text-gray-300">
                  Providing training programs and educational opportunities for aspiring filmmakers and creators.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-5xl mb-4">💡</div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-gray-300">
                  Pioneering new formats and technologies that push the boundaries of storytelling and viewer engagement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Our Team */}
        <section className="py-16 px-8 bg-red-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Global Team</h2>
            <p className="text-xl mb-8">
              Be part of a worldwide community of creators, innovators, and storytellers shaping the future of entertainment.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-black bg-opacity-20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Content Creation</h3>
                <p className="text-gray-200">
                  Work with talented creators from around the world to develop compelling stories and experiences.
                </p>
              </div>
              <div className="bg-black bg-opacity-20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Technology & Innovation</h3>
                <p className="text-gray-200">
                  Build the next generation of entertainment technology and streaming experiences.
                </p>
              </div>
            </div>
            <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors">
              View Open Positions
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
