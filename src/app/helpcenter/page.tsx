import Header from "../components/header";
import Footer from "../components/footer";

export default function Page() {
  const helpCategories = [
    {
      title: "Getting Started",
      icon: "🚀",
      topics: [
        { title: "How to sign up for Netflix", link: "#" },
        { title: "Plans and pricing", link: "#" },
        { title: "Supported devices", link: "#" },
        { title: "Download the Netflix app", link: "#" }
      ]
    },
    {
      title: "Account & Billing",
      icon: "👤",
      topics: [
        { title: "Update payment method", link: "#" },
        { title: "Change email or password", link: "#" },
        { title: "Cancel membership", link: "#" },
        { title: "Billing history", link: "#" }
      ]
    },
    {
      title: "Watching Netflix",
      icon: "📺",
      topics: [
        { title: "Troubleshoot streaming issues", link: "#" },
        { title: "Download for offline viewing", link: "#" },
        { title: "Manage profiles", link: "#" },
        { title: "Parental controls", link: "#" }
      ]
    },
    {
      title: "Troubleshooting",
      icon: "🔧",
      topics: [
        { title: "Can't sign in", link: "#" },
        { title: "Video quality issues", link: "#" },
        { title: "Audio problems", link: "#" },
        { title: "App crashes or freezes", link: "#" }
      ]
    },
    {
      title: "Gift Cards & Payments",
      icon: "🎁",
      topics: [
        { title: "Redeem gift card", link: "/redeemgiftcards" },
        { title: "Purchase gift cards", link: "/buygiftcards" },
        { title: "Payment declined", link: "#" },
        { title: "Refund requests", link: "#" }
      ]
    },
    {
      title: "Devices & Software",
      icon: "📱",
      topics: [
        { title: "Compatible devices", link: "#" },
        { title: "Update Netflix app", link: "#" },
        { title: "Connect to TV", link: "#" },
        { title: "Browser compatibility", link: "#" }
      ]
    }
  ];

  const quickActions = [
    { title: "Reset Password", description: "Forgot your password? Reset it here.", action: "Reset Now" },
    { title: "Update Payment", description: "Change your payment method or billing info.", action: "Update Info" },
    { title: "Cancel Membership", description: "Need to cancel? We can help with that.", action: "Cancel Here" },
    { title: "Contact Support", description: "Can't find what you need? Talk to our team.", action: "Get Help" }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 py-20">
          <div className="max-w-4xl mx-auto text-center px-8">
            <h1 className="text-5xl font-bold mb-6">Help Center</h1>
            <p className="text-xl mb-8">
              Find answers, get support, and resolve issues quickly.
            </p>
            <div className="max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full px-4 py-3 rounded-lg text-black"
              />
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Quick Actions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickActions.map((action, index) => (
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
            <h2 className="text-3xl font-bold mb-12 text-center">Browse by Topic</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {helpCategories.map((category, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{category.icon}</span>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.topics.map((topic, topicIndex) => (
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
            <h2 className="text-3xl font-bold mb-12 text-center">Popular Articles</h2>
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">How to change your Netflix password</h3>
                <p className="text-gray-300 mb-4">
                  Learn how to update your password for better account security.
                </p>
                <a href="#" className="text-red-400 hover:text-red-300 text-sm font-medium">Read Article →</a>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Fix Netflix not working on your device</h3>
                <p className="text-gray-300 mb-4">
                  Common troubleshooting steps for streaming issues.
                </p>
                <a href="#" className="text-red-400 hover:text-red-300 text-sm font-medium">Read Article →</a>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Understanding Netflix plans and pricing</h3>
                <p className="text-gray-300 mb-4">
                  Compare our plans and find the right one for you.
                </p>
                <a href="#" className="text-red-400 hover:text-red-300 text-sm font-medium">Read Article →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16 px-8 bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Still Need Help?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Our support team is available 24/7 to help you with any questions or issues.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Live Chat</h3>
                <p className="text-gray-300 text-sm mb-4">Chat with our support team in real-time.</p>
                <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white font-medium transition-colors">
                  Start Chat
                </button>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Email Support</h3>
                <p className="text-gray-300 text-sm mb-4">Send us an email and we'll respond within 24 hours.</p>
                <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white font-medium transition-colors">
                  Send Email
                </button>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Phone Support</h3>
                <p className="text-gray-300 text-sm mb-4">Call us for immediate assistance.</p>
                <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white font-medium transition-colors">
                  Call Now
                </button>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              For faster service, have your account email and membership details ready.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
