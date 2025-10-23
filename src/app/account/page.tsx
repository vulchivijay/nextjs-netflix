"use client";

import Header from "../components/header";
import Footer from "../components/footer";
import { useState } from "react";

export default function Page() {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Profile & Settings" },
    { id: "billing", label: "Billing & Payments" },
    { id: "history", label: "Viewing History" },
    { id: "security", label: "Security & Privacy" }
  ];

  const profileSettings = [
    { label: "Email", value: "user@example.com", action: "Change Email" },
    { label: "Password", value: "••••••••", action: "Change Password" },
    { label: "Phone Number", value: "+1 (555) 123-4567", action: "Update Phone" },
    { label: "Language", value: "English", action: "Change Language" }
  ];

  const paymentMethods = [
    { type: "Credit Card", last4: "**** 1234", expiry: "12/26", default: true },
    { type: "PayPal", last4: "user@example.com", expiry: "N/A", default: false }
  ];

  const viewingHistory = [
    { title: "Stranger Things", date: "Watched 2 days ago", progress: "Season 4, Episode 3" },
    { title: "The Crown", date: "Watched 3 days ago", progress: "Season 5, Episode 2" },
    { title: "Money Heist", date: "Watched 1 week ago", progress: "Season 5, Episode 1" },
    { title: "Black Mirror", date: "Watched 2 weeks ago", progress: "Season 6, Episode 1" }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 py-16">
          <div className="max-w-4xl mx-auto text-center px-8">
            <h1 className="text-4xl font-bold mb-4">Account Settings</h1>
            <p className="text-lg text-gray-200">
              Manage your Netflix account, billing, and preferences.
            </p>
          </div>
        </section>

        {/* Account Navigation */}
        <section className="py-8 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${activeTab === tab.id
                    ? "bg-red-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Profile & Settings Tab */}
            {activeTab === "profile" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Profile & Settings</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {profileSettings.map((setting, index) => (
                    <div key={index} className="bg-gray-800 p-6 rounded-lg">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">{setting.label}</h3>
                        <button className="text-red-400 hover:text-red-300 text-sm font-medium">
                          {setting.action}
                        </button>
                      </div>
                      <p className="text-gray-300">{setting.value}</p>
                    </div>
                  ))}
                </div>

                {/* Profiles Section */}
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Profiles</h3>
                  <p className="text-gray-300 mb-4">
                    Create and manage profiles for different family members.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-700 p-4 rounded text-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-white font-bold text-xl">JD</span>
                      </div>
                      <p className="font-medium">John Doe</p>
                      <p className="text-gray-400 text-sm">Main Profile</p>
                    </div>
                    <div className="bg-gray-700 p-4 rounded text-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-white font-bold text-xl">JS</span>
                      </div>
                      <p className="font-medium">Jane Smith</p>
                      <p className="text-gray-400 text-sm">Kids Profile</p>
                    </div>
                    <div className="bg-gray-700 p-4 rounded text-center border-2 border-dashed border-gray-600">
                      <div className="w-16 h-16 bg-gray-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-gray-400 text-2xl">+</span>
                      </div>
                      <p className="text-gray-400">Add Profile</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Billing & Payments Tab */}
            {activeTab === "billing" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Billing & Payments</h2>

                {/* Current Plan */}
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Current Plan</h3>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-lg font-medium">Premium Plan</p>
                      <p className="text-gray-300">$19.99/month</p>
                      <p className="text-gray-400 text-sm">Next billing date: July 15, 2024</p>
                    </div>
                    <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded text-white font-medium">
                      Change Plan
                    </button>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Payment Methods</h3>
                  <div className="space-y-4">
                    {paymentMethods.map((method, index) => (
                      <div key={index} className="flex justify-between items-center p-4 bg-gray-700 rounded">
                        <div className="flex items-center">
                          <div className="mr-4">
                            <p className="font-medium">{method.type}</p>
                            <p className="text-gray-300 text-sm">Ending in {method.last4}</p>
                          </div>
                          {method.default && (
                            <span className="bg-red-600 text-white px-2 py-1 rounded text-xs">Default</span>
                          )}
                        </div>
                        <div className="flex gap-2">
                          {!method.default && (
                            <button className="text-red-400 hover:text-red-300 text-sm">Set as Default</button>
                          )}
                          <button className="text-gray-400 hover:text-gray-300 text-sm">Edit</button>
                          <button className="text-gray-400 hover:text-gray-300 text-sm">Remove</button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="mt-4 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-white">
                    Add Payment Method
                  </button>
                </div>

                {/* Billing History */}
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Billing History</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-700">
                      <div>
                        <p className="font-medium">June 15, 2024</p>
                        <p className="text-gray-400 text-sm">Premium Plan</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$19.99</p>
                        <button className="text-red-400 hover:text-red-300 text-sm">Download Invoice</button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-700">
                      <div>
                        <p className="font-medium">May 15, 2024</p>
                        <p className="text-gray-400 text-sm">Premium Plan</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$19.99</p>
                        <button className="text-red-400 hover:text-red-300 text-sm">Download Invoice</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Viewing History Tab */}
            {activeTab === "history" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Viewing History</h2>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-6">
                    <p className="text-gray-300">
                      Your viewing history is private and only visible to you.
                    </p>
                    <button className="text-red-400 hover:text-red-300 text-sm font-medium">
                      Clear History
                    </button>
                  </div>
                  <div className="space-y-4">
                    {viewingHistory.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-gray-700">
                        <div>
                          <h4 className="font-medium">{item.title}</h4>
                          <p className="text-gray-400 text-sm">{item.progress}</p>
                        </div>
                        <p className="text-gray-400 text-sm">{item.date}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Security & Privacy Tab */}
            {activeTab === "security" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Security & Privacy</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Two-Factor Authentication</h3>
                    <p className="text-gray-300 mb-4">
                      Add an extra layer of security to your account.
                    </p>
                    <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white text-sm">
                      Enable 2FA
                    </button>
                  </div>

                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Download Your Data</h3>
                    <p className="text-gray-300 mb-4">
                      Request a copy of your account data.
                    </p>
                    <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-white text-sm">
                      Request Data
                    </button>
                  </div>

                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Privacy Settings</h3>
                    <p className="text-gray-300 mb-4">
                      Control how your data is used and shared.
                    </p>
                    <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-white text-sm">
                      Manage Privacy
                    </button>
                  </div>

                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Delete Account</h3>
                    <p className="text-gray-300 mb-4">
                      Permanently delete your Netflix account.
                    </p>
                    <button className="bg-red-800 hover:bg-red-900 px-4 py-2 rounded text-white text-sm">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
