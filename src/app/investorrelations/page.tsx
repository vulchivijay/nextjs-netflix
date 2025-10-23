import Header from "../components/header";
import Footer from "../components/footer";

export default function Page() {
  const financialReports = [
    { year: "2024", quarter: "Q1", type: "Earnings Release", date: "April 16, 2024" },
    { year: "2023", quarter: "Q4", type: "Annual Report", date: "January 25, 2024" },
    { year: "2023", quarter: "Q3", type: "Earnings Release", date: "October 18, 2023" },
    { year: "2023", quarter: "Q2", type: "Earnings Release", date: "July 19, 2023" }
  ];

  const stockInfo = {
    symbol: "NFLX",
    exchange: "NASDAQ",
    currentPrice: "$450.25",
    change: "+2.15 (+0.48%)",
    marketCap: "$195.2B"
  };

  const upcomingEvents = [
    { date: "July 18, 2024", event: "Q2 2024 Earnings Call", time: "2:00 PM PT" },
    { date: "October 17, 2024", event: "Q3 2024 Earnings Call", time: "2:00 PM PT" },
    { date: "January 23, 2025", event: "Q4 2024 Earnings Call", time: "2:00 PM PT" }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 py-20">
          <div className="max-w-6xl mx-auto text-center px-8">
            <h1 className="text-5xl font-bold mb-6">Investor Relations</h1>
            <p className="text-xl mb-8">
              Discover Netflix's financial performance, corporate governance, and investment opportunities.
            </p>
          </div>
        </section>

        {/* Stock Information */}
        <section className="py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Stock Information</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold mb-2">Symbol</h3>
                <p className="text-2xl font-bold text-red-500">{stockInfo.symbol}</p>
                <p className="text-gray-300">{stockInfo.exchange}</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold mb-2">Current Price</h3>
                <p className="text-2xl font-bold">{stockInfo.currentPrice}</p>
                <p className="text-green-400 text-sm">{stockInfo.change}</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold mb-2">Market Cap</h3>
                <p className="text-2xl font-bold">{stockInfo.marketCap}</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold mb-2">52 Week High</h3>
                <p className="text-2xl font-bold">$486.12</p>
                <p className="text-gray-300 text-sm">52 Week Low: $274.73</p>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Reports */}
        <section className="py-16 px-8 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Financial Reports</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-gray-800 rounded-lg">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="px-6 py-4 text-left">Year</th>
                    <th className="px-6 py-4 text-left">Quarter</th>
                    <th className="px-6 py-4 text-left">Type</th>
                    <th className="px-6 py-4 text-left">Date</th>
                    <th className="px-6 py-4 text-left">Download</th>
                  </tr>
                </thead>
                <tbody>
                  {financialReports.map((report, index) => (
                    <tr key={index} className="border-b border-gray-700">
                      <td className="px-6 py-4">{report.year}</td>
                      <td className="px-6 py-4">{report.quarter}</td>
                      <td className="px-6 py-4">{report.type}</td>
                      <td className="px-6 py-4">{report.date}</td>
                      <td className="px-6 py-4">
                        <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white text-sm">
                          Download
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Upcoming Events</h2>
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{event.event}</h3>
                    <p className="text-gray-300">{event.date} at {event.time}</p>
                  </div>
                  <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded text-white font-medium">
                    Add to Calendar
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Corporate Governance */}
        <section className="py-16 px-8 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Corporate Governance</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Board of Directors</h3>
                <p className="text-gray-300 mb-4">
                  Meet our experienced board members who guide Netflix's strategic direction.
                </p>
                <button className="text-red-400 hover:text-red-300 text-sm font-medium">View Board →</button>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Executive Team</h3>
                <p className="text-gray-300 mb-4">
                  Learn about our leadership team and their roles in driving innovation.
                </p>
                <button className="text-red-400 hover:text-red-300 text-sm font-medium">View Team →</button>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Governance Documents</h3>
                <p className="text-gray-300 mb-4">
                  Access our bylaws, committee charters, and other governance materials.
                </p>
                <button className="text-red-400 hover:text-red-300 text-sm font-medium">View Documents →</button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Contact Investor Relations</h2>
            <p className="text-xl text-gray-300 mb-8">
              For investor inquiries, please contact our team.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Email</h3>
                <p className="text-gray-300">investor.relations@netflix.com</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Phone</h3>
                <p className="text-gray-300">1-408-540-3700</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-8">
              For press inquiries, please visit our Media Center.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
