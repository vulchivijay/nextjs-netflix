"use client";

import { useState } from 'react';
import { useTranslations } from "next-intl";

export default function Page() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [recipientEmail, setRecipientEmail] = useState('');
  const [senderName, setSenderName] = useState('');
  const [message, setMessage] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [billingName, setBillingName] = useState('');
  const [loading, setLoading] = useState(false);

  const t = useTranslations('buygiftcards');
  const amounts = t.raw('amounts') as number[];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedAmount || !recipientEmail || !cardNumber || !expiryDate || !cvv || !billingName) {
      alert('Please fill in all required fields');
      return;
    }
    setLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      alert('Gift card purchased successfully! A confirmation email has been sent.');
      // Reset form
      setSelectedAmount(null);
      setRecipientEmail('');
      setSenderName('');
      setMessage('');
      setCardNumber('');
      setExpiryDate('');
      setCvv('');
      setBillingName('');
    }, 2000);
  };

  return (
    <>
      <div className="relative z-10 bg-black text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">{t('title')}</h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Gift Card Amount Selection */}
            <section className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Select Gift Card Amount</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {amounts.map(amount => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => setSelectedAmount(amount)}
                    className={`p-4 rounded-lg border-2 transition-colors ${selectedAmount === amount
                      ? 'border-red-600 bg-red-600 text-white'
                      : 'border-gray-600 bg-gray-700 text-white hover:border-red-500'
                      }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
            </section>

            {/* Recipient Information */}
            <section className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Recipient Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Recipient Email *</label>
                  <input
                    type="email"
                    value={recipientEmail}
                    onChange={(e) => setRecipientEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                    placeholder="recipient@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                    placeholder="Your name (optional)"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Personal Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white h-24"
                    placeholder="Add a personal message (optional)"
                    maxLength={500}
                  />
                </div>
              </div>
            </section>

            {/* Payment Information */}
            <section className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Payment Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Card Number *</label>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, '').slice(0, 16))}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Expiry Date *</label>
                    <input
                      type="text"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value.replace(/\D/g, '').slice(0, 4).replace(/(\d{2})(\d{0,2})/, '$1/$2'))}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">CVV *</label>
                    <input
                      type="text"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 4))}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                      placeholder="123"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Name on Card *</label>
                  <input
                    type="text"
                    value={billingName}
                    onChange={(e) => setBillingName(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>
            </section>

            {/* Order Summary */}
            {selectedAmount && (
              <section className="bg-gray-800 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Netflix Gift Card</span>
                    <span>${selectedAmount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Processing Fee</span>
                    <span>$0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>$0.00</span>
                  </div>
                  <hr className="border-gray-600" />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${selectedAmount}</span>
                  </div>
                </div>
              </section>
            )}

            {/* Terms and Submit */}
            <section className="bg-gray-800 p-6 rounded-lg">
              <div className="space-y-4">
                <div className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" required />
                  <label className="text-sm">
                    I agree to the <a href="/termsofuse" className="text-blue-400 underline">Terms of Use</a> and <a href="/privacy" className="text-blue-400 underline">Privacy Policy</a>.
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={loading || !selectedAmount}
                  className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-600 px-6 py-3 rounded-lg text-white font-semibold text-lg"
                >
                  {loading ? 'Processing...' : `Purchase Gift Card - $${selectedAmount || 0}`}
                </button>
              </div>
            </section>
          </form>

          {/* Additional Information */}
          <section className="mt-8 bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Gift Card Information</h2>
            <ul className="space-y-2 text-gray-300">
              <li>• Gift cards are delivered instantly via email</li>
              <li>• No expiration date</li>
              <li>• Can be used to purchase or renew Netflix subscriptions</li>
              <li>• Not redeemable for cash</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
