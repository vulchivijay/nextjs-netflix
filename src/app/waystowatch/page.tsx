import Header from "../components/header";
import Footer from "../components/footer";

export default function Page() {
  const devices = [
    {
      name: "Smart TVs",
      icon: "📺",
      description: "Samsung, LG, Sony, and more",
      popular: ["Samsung Smart TV", "LG Smart TV", "Sony Android TV", "Vizio Smart TV"]
    },
    {
      name: "Game Consoles",
      icon: "🎮",
      description: "PlayStation, Xbox, and Nintendo",
      popular: ["PlayStation 4", "PlayStation 5", "Xbox One", "Xbox Series X/S", "Nintendo Switch"]
    },
    {
      name: "Mobile Devices",
      icon: "📱",
      description: "Phones and tablets",
      popular: ["iPhone", "Android Phone", "iPad", "Android Tablet"]
    },
    {
      name: "Streaming Devices",
      icon: "📺",
      description: "Dedicated streaming boxes",
      popular: ["Roku", "Amazon Fire TV", "Apple TV", "Chromecast", "Android TV"]
    },
    {
      name: "Computers",
      icon: "💻",
      description: "Laptops and desktops",
      popular: ["Windows PC", "Mac", "Chromebook"]
    },
    {
      name: "Blu-ray Players",
      icon: "💿",
      description: "Blu-ray and DVD players",
      popular: ["Samsung Blu-ray", "LG Blu-ray", "Sony Blu-ray"]
    }
  ];

  const platforms = [
    {
      name: "Web Browsers",
      description: "Watch on any device with a web browser",
      features: ["HD and Ultra HD support", "Multiple profiles", "Download for offline viewing"]
    },
    {
      name: "Mobile Apps",
      description: "Download the Netflix app for iOS and Android",
      features: ["Offline downloads", "Smart recommendations", "Parental controls"]
    },
    {
      name: "Smart TV Apps",
      description: "Built-in Netflix apps on smart TVs",
      features: ["4K Ultra HD", "HDR support", "Voice control"]
    },
    {
      name: "Gaming Consoles",
      description: "Netflix on PlayStation, Xbox, and Nintendo",
      features: ["High-quality streaming", "Easy navigation", "Resume playback"]
    }
  ];

  const viewingOptions = [
    {
      title: "HD Streaming",
      description: "Watch in high definition on supported devices",
      icon: "🎬"
    },
    {
      title: "Ultra HD 4K",
      description: "Experience stunning 4K resolution on compatible TVs",
      icon: "🌟"
    },
    {
      title: "HDR",
      description: "Enhanced colors and contrast with HDR technology",
      icon: "✨"
    },
    {
      title: "Offline Downloads",
      description: "Download shows and movies to watch without internet",
      icon: "📥"
    },
    {
      title: "Multiple Profiles",
      description: "Create up to 5 profiles for personalized recommendations",
      icon: "👥"
    },
    {
      title: "Parental Controls",
      description: "Set restrictions and monitor viewing activity",
      icon: "🔒"
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 py-20">
          <div className="max-w-6xl mx-auto text-center px-8">
            <h1 className="text-5xl font-bold mb-6">Ways to Watch</h1>
            <p className="text-xl mb-8">
              Enjoy Netflix on any device, anywhere, anytime. Choose from hundreds of supported devices and platforms.
            </p>
          </div>
        </section>

        {/* Supported Devices */}
        <section className="py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Supported Devices</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {devices.map((device, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{device.icon}</span>
                    <h3 className="text-xl font-semibold">{device.name}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{device.description}</p>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-400">Popular options:</p>
                    {device.popular.map((item, itemIndex) => (
                      <p key={itemIndex} className="text-sm text-gray-300">• {item}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section className="py-16 px-8 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Available Platforms</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">{platform.name}</h3>
                  <p className="text-gray-300 mb-4">{platform.description}</p>
                  <ul className="space-y-2">
                    {platform.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <span className="text-red-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Viewing Options */}
        <section className="py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Viewing Options</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {viewingOptions.map((option, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
                  <div className="text-5xl mb-4">{option.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{option.title}</h3>
                  <p className="text-gray-300">{option.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="py-16 px-8 bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Getting Started is Easy</h2>
            <p className="text-xl text-gray-300 mb-8">
              Follow these simple steps to start watching Netflix on your favorite device.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="text-4xl mb-4">1️⃣</div>
                <h3 className="text-lg font-semibold mb-3">Sign Up</h3>
                <p className="text-gray-300 text-sm">
                  Create your Netflix account or sign in to an existing one.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="text-4xl mb-4">2️⃣</div>
                <h3 className="text-lg font-semibold mb-3">Choose Your Plan</h3>
                <p className="text-gray-300 text-sm">
                  Select the plan that best fits your viewing needs.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="text-4xl mb-4">3️⃣</div>
                <h3 className="text-lg font-semibold mb-3">Start Watching</h3>
                <p className="text-gray-300 text-sm">
                  Download the app or visit netflix.com and enjoy unlimited entertainment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Can I watch Netflix on multiple devices?</h3>
                <p className="text-gray-300">
                  Yes! Depending on your plan, you can watch on 1-4 devices simultaneously. You can also download content for offline viewing on up to 100 devices.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Do I need a smart TV to watch Netflix?</h3>
                <p className="text-gray-300">
                  No, you don't need a smart TV. You can watch on any device with the Netflix app or through a web browser, including gaming consoles, streaming devices, and computers.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">What's the difference between HD and Ultra HD?</h3>
                <p className="text-gray-300">
                  HD (High Definition) offers 1080p resolution, while Ultra HD (4K) provides 2160p resolution for sharper, more detailed picture quality. Ultra HD requires compatible devices and a Premium plan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-8 bg-red-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Watching?</h2>
            <p className="text-xl mb-8">
              Join millions of Netflix members enjoying unlimited entertainment on their favorite devices.
            </p>
            <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors">
              Get Started
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
