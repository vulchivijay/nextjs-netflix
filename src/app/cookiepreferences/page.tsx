import Header from "../components/header";
import Footer from "../components/footer";

export default function Page() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Cookie Preferences</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What Are Cookies?</h2>
            <p className="text-gray-300 mb-4">
              Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better browsing experience by remembering your preferences and understanding how you use our site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>

            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2">Essential Cookies</h3>
              <p className="text-gray-300 mb-2">
                These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services.
              </p>
              <div className="bg-gray-800 p-4 rounded">
                <label className="flex items-center">
                  <input type="checkbox" checked disabled className="mr-2" />
                  <span className="text-gray-300">Always Active</span>
                </label>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2">Performance Cookies</h3>
              <p className="text-gray-300 mb-2">
                These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.
              </p>
              <div className="bg-gray-800 p-4 rounded">
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-2" />
                  <span className="text-gray-300">Allow Performance Cookies</span>
                </label>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2">Functional Cookies</h3>
              <p className="text-gray-300 mb-2">
                These cookies enable the website to provide enhanced functionality and personalization.
              </p>
              <div className="bg-gray-800 p-4 rounded">
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-2" />
                  <span className="text-gray-300">Allow Functional Cookies</span>
                </label>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2">Targeting Cookies</h3>
              <p className="text-gray-300 mb-2">
                These cookies may be set through our site by our advertising partners to build a profile of your interests.
              </p>
              <div className="bg-gray-800 p-4 rounded">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-gray-300">Allow Targeting Cookies</span>
                </label>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Managing Your Cookie Preferences</h2>
            <p className="text-gray-300 mb-4">
              You can change your cookie preferences at any time by adjusting the settings above. Please note that disabling certain types of cookies may impact your experience on our website.
            </p>
            <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-white font-semibold">
              Save Preferences
            </button>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">More Information</h2>
            <p className="text-gray-300 mb-4">
              For more information about how we use cookies and your privacy rights, please visit our Privacy Policy.
            </p>
            <p className="text-gray-300">
              Last updated: December 2024
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
