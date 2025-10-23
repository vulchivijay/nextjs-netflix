import Header from "../components/header";
import Footer from "../components/footer";

export default function Page() {
  const pressReleases = [
    {
      title: "Netflix Reports Q4 2024 Earnings",
      date: "January 15, 2025",
      summary: "Netflix announces record subscriber growth and strong financial performance for Q4 2024.",
      link: "#"
    },
    {
      title: "Netflix Original 'Stranger Things' Season 5 Premieres",
      date: "January 10, 2025",
      summary: "The highly anticipated final season of Stranger Things is now streaming worldwide.",
      link: "#"
    },
    {
      title: "Netflix Expands Content Partnership with Major Studios",
      date: "December 20, 2024",
      summary: "Netflix announces multi-year agreements to bring exclusive content from leading production companies.",
      link: "#"
    },
    {
      title: "Netflix Launches New Interactive Content Format",
      date: "December 15, 2024",
      summary: "Introducing 'Choose Your Own Adventure' style storytelling for select Netflix originals.",
      link: "#"
    }
  ];

  const images = [
    { src: "/placeholder-image1.jpg", alt: "Netflix Original Series", caption: "Behind the scenes of our latest series" },
    { src: "/placeholder-image2.jpg", alt: "Award Ceremony", caption: "Netflix at the Emmys 2024" },
    { src: "/placeholder-image3.jpg", alt: "Global Event", caption: "Netflix Tudum event highlights" },
    { src: "/placeholder-image4.jpg", alt: "Content Creation", caption: "Our production teams at work" }
  ];

  const stats = [
    { number: "270M+", label: "Global Members" },
    { number: "190+", label: "Countries" },
    { number: "15,000+", label: "Titles in Our Catalog" },
    { number: "1,000+", label: "Hours of Original Content" }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 py-20">
          <div className="max-w-4xl mx-auto text-center px-8">
            <h1 className="text-5xl font-bold mb-6">Netflix Media Center</h1>
            <p className="text-xl mb-8">
              Your source for Netflix news, press releases, images, and company information.
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
            <h2 className="text-3xl font-bold mb-12 text-center">Latest Press Releases</h2>
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
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <button className="border border-white px-8 py-3 rounded-lg font-semibold text-white hover:bg-white hover:text-black transition-colors">
                View All Press Releases
              </button>
            </div>
          </div>
        </section>

        {/* Images Section */}
        <section className="py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Press Images</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {images.map((image, index) => (
                <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-700 flex items-center justify-center">
                    <span className="text-gray-400">Image Placeholder</span>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-300 mb-2">{image.caption}</p>
                    <button className="text-red-400 hover:text-red-300 text-sm font-medium">
                      Download High-Res
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <button className="border border-white px-8 py-3 rounded-lg font-semibold text-white hover:bg-white hover:text-black transition-colors">
                View Image Gallery
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-8 bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Media Inquiries</h2>
            <p className="text-xl text-gray-300 mb-8">
              For press inquiries, please contact our media relations team.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Press Contacts</h3>
                <div className="space-y-2 text-left">
                  <p className="text-gray-300">
                    <strong>General Inquiries:</strong> press@netflix.com
                  </p>
                  <p className="text-gray-300">
                    <strong>Phone:</strong> 1-408-540-3700
                  </p>
                  <p className="text-gray-300">
                    <strong>Address:</strong> 100 Winchester Circle, Los Gatos, CA 95032
                  </p>
                </div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Social Media</h3>
                <p className="text-gray-300 mb-4">
                  Follow Netflix for the latest news and updates:
                </p>
                <div className="flex space-x-4 justify-center">
                  <a href="#" className="text-red-500 hover:text-red-400">Twitter</a>
                  <a href="#" className="text-red-500 hover:text-red-400">Facebook</a>
                  <a href="#" className="text-red-500 hover:text-red-400">Instagram</a>
                </div>
              </div>
            </div>
            <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
              Contact Press Team
            </button>
          </div>
        </section>
      </div >
      <Footer />
    </>
  );
}
