import Header from "../components/header";
import Footer from "../components/footer";

export default function Page() {
  const faqCategories = [
    {
      title: "Getting Started",
      questions: [
        {
          q: "How do I sign up for Netflix?",
          a: "To sign up for Netflix, visit our website and click on the 'Sign Up' button. Choose your plan, enter your email and create a password. You can start watching immediately after signing up."
        },
        {
          q: "What plans does Netflix offer?",
          a: "Netflix offers three plans: Basic ($8.99/month), Standard ($13.49/month), and Premium ($17.99/month). Each plan allows streaming on different numbers of devices simultaneously."
        },
        {
          q: "How do I cancel my Netflix subscription?",
          a: "You can cancel your subscription at any time. Go to your Account page, click on 'Cancel Membership' under Membership & Billing, and follow the instructions."
        }
      ]
    },
    {
      title: "Billing & Payments",
      questions: [
        {
          q: "When will I be charged for my Netflix subscription?",
          a: "You'll be charged at the beginning of your billing cycle. For new members, this is the date you signed up. You can check your next billing date in your Account settings."
        },
        {
          q: "How do I update my payment method?",
          a: "Go to your Account page and click on 'Update payment info' under Membership & Billing. You can add a new payment method or update your existing one."
        },
        {
          q: "Can I get a refund?",
          a: "Refunds are not available for Netflix subscriptions. However, you can cancel your membership at any time to stop future charges."
        }
      ]
    },
    {
      title: "Streaming & Technical",
      questions: [
        {
          q: "How many devices can I watch Netflix on at once?",
          a: "This depends on your plan: Basic (1 device), Standard (2 devices), Premium (4 devices). You can watch on any supported device with internet."
        },
        {
          q: "Why is Netflix not working on my device?",
          a: "Try restarting your device, checking your internet connection, or updating the Netflix app. If issues persist, visit our Help Center for device-specific troubleshooting."
        },
        {
          q: "Can I download content to watch offline?",
          a: "Yes, you can download select TV shows and movies to watch offline on supported devices. Look for the download icon next to the title."
        }
      ]
    },
    {
      title: "Account & Profiles",
      questions: [
        {
          q: "How do I create profiles for different family members?",
          a: "Go to your Account page and click on 'Manage Profiles' under Profile & Parental Controls. You can create up to 5 profiles per account."
        },
        {
          q: "How do I change my email address?",
          a: "Visit your Account page and click on 'Change email' under Membership & Billing. You'll need to verify your new email address."
        },
        {
          q: "Can I share my Netflix account with others?",
          a: "Netflix accounts are for personal use only. Sharing account details violates our Terms of Use. Each household should have their own account."
        }
      ]
    },
    {
      title: "Content & Recommendations",
      questions: [
        {
          q: "How does Netflix recommend content?",
          a: "Our recommendation system uses your viewing history, ratings, and preferences to suggest content you'll enjoy. The more you watch, the better our recommendations become."
        },
        {
          q: "Why can't I find a specific movie or show?",
          a: "Content availability varies by region due to licensing agreements. Some titles may not be available in your country, or they may have been removed from our catalog."
        },
        {
          q: "How do I rate content on Netflix?",
          a: "You can rate titles by hovering over them and clicking the thumbs up or thumbs down icon. This helps us improve our recommendations for you."
        }
      ]
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>

          <div className="mb-8">
            <p className="text-gray-300 text-center text-lg">
              Find answers to common questions about Netflix. Can't find what you're looking for? <a href="/contactus" className="text-blue-400 underline">Contact our support team</a>.
            </p>
          </div>

          {faqCategories.map((category, categoryIndex) => (
            <section key={categoryIndex} className="mb-12">
              <h2 className="text-3xl font-semibold mb-6 text-red-600">{category.title}</h2>
              <div className="space-y-6">
                {category.questions.map((item, questionIndex) => (
                  <div key={questionIndex} className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-medium mb-3 text-white">{item.q}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}

          <section className="mt-16 bg-gray-800 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Still Need Help?</h2>
            <p className="text-gray-300 mb-6">
              If you couldn't find the answer to your question, our support team is here to help.
            </p>
            <div className="space-x-4">
              <a href="/helpcenter" className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold text-white inline-block transition-colors">
                Visit Help Center
              </a>
              <a href="/contactus" className="border border-white px-6 py-3 rounded-lg font-semibold text-white hover:bg-white hover:text-black inline-block transition-colors">
                Contact Support
              </a>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
