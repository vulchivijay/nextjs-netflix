
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations('jobs');
  const jobCategories = t.raw('jobCategories') as any[];
  const benefits = t.raw('benefits') as string[];

  return (
    <>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 py-20">
          <div className="max-w-4xl mx-auto text-center px-8">
            <h1 className="text-5xl font-bold mb-6">{t('hero.title')}</h1>
            <p className="text-xl mb-8">
              {t('hero.description')}
            </p>
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              {t('hero.button')}
            </button>
          </div>
        </section>

        {/* Why Netflix Section */}
        <section className="py-16 px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Netflix?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Innovation First</h3>
                <p className="text-gray-300">
                  We push boundaries and embrace change. At Netflix, you'll work on cutting-edge technology and creative projects that reach millions of people worldwide.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Freedom & Responsibility</h3>
                <p className="text-gray-300">
                  We trust our employees to make decisions and take ownership. With great freedom comes great responsibility, and we provide the support you need to succeed.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Inclusive Culture</h3>
                <p className="text-gray-300">
                  Diversity drives our creativity. We foster an inclusive environment where everyone can bring their authentic selves to work and contribute their unique perspectives.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Impact at Scale</h3>
                <p className="text-gray-300">
                  Your work matters. Whether you're developing new features or supporting our operations, you'll see the direct impact of your contributions on our global audience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-16 px-8 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Open Positions</h2>
            <div className="space-y-12">
              {jobCategories.map((category, index) => (
                <div key={index} className="bg-gray-800 p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-4">{category.title}</h3>
                  <p className="text-gray-300 mb-6">{category.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {category.jobs.map((job: any, jobIndex: number) => (
                      <div key={jobIndex} className="bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">{job.title}</h4>
                        <div className="text-sm text-gray-400 space-y-1">
                          <p>{job.location}</p>
                          <p>{job.type}</p>
                        </div>
                        <button className="mt-3 bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm font-medium transition-colors">
                          Apply Now
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Benefits & Perks</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-red-600 rounded-full w-6 h-6 flex items-center justify-center mr-4">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process Section */}
        <section className="py-16 px-8 bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Application Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="bg-red-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Apply</h3>
                <p className="text-gray-300 text-sm">Submit your application and resume</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="bg-red-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Review</h3>
                <p className="text-gray-300 text-sm">Our team reviews your application</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="bg-red-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Interview</h3>
                <p className="text-gray-300 text-sm">Multiple rounds of interviews</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="bg-red-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">4</span>
                </div>
                <h3 className="font-semibold mb-2">Offer</h3>
                <p className="text-gray-300 text-sm">Receive and accept your offer</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Join Us?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Explore our open positions and start your journey with Netflix.
            </p>
            <div className="space-x-4">
              <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
                Browse Jobs
              </button>
              <button className="border border-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
