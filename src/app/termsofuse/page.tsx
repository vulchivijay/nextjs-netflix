import Header from "../components/header";
import Footer from "../components/footer";

export default function Page() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
            <p className="text-gray-300 mb-4">
              By accessing and using Netflix, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Description of Service</h2>
            <p className="text-gray-300 mb-4">
              Netflix provides users with access to a rich collection of online resources, including various communications tools, forums, shopping services, search services, and personalized content. Unless explicitly stated otherwise, any new features that augment or enhance the current Service shall be subject to the Terms of Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">User Accounts</h2>
            <p className="text-gray-300 mb-4">
              In order to use certain features of the service, you must register for an account. When you register, you agree to provide accurate, current, and complete information about yourself and to update such information to keep it accurate, current, and complete.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
            <p className="text-gray-300 mb-4">
              Your privacy is very important to us. Accordingly, we have developed this Policy in order for you to understand how we collect, use, communicate, and disclose and make use of personal information. Our privacy policy is incorporated into these terms by reference.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Content and Conduct</h2>
            <p className="text-gray-300 mb-4">
              You understand that all information, data, text, software, music, sound, photographs, graphics, video, messages or other materials ("Content"), whether publicly posted or privately transmitted, are the sole responsibility of the person from which such Content originated.
            </p>
            <p className="text-gray-300 mb-4">
              You agree not to use the Service to:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 ml-4">
              <li>Upload, post, email or otherwise transmit any Content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically or otherwise objectionable</li>
              <li>Impersonate any person or entity or falsely state or otherwise misrepresent your affiliation with a person or entity</li>
              <li>Upload, post, email or otherwise transmit any Content that you do not have a right to transmit under any law or under contractual or fiduciary relationships</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Termination</h2>
            <p className="text-gray-300 mb-4">
              You agree that Netflix may, under certain circumstances and without prior notice, immediately terminate your account and access to the Service. Cause for such termination shall include, but not be limited to:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 ml-4">
              <li>Breaches or violations of the Terms of Service or other incorporated agreements or guidelines</li>
              <li>Requests by law enforcement or other government agencies</li>
              <li>Discontinuation or material modification to the Service (or any part thereof)</li>
              <li>Unexpected technical or security issues or problems</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Disclaimer of Warranties</h2>
            <p className="text-gray-300 mb-4">
              You expressly understand and agree that:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 ml-4">
              <li>Your use of the service is at your sole risk. The service is provided on an "as is" and "as available" basis</li>
              <li>Netflix expressly disclaims all warranties of any kind, whether express or implied, including, but not limited to the implied warranties of merchantability, fitness for a particular purpose and non-infringement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <address className="text-gray-300 not-italic">
              Netflix, Inc.<br />
              100 Winchester Circle<br />
              Los Gatos, CA 95032<br />
              United States<br />
              Email: terms@netflix.com
            </address>
            <p className="text-gray-300 mt-4">
              Last updated: December 2024
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
