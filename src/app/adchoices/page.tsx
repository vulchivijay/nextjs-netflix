import Header from "../components/header";
import Footer from "../components/footer";

export default function Page() {
  const adChoices = [
    {
      title: "Interest-Based Advertising",
      description: "We use information about your Netflix viewing history and interactions to show you relevant ads.",
      options: [
        "Opt out of interest-based advertising",
        "Manage your ad preferences",
        "Learn more about how ads work"
      ]
    },
    {
      title: "Cross-Device Advertising",
      description: "We may show you ads across different devices based on your Netflix activity.",
      options: [
        "Opt out of cross-device advertising",
        "Control device linking",
        "View connected devices"
      ]
    },
    {
      title: "Third-Party Advertising",
      description: "We work with advertising partners to deliver relevant ads across the web.",
      options: [
        "Opt out of third-party advertising",
        "Manage partner relationships",
        "View privacy choices"
      ]
    }
  ];

  const tools = [
    {
      name: "Digital Advertising Alliance",
      description: "Opt out of interest-based ads from participating companies.",
      link: "http://optout.aboutads.info/"
    },
    {
      name: "Network Advertising Initiative",
      description: "Manage advertising preferences from NAI member companies.",
      link: "http://optout.networkadvertising.org/"
    },
    {
      name: "Your Online Choices",
      description: "European tool for managing online behavioral advertising.",
      link: "http://www.youronlinechoices.com/"
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Ad Choices</h1>

          <div className="mb-8 p-6 bg-gray-800 rounded-lg">
            <p className="text-gray-300">
              At Netflix, we want to provide you with control over your advertising experience. This page explains your choices regarding interest-based advertising and how to manage your preferences.
            </p>
          </div>

          {/* Ad Choices Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-red-600">Your Advertising Choices</h2>
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
            <h2 className="text-3xl font-semibold mb-6 text-red-600">Industry Opt-Out Tools</h2>
            <p className="text-gray-300 mb-6">
              You can also use these industry-standard tools to manage your advertising preferences across multiple companies:
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
            <h2 className="text-3xl font-semibold mb-6 text-red-600">Browser-Based Controls</h2>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Do Not Track</h3>
              <p className="text-gray-300 mb-4">
                Some browsers offer a "Do Not Track" feature that lets you tell websites you don't want your online activity tracked. Netflix currently does not respond to "Do Not Track" signals.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-400">To enable Do Not Track in your browser:</p>
                <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                  <li>Chrome: Settings → Privacy and security → Send a "Do Not Track" request</li>
                  <li>Firefox: Settings → Privacy & Security → Send websites a "Do Not Track" signal</li>
                  <li>Safari: Preferences → Privacy → Send Do Not Track requests</li>
                  <li>Edge: Settings → Cookies and site permissions → Send "Do Not Track" requests</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Mobile Advertising Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-red-600">Mobile Advertising</h2>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">iOS and Android</h3>
              <p className="text-gray-300 mb-4">
                You can limit ad tracking on your mobile device through your device settings:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">iOS Devices</h4>
                  <p className="text-sm text-gray-300 mb-2">Settings → Privacy → Tracking → Allow Apps to Request to Track</p>
                  <p className="text-sm text-gray-400">Turn off to limit app tracking.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Android Devices</h4>
                  <p className="text-sm text-gray-300 mb-2">Settings → Google → Ads → Opt out of Ads Personalization</p>
                  <p className="text-sm text-gray-400">Opt out to limit personalized ads.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mt-16 bg-gray-800 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Questions About Your Choices?</h2>
            <p className="text-gray-300 mb-6">
              If you have questions about your advertising choices or need assistance managing your preferences, please contact us.
            </p>
            <div className="space-x-4">
              <a href="/privacy" className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold text-white inline-block transition-colors">
                View Privacy Policy
              </a>
              <a href="/contactus" className="border border-white px-6 py-3 rounded-lg font-semibold text-white hover:bg-white hover:text-black inline-block transition-colors">
                Contact Support
              </a>
            </div>
          </section>

          <section className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Your choices may take up to 30 days to take effect. Some advertising may still appear based on contextual information.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
