# TODO: Add Header Component to All Pages

## Information Gathered
- **Header Component**: `src/app/components/header/index.tsx` - A simple header displaying the Netflix logo.
- **LandingHeader Component**: `src/app/components/header-secondary/index.tsx` - A full header with logo, language selector, sign in/logout, and mobile menu.
- **Pages with Headers**:
  - Main page (`src/app/page.tsx`): Uses `LandingHeader`.
  - Home page (`src/app/home/page.tsx`): Uses `LandingHeader`.
  - Login layout (`src/app/login/layout.tsx`): Uses `LandingHeader`.
  - Signup layout (`src/app/signup/layout.tsx`): Uses `LandingHeader`.
- **Pages without Headers**: All other pages in `src/app/` subdirectories (e.g., `account`, `contactus`, `adchoices`, `buygiftcards`, `cookiepreferences`, `faq`, `helpcenter`, and many others) are placeholder pages with no header component.

## Plan
- Add the simple `Header` component to all pages that currently do not have any header (i.e., the placeholder pages).
- For each affected `page.tsx` file:
  - Import `Header` from `"../components/header"`.
  - Add `<Header />` at the top of the component's return statement.
- This ensures consistency across the site for non-landing/auth pages.

## Dependent Files to Edit
- `src/app/account/page.tsx`
- `src/app/adchoices/page.tsx`
- `src/app/buygiftcards/page.tsx`
- `src/app/contactus/page.tsx`
- `src/app/cookiepreferences/page.tsx`
- `src/app/corporateinformation/page.tsx`
- `src/app/donotsellorsharemypersonalinformation/page.tsx`
- `src/app/faq/page.tsx`
- `src/app/forgot/page.tsx`
- `src/app/helpcenter/page.tsx`
- `src/app/investorrelations/page.tsx`
- `src/app/jobs/page.tsx`
- `src/app/learnmore/page.tsx`
- `src/app/legalnotices/page.tsx`
- `src/app/mediacenter/page.tsx`
- `src/app/netflixhouse/page.tsx`
- `src/app/netflixshop/page.tsx`
- `src/app/onlyonnetflix/page.tsx`
- `src/app/privacy/page.tsx`
- `src/app/redeemgiftcards/page.tsx`
- `src/app/speedtest/page.tsx`
- `src/app/termsofuse/page.tsx`
- `src/app/waystowatch/page.tsx`
- (And any other `page.tsx` files in subdirectories without headers)

## Followup Steps
- After editing, verify that the header appears on each page.
- Test navigation to ensure no layout issues.
