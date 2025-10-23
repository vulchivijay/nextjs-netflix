"use client";

import { useState } from 'react';
import Header from "../components/header";
import Footer from "../components/footer";

export default function Page() {
  const [giftCardCode, setGiftCardCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!giftCardCode.trim()) {
      setMessage('Please enter a gift card code');
      setMessageType('error');
      return;
    }

    setLoading(true);
    setMessage('');
    setMessageType('');

    // Simulate API call for gift card redemption
    setTimeout(() => {
      setLoading(false);
      // Simulate success for codes starting with 'NETFLIX'
      if (giftCardCode.toUpperCase().startsWith('NETFLIX') && giftCardCode.length >= 10) {
        setMessage('Gift card redeemed successfully! $25 has been added to your account.');
        setMessageType('success');
        setGiftCardCode('');
      } else {
        setMessage('Invalid gift card code. Please check and try again.');
        setMessageType('error');
      }
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
    setGiftCardCode(value);
    if (message) {
      setMessage('');
      setMessageType('');
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Redeem Gift Card</h1>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Redemption Form */}
            <div>
              <section className="bg-gray-800 p-8 rounded-lg mb-8">
                <h2 className="text-2xl font-semibold mb-6">Enter Your Gift Card Code</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Gift Card Code</label>
                    <input
                      type="text"
                      value={giftCardCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white text-lg tracking-wider"
                      placeholder="Enter code (e.g., NETFLIX123456)"
                      maxLength={20}
                      disabled={loading}
                    />
                    <p className="text-sm text-gray-400 mt-2">
                      Enter the code exactly as it appears on your gift card
                    </p>
                  </div>

                  {message && (
                    <div className={`p-4 rounded-md ${messageType === 'success' ? 'bg-green-800 text-green-100' : 'bg-red-800 text-red-100'}`}>
                      {message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading || !giftCardCode.trim()}
                    className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-600 px-6 py-3 rounded-lg text-white font-semibold text-lg transition-colors"
                  >
                    {loading ? 'Redeeming...' : 'Redeem Gift Card'}
                  </button>
                </form>
              </section>

              {/* How to Redeem */}
              <section className="bg-gray-800 p-8 rounded-lg">
                <h2 className="text-2xl font-semibold mb-6">How to Redeem</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-red-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Sign In</h3>
                      <p className="text-gray-300 text-sm">Make sure you're signed in to your Netflix account</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Enter Code</h3>
                      <p className="text-gray-300 text-sm">Type or paste your gift card code in the field above</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Redeem</h3>
                      <p className="text-gray-300 text-sm">Click "Redeem Gift Card" to add credit to your account</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Information Sidebar */}
            <div>
              <section className="bg-gray-800 p-8 rounded-lg mb-8">
                <h2 className="text-2xl font-semibold mb-6">Gift Card Information</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Where to Find Your Code</h3>
                    <p className="text-gray-300 text-sm">
                      Gift card codes are typically found on the back of physical cards or in confirmation emails for digital purchases.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Code Format</h3>
                    <p className="text-gray-300 text-sm">
                      Codes usually start with "NETFLIX" followed by numbers and letters, 10-20 characters long.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">One-Time Use</h3>
                    <p className="text-gray-300 text-sm">
                      Each gift card code can only be redeemed once. Make sure to use it on the correct account.
                    </p>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section className="bg-gray-800 p-8 rounded-lg">
                <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Can I redeem multiple gift cards?</h3>
                    <p className="text-gray-300 text-sm">
                      Yes, you can redeem multiple gift cards on the same account. Each code must be redeemed separately.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">What if my code doesn't work?</h3>
                    <p className="text-gray-300 text-sm">
                      Double-check the code for typos. If it's still not working, contact our support team for assistance.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Is there an expiration date?</h3>
                    <p className="text-gray-300 text-sm">
                      Netflix gift cards do not expire. You can redeem them at any time.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Can I transfer credit to another account?</h3>
                    <p className="text-gray-300 text-sm">
                      Gift card credit is non-transferable and can only be used on the account where it was redeemed.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Need Help Section */}
          <section className="mt-12 bg-gray-800 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
            <p className="text-gray-300 mb-6">
              If you're having trouble redeeming your gift card, our support team is here to help.
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
      </div >
      <Footer />
    </>
  );
}
