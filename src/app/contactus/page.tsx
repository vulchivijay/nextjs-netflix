import Header from "../components/header";
import Footer from "../components/footer";

export default function Page() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-300 mb-6">
              We're here to help! Whether you have questions about your account, need technical support, or want to share feedback, our team is ready to assist you.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Customer Support</h3>
              <p className="text-gray-300 mb-4">
                For help with your account, billing, or technical issues:
              </p>
              <div className="space-y-2">
                <p className="text-gray-300">
                  <strong>Phone:</strong> 1-866-579-7172
                </p>
                <p className="text-gray-300">
                  <strong>Hours:</strong> 24/7
                </p>
                <p className="text-gray-300">
                  <strong>Email:</strong> support@netflix.com
                </p>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Business Inquiries</h3>
              <p className="text-gray-300 mb-4">
                For partnership opportunities, press inquiries, or business-related questions:
              </p>
              <div className="space-y-2">
                <p className="text-gray-300">
                  <strong>Email:</strong> business@netflix.com
                </p>
                <p className="text-gray-300">
                  <strong>Phone:</strong> 1-408-540-3700
                </p>
              </div>
            </div>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Mailing Address</h2>
            <address className="text-gray-300 not-italic bg-gray-800 p-6 rounded-lg">
              Netflix, Inc.<br />
              Attn: Customer Service<br />
              100 Winchester Circle<br />
              Los Gatos, CA 95032<br />
              United States
            </address>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">International Offices</h2>
            <p className="text-gray-300 mb-4">
              Netflix operates in many countries around the world. For region-specific support, please visit our Help Center and select your location.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Social Media</h2>
            <p className="text-gray-300 mb-4">
              Follow us on social media for the latest updates and announcements:
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-red-500 hover:text-red-400">Twitter</a>
              <a href="#" className="text-red-500 hover:text-red-400">Facebook</a>
              <a href="#" className="text-red-500 hover:text-red-400">Instagram</a>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Help Center</h2>
            <p className="text-gray-300 mb-4">
              Before contacting us, you might find answers to your questions in our comprehensive Help Center. Search for topics or browse by category to find the information you need.
            </p>
            <a href="/helpcenter" className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-white font-semibold inline-block">
              Visit Help Center
            </a>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
