import Header from "../components/header";
import Footer from "../components/footer";

export default function Page() {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "Account Information: Email address, password, and profile information you provide when creating an account.",
        "Usage Data: Information about how you use Netflix, including viewing history, search queries, and device information.",
        "Payment Information: Billing details and payment method information (processed securely by third-party providers).",
        "Device Information: IP address, browser type, operating system, and device identifiers."
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "Provide and improve our streaming service",
        "Personalize your viewing experience and recommendations",
        "Process payments and manage your account",
        "Communicate with you about your account and our services",
        "Ensure security and prevent fraud",
        "Comply with legal obligations"
      ]
    },
    {
      title: "Information Sharing",
      content: [
        "We do not sell your personal information to third parties.",
        "We may share information with service providers who help us operate Netflix.",
        "We may disclose information when required by law or to protect our rights.",
        "Aggregated, anonymized data may be shared for research or business purposes."
      ]
    },
    {
      title: "Data Security",
      content: [
        "We use industry-standard encryption to protect your data.",
        "We regularly update our security measures to protect against unauthorized access.",
        "We limit access to personal information to authorized employees only.",
        "We conduct regular security audits and assessments."
      ]
    },
    {
      title: "Your Rights",
      content: [
        "Access: You can request a copy of the personal information we have about you.",
        "Correction: You can update your account information at any time.",
        "Deletion: You can request deletion of your account and associated data.",
        "Portability: You can request your data in a portable format.",
        "Opt-out: You can opt out of certain data processing activities."
      ]
    },
    {
      title: "Cookies and Tracking",
      content: [
        "We use cookies to improve your browsing experience and provide personalized content.",
        "You can control cookie settings through your browser preferences.",
        "We may use analytics tools to understand how our service is used.",
        "We do not respond to 'Do Not Track' signals at this time."
      ]
    },
    {
      title: "Children's Privacy",
      content: [
        "Netflix is not intended for children under 13.",
        "We do not knowingly collect personal information from children under 13.",
        "If we become aware of such collection, we will delete the information immediately.",
        "Parental controls are available to help manage children's viewing."
      ]
    },
    {
      title: "International Data Transfers",
      content: [
        "Your information may be transferred to and processed in countries other than your own.",
        "We ensure appropriate safeguards are in place for international transfers.",
        "Our service is available in many countries worldwide.",
        "Data protection laws may vary by jurisdiction."
      ]
    },
    {
      title: "Changes to This Policy",
      content: [
        "We may update this Privacy Policy from time to time.",
        "We will notify you of material changes via email or service notifications.",
        "Your continued use of Netflix after changes constitutes acceptance.",
        "The effective date of changes will be posted at the top of this policy."
      ]
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

          <div className="mb-8 p-6 bg-gray-800 rounded-lg">
            <p className="text-gray-300 text-sm mb-4">
              <strong>Effective Date:</strong> January 1, 2025
            </p>
            <p className="text-gray-300">
              At Netflix, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our streaming service. By using Netflix, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>

          {sections.map((section, index) => (
            <section key={index} className="mb-12">
              <h2 className="text-3xl font-semibold mb-6 text-red-600">{section.title}</h2>
              <div className="space-y-4">
                {section.content.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-gray-800 p-6 rounded-lg">
                    <p className="text-gray-300 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}

          <section className="mt-16 bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Privacy Team</h3>
                <p className="text-gray-300 text-sm">
                  Email: privacy@netflix.com<br />
                  Phone: 1-408-540-3700<br />
                  Address: 100 Winchester Circle, Los Gatos, CA 95032
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Data Protection Officer</h3>
                <p className="text-gray-300 text-sm">
                  For GDPR and other data protection inquiries:<br />
                  dpo@netflix.com
                </p>
              </div>
            </div>
          </section>

          <section className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              This Privacy Policy is subject to our <a href="/termsofuse" className="text-blue-400 underline">Terms of Use</a> and <a href="/cookiepreferences" className="text-blue-400 underline">Cookie Preferences</a>.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
