import Link from "next/link"

export default function Footer() {

  const anchors = [
    {
      id: 1,
      links: [
        {
          id: 'a',
          label: 'FAQ',
          href: '/faq',
        },
        {
          id: 'b',
          label: 'Media Center',
          href: '/mediacenter',
        },
        {
          id: 'c',
          label: 'Redeem Gift Cards',
          href: '/redeemgiftcards',
        },
        {
          id: 'd',
          label: 'Privacy',
          href: '/privacy',
        },
        {
          id: 'e',
          label: 'Speed Test',
          href: '/speedtest',
        },
        {
          id: 'f',
          label: 'Ad choices',
          href: '/adchoices',
        },
      ]
    },
    {
      id: 2,
      links: [
        {
          id: 'a',
          label: 'Help Center',
          href: '/helpcenter',
        },
        {
          id: 'b',
          label: 'Investor Relations',
          href: '/investorrelations',
        },
        {
          id: 'c',
          label: 'Buy Gift Cards',
          href: '/buygiftcards',
        },
        {
          id: 'd',
          label: 'Cookie Preferences',
          href: '/cookiepreferences',
        },
        {
          id: 'e',
          label: 'Legal Notices',
          href: '/legalnotices',
        },
      ]
    },
    {
      id: 3,
      links: [
        {
          id: 'a',
          label: 'Account',
          href: '/account',
        },
        {
          id: 'b',
          label: 'Jobs',
          href: '/jobs',
        },
        {
          id: 'c',
          label: 'Ways to Watch',
          href: '/waystowatch',
        },
        {
          id: 'd',
          label: 'Corporate Information',
          href: '/corporateinformation',
        },
        {
          id: 'e',
          label: 'Only on Netflix',
          href: '/onlyonnetflix',
        },
      ]
    },
    {
      id: 4,
      links: [
        {
          id: 'a',
          label: 'Netflix House',
          href: '/netflixhouse',
        },
        {
          id: 'b',
          label: 'Netflix Shop',
          href: '/netflixshop',
        },
        {
          id: 'c',
          label: 'Terms of Use',
          href: '/termsofuse',
        },
        {
          id: 'd',
          label: 'Contact Us',
          href: '/contactus',
        },
        {
          id: 'e',
          label: 'Do Not Sell or Share My Personal Information',
          href: '/donotsellorsharemypersonalinformation',
        },
      ]
    }
  ]
  return (
    <footer className="relative z-10 border-t-1 border-gray-800 pt-10 pb-20">
      <div className="max-w-6xl m-auto text-white">
        <p className="text-md pb-8 text-white">Questions? Call <Link href="1-866-952-4456" className="underline">1-866-952-4456</Link></p>
        <div className="flex pb-10 gap-4">
          {anchors.map(column =>
            <div key={column.id} className="flex-1">
              {column.links.map(link => <div className="flex flex-row py-2" key={link.id}>
                <Link href={link.href} className="text-sm underline text-white">{link.label}</Link>
              </div>
              )}
            </div>
          )}
        </div>
        <p className="text-sm text-gray-500">This page is protected by Google reCAPTCHA to ensure you are not a bot. <Link href="/learnmore" className="text-blue-700">Learn more.</Link></p>
      </div>
    </footer>
  )
}