# LHIMF — NFC Calling Cards & Digital Profiles (Next.js)

Next.js 14 (App Router, TypeScript) conversion of the LHIMF landing site.

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Routes
- `/` Home  · `/product` Packages  · `/About` Process, About, FAQ  · `/contact` Contact
- `/order` Order inquiry (`/order?package=basic|personalized|advertising` preselects a package)

## Edit
- Prices, features, sample links: `lib/site.ts`
- Email / phone: `lib/site.ts` (or `NEXT_PUBLIC_CONTACT_EMAIL` in `.env.local`)
- Styles: `app/globals.css` · Hero image: `public/hand.webp`

Contact and order forms open the visitor's email app (mailto), same as the original page.
To send server-side instead, add a Route Handler (e.g. `app/api/order/route.ts`) with Resend/Nodemailer.
