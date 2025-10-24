# Internationalization Task: Convert Static Content to JSON

## Overview
Convert hardcoded static content in page components to JSON objects in en.json for internationalization support.

## Detailed Steps

### 1. Update en.json with Translation Objects
- [ ] Add "privacy" object with sections array containing title and content arrays
- [ ] Add "termsofuse" object with sections array for each section's title and content
- [x] Add "waystowatch" object with devices, platforms, viewingOptions, hero, gettingStarted, faq, and cta sub-objects
- [ ] Add "onlyonnetflix" object with originals, upcoming, genres, hero, and cta sub-objects

### 2. Update Page Components
- [ ] Update src/app/privacy/page.tsx: Add 'use client', import useTranslations, replace hardcoded sections with t.raw('privacy.sections')
- [ ] Update src/app/termsofuse/page.tsx: Add 'use client', import useTranslations, replace hardcoded content with t.raw('termsofuse.sections')
- [x] Update src/app/waystowatch/page.tsx: Add 'use client', import useTranslations, replace all hardcoded arrays and strings with translation calls
- [ ] Update src/app/onlyonnetflix/page.tsx: Add 'use client', import useTranslations, replace all hardcoded arrays and strings with translation calls

### 3. Testing
- [ ] Run the application to ensure all pages load without errors
- [ ] Check for any missing translation keys
- [ ] Verify that all static content is properly translated

## Notes
- Use t.raw() for arrays and complex objects
- Follow existing en.json structure patterns
- Ensure consistent key naming conventions
- Client components (login, signup, etc.) already use translations where needed
