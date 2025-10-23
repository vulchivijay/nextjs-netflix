import Header from "../components/header";
import Footer from "../components/footer";

export default function Page() {
  const originals = [
    {
      title: "Stranger Things",
      genre: "Sci-Fi & Horror",
      description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
      image: "🎬"
    },
    {
      title: "The Crown",
      genre: "Historical Drama",
      description: "Follow the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
      image: "👑"
    },
    {
      title: "Money Heist",
      genre: "Crime Thriller",
      description: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
      image: "💰"
    },
    {
      title: "Black Mirror",
      genre: "Sci-Fi Anthology",
      description: "An anthology series exploring a twisted, high-tech world where humanity's greatest innovations and darkest instincts collide.",
      image: "🖥️"
    },
    {
      title: "The Witcher",
      genre: "Fantasy Action",
      description: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
      image: "⚔️"
    },
    {
      title: "Bridgerton",
      genre: "Period Romance",
      description: "The story of Daphne Bridgerton, the eldest daughter of the powerful Bridgerton family, as she makes her debut onto Regency London's competitive marriage market.",
      image: "💃"
    }
  ];

  const upcoming = [
    {
      title: "One Piece",
      release: "2023",
      description: "Follow Monkey D. Luffy and his Straw Hat Pirates as they explore the Grand Line in search of the legendary treasure One Piece."
    },
    {
      title: "Avatar: The Last Airbender",
      release: "2024",
      description: "In a war-torn world of elemental magic, a young boy reawakens to undertake a dangerous quest to master all four elements and restore balance to the world."
    },
    {
      title: "The Three-Body Problem",
      release: "2024",
      description: "A secret military group recruits scientists to solve a bizarre puzzle only they can decipher, leading to a confrontation with an extraterrestrial civilization."
    }
  ];

  const genres = [
    { name: "Action & Adventure", count: "500+ titles", icon: "🏃" },
    { name: "Comedies", count: "400+ titles", icon: "😂" },
    { name: "Dramas", count: "600+ titles", icon: "🎭" },
    { name: "Documentaries", count: "300+ titles", icon: "📹" },
    { name: "Horror", count: "200+ titles", icon: "👻" },
    { name: "Romance", count: "350+ titles", icon: "💕" },
    { name: "Sci-Fi", count: "250+ titles", icon: "🚀" },
    { name: "Thrillers", count: "450+ titles", icon: "🔪" }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 py-20">
          <div className="max-w-6xl mx-auto text-center px-8">
            <h1 className="text-5xl font-bold mb-6">Only on Netflix</h1>
            <p className="text-xl mb-8">
              Discover exclusive Netflix Originals, from blockbuster movies to binge-worthy series that you can't find anywhere else.
            </p>
          </div>
        </section>

        {/* Featured Originals */}
        <section className="py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Netflix Originals</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {originals.map((show, index) => (
                <div key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors">
                  <div className="aspect-video bg-gray-700 flex items-center justify-center text-6xl">
                    {show.image}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{show.title}</h3>
                    <p className="text-red-400 text-sm font-medium mb-3">{show.genre}</p>
                    <p className="text-gray-300 text-sm">{show.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Releases */}
        <section className="py-16 px-8 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Coming Soon</h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {upcoming.map((show, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{show.title}</h3>
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {show.release}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">{show.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Original Genres */}
        <section className="py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Explore Netflix Original Genres</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {genres.map((genre, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors">
                  <div className="text-5xl mb-4">{genre.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{genre.name}</h3>
                  <p className="text-red-400 text-sm font-medium">{genre.count}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Netflix Originals */}
        <section className="py-16 px-8 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Netflix Originals?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-5xl mb-4">🎬</div>
                <h3 className="text-xl font-semibold mb-3">Exclusive Content</h3>
                <p className="text-gray-300">
                  Stories and series you can only find on Netflix, created specifically for our platform.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-5xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold mb-3">Global Stories</h3>
                <p className="text-gray-300">
                  Diverse narratives from creators around the world, bringing unique perspectives to life.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-3">Binge-Worthy</h3>
                <p className="text-gray-300">
                  Multiple episodes released at once, perfect for marathon viewing sessions.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-5xl mb-4">🎭</div>
                <h3 className="text-xl font-semibold mb-3">Bold & Creative</h3>
                <p className="text-gray-300">
                  Innovative storytelling that pushes boundaries and challenges conventions.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-5xl mb-4">⭐</div>
                <h3 className="text-xl font-semibold mb-3">Award-Winning</h3>
                <p className="text-gray-300">
                  Critically acclaimed content that has won numerous awards and recognitions.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-5xl mb-4">📱</div>
                <h3 className="text-xl font-semibold mb-3">Anytime, Anywhere</h3>
                <p className="text-gray-300">
                  Watch on any device, download for offline viewing, and pick up where you left off.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-8 bg-red-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Start Your Netflix Journey</h2>
            <p className="text-xl mb-8">
              Join millions of members enjoying exclusive Netflix Originals and unlimited entertainment.
            </p>
            <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors">
              Join Netflix
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
