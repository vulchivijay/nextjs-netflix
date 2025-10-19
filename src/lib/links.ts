// Centralized link definitions for the app
// Keep canonical link targets here so UI components can import them.

export const supportPhone = '1-866-952-4456';
export const learnMoreHref = '/learnmore';

export type FooterLink = { id: string; label: string; href: string };

export const footerColumns: { id: number; links: FooterLink[] }[] = [
  {
    id: 1,
    links: [
      { id: 'a', label: 'FAQ', href: '/faq' },
      { id: 'b', label: 'Media Center', href: '/mediacenter' },
      { id: 'c', label: 'Redeem Gift Cards', href: '/redeemgiftcards' },
      { id: 'd', label: 'Privacy', href: '/privacy' },
      { id: 'e', label: 'Speed Test', href: '/speedtest' },
      { id: 'f', label: 'Ad choices', href: '/adchoices' },
    ],
  },
  {
    id: 2,
    links: [
      { id: 'a', label: 'Help Center', href: '/helpcenter' },
      { id: 'b', label: 'Investor Relations', href: '/investorrelations' },
      { id: 'c', label: 'Buy Gift Cards', href: '/buygiftcards' },
      { id: 'd', label: 'Cookie Preferences', href: '/cookiepreferences' },
      { id: 'e', label: 'Legal Notices', href: '/legalnotices' },
    ],
  },
  {
    id: 3,
    links: [
      { id: 'a', label: 'Account', href: '/account' },
      { id: 'b', label: 'Jobs', href: '/jobs' },
      { id: 'c', label: 'Ways to Watch', href: '/waystowatch' },
      { id: 'd', label: 'Corporate Information', href: '/corporateinformation' },
      { id: 'e', label: 'Only on Netflix', href: '/onlyonnetflix' },
    ],
  },
  {
    id: 4,
    links: [
      { id: 'a', label: 'Netflix House', href: '/netflixhouse' },
      { id: 'b', label: 'Netflix Shop', href: '/netflixshop' },
      { id: 'c', label: 'Terms of Use', href: '/termsofuse' },
      { id: 'd', label: 'Contact Us', href: '/contactus' },
      { id: 'e', label: 'Do Not Sell or Share My Personal Information', href: '/donotsellorsharemypersonalinformation' },
    ],
  },
];

// Export other commonly used links here as the project grows
