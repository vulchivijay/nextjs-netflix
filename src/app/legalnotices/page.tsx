import Header from "../components/header";
import Footer from "../components/footer";

export default function Page() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Legal Notices</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Copyright Notice</h2>
            <p className="text-gray-300 mb-4">
              All content on this website, including text, graphics, logos, images, and software, is the property of Netflix, Inc. or its content suppliers and is protected by United States and international copyright laws.
            </p>
            <p className="text-gray-300 mb-4">
              The Netflix name and logo are trademarks of Netflix, Inc. All other trademarks appearing on this website are the property of their respective owners.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Terms of Service</h2>
            <p className="text-gray-300 mb-4">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
            <p className="text-gray-300 mb-4">
              We are committed to protecting your privacy. Our privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
            <p className="text-gray-300 mb-4">
              The information contained in this website is for general information purposes only. The information is provided by Netflix, Inc. and while we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-300 mb-4">
              For legal inquiries, please contact us at:
            </p>
            <address className="text-gray-300 not-italic">
              Netflix, Inc.<br />
              100 Winchester Circle<br />
              Los Gatos, CA 95032<br />
              United States
            </address>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Last Updated</h2>
            <p className="text-gray-300">
              This legal notice was last updated on December 2024.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
