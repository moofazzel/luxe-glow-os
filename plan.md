# LuxeGlow OS – Full Executable Build Plan

This document is a **step-by-step execution plan** for building **LuxeGlow OS**, an AI-assisted booking, client portal, admin dashboard, and post-care automation platform for med spas and clinics.



## 🔍 0. Project Setup & Planning

### 0.1 Clarify Objectives

- Primary goal: create a portfolio project that shows you can build a **real SaaS-style product**:  
  - Public marketing site  
  - Booking engine  
  - Client portal  
  - Admin dashboard  
  - Stripe, email, SMS, AI, automation
- Target user: med spa / cosmetic clinic owner with 1–5 locations.

### 0.2 Repo & Environment

- Create new Git repository (GitHub).  
- Decide on deployment target (e.g., Vercel or Netlify).  
- Prepare environment variables (empty for now):
  - `DATABASE_URL`
  - `NEXTAUTH_SECRET`
  - `STRIPE_SECRET_KEY`
  - `STRIPE_WEBHOOK_SECRET`
  - `RESEND_API_KEY` (or SENDGRID)
  - `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_FROM_NUMBER`
  - `OPENAI_API_KEY`

---

## ⚙️ Phase 1 – Base App & Design System

### Goals

- Basic Next.js app running with Tailwind + ShadCN.  
- Global layout and minimal design system in place.

### Tasks

1. **Initialize Next.js App**
   - `npx create-next-app@latest` (App Router, TypeScript).
   - Run `npm run dev` to confirm it works.

2. **Install Tailwind CSS**
   - Follow official Next.js + Tailwind setup.  
   - Configure `tailwind.config` with custom colors and fonts.

3. **Add ShadCN UI**
   - Install ShadCN CLI.  
   - Configure it for your app.  
   - Generate core primitives: `button`, `input`, `textarea`, `card`, `dialog`, `table`, `tabs`, `alert`, `toast`.

4. **Global Layout**
   - Create root layout with:
     - Navbar (logo, links: Home, Services, Gallery, About, Blog, Contact, Book Now, Login).  
     - Footer (contact info, social links).  
   - Add container classes for consistent max width.

5. **Design Tokens**
   - In Tailwind config, define:
     - Primary color (luxury accent).  
     - Neutral background and surface colors.  
   - Define font scale and spacing you’ll use consistently.

**Exit Criteria:**  
- App runs locally, with a clean homepage using your layout & components.  
- Buttons, cards, inputs visually match your intended brand style.

---

## 🌐 Phase 2 – Public Marketing Website

### Goals

- Fully designed, responsive marketing site (static data).

### Tasks

1. **Define Public Routes**
   - `/` (Home)  
   - `/services`  
   - `/gallery`  
   - `/about`  
   - `/blog` and `/blog/[slug]`  
   - `/contact`

2. **Home Page**
   - Hero section with:
     - Headline  
     - Subheadline  
     - Primary CTA (“Book Appointment”)  
     - Secondary CTA (“View Services”)
   - Section: featured services (3–6 cards).  
   - Section: “Why choose us” (3–4 reasons).  
   - Section: testimonial slider or grid.  
   - Section: call-to-action near footer.

3. **Services Page**
   - Hard-code a JSON array of categories & services for now.  
   - Render services grouped by category.  
   - Each service card: name, short description, duration, price, “Book Now” button.

4. **Gallery Page**
   - Hard-code a JSON list of before/after cases.  
   - Filter by category (dropdown or pills).  
   - Use grid/masonry layout; click opens full-screen modal.

5. **About Page**
   - Story/proposition content.  
   - Team cards: photo, name, title, credentials.  
   - Logos for certifications, partners, or “as seen in”.

6. **Blog**
   - Static list: 3–5 example posts.  
   - Implement dynamic route for each post using markdown or hard-coded data.  
   - Clean typography for article content.

7. **Contact Page**
   - Form with validation (client-side for now).  
   - Placeholder for map.  
   - Business info and hours.

8. **Responsiveness & Polish**
   - Test views: mobile, tablet, desktop.  
   - Adjust typography and spacing for readability.

**Exit Criteria:**  
- All public routes implemented and look like a real med spa website.  
- Navigation works, design feels cohesive, no broken layouts on mobile.

---

## 🧱 Phase 3 – Database, Auth & Basic Models

### Goals

- Set up database, ORM, and authentication.  
- Seed minimal data for services and staff.

### Tasks

1. **Choose DB + ORM**
   - Prefer Prisma + PostgreSQL (local via Docker or a managed DB like Supabase/Neon).  
   - Install Prisma & init schema.

2. **Define Initial Models**
   - `User` with fields: `id`, `name`, `email`, `passwordHash`, `role`, `phone`, `createdAt`.  
   - `Service` with: `id`, `name`, `description`, `category`, `durationMinutes`, `basePrice`, `isActive`.  
   - `Staff` with: `id`, `name`, `bio`, `roleTitle`, `servicesOffered` (relation or join table), `workingHours` (JSON for now).  
   - `Booking` skeleton: `id`, `clientId`, `serviceId`, `staffId`, `startTime`, `endTime`, `status`, `priceAtBooking`, `stripePaymentId`.

3. **Run Migrations**
   - Generate and apply the first migration.  
   - Confirm DB tables created.

4. **Auth with NextAuth**
   - Set up Credentials provider.  
   - Create `/login` and `/register` routes under `(auth)`.  
   - Implement secure password hashing (e.g., bcrypt).  
   - Store `role` on user; seed one `ADMIN` user manually.

5. **User Layout Segmentation**
   - Create `(public)`, `(auth)`, `(client)`, `(admin)` route groups in `/app`.  
   - Protect client/admin routes with server-side auth checks.

6. **Seed Script**
   - Write a script to seed Services and Staff with realistic data.

**Exit Criteria:**  
- You can register and log in as a client.  
- You can log in as seeded admin.  
- Services and staff exist in DB and can be queried.

---

## 📅 Phase 4 – Booking Flow (Without Stripe First)

### Goals

- Implement a full booking flow up to creating a booking record (no payments yet).

### Tasks

1. **Booking Routes & UI**
   - Create `/book` route (or `/booking`).  
   - Build a stepper UI:
     - Step 1: Select Service  
     - Step 2: Select Provider (optional)  
     - Step 3: Select Date & Time  
     - Step 4: Review Details

2. **Service Pre-Selection**
   - When user clicks “Book Now” on a service card, pass `serviceId` to `/book` to pre-fill Step 1.

3. **Availability Logic (Simple Version)**
   - Generate hourly slots (or 30-min intervals) based on staff working hours and service duration.  
   - Query DB for existing bookings; hide overlapping slots.  
   - Store all times as Date objects in UTC.

4. **Login / Signup Integration**
   - At Step 4 (Review), if user is not logged in:  
     - Show mini login/register or redirect to login and then back.  
   - Once logged in, show their details in the review step.

5. **Create Booking (No Payment Yet)**
   - On confirm, validate slot is still free on the server.  
   - Create `Booking` with `status = "PENDING"` and `priceAtBooking` set from `Service.basePrice`.  
   - Show a simple “Booking Created” page.

**Exit Criteria:**  
- A logged-in user can go through the flow and create a PENDING booking.  
- Slot collisions are prevented at a basic level.

---

## 💳 Phase 5 – Stripe Payments & Confirmation Emails

### Goals

- Upgrade booking to paid reservations.  
- Send confirmation email after successful payment.

### Tasks

1. **Stripe Integration**
   - Install Stripe SDK.  
   - Add secret keys to `.env`.  
   - Create an API route/server action to create a Stripe Checkout Session with:
     - Description: service name + clinic name.  
     - Amount: deposit or full price.  
   - After booking creation, redirect user to Stripe Checkout.

2. **Stripe Webhook**
   - Create a webhook handler for `checkout.session.completed`.  
   - On success:
     - Look up the booking by metadata/session.  
     - Set `status = "CONFIRMED"`.  
     - Store `stripePaymentId`.

3. **Confirmation Page**
   - After redirect from Stripe `success_url`, show confirmation page with full booking details.

4. **Email Confirmation (Resend)**
   - Set up Resend (or chosen provider).  
   - On `CONFIRMED` booking, send “Appointment Confirmation” email.  
   - Include: service, date/time, provider, clinic address, cancellation rules.

**Exit Criteria:**  
- Payment flow works end-to-end in test mode.  
- Confirmed bookings receive an email.

---

## 👩‍💻 Phase 6 – Client Portal

### Goals

- Allow clients to view and manage their appointments, receipts, and profile.

### Tasks

1. **Portal Layout**
   - Create `/portal` layout with navigation tabs: Dashboard, Appointments, Billing, Profile.  

2. **Dashboard**
   - Query next upcoming confirmed appointment.  
   - Show date/time, service, provider, and quick actions.

3. **Appointments Section**
   - `GET` bookings for the current user.  
   - Split into Upcoming (CONFIRMED) and Past (COMPLETED/CANCELLED).  
   - Allow cancellation of eligible appointments (update status + notify).

4. **Billing / Receipts**
   - List bookings with successfully completed payments.  
   - “View Receipt” page with HTML invoice layout.

5. **Profile**
   - Form fields for name, email, phone.  
   - Toggles for:
     - “Receive post-care emails”  
     - “Receive post-care SMS”  
   - Update these fields in the DB.

6. **Recommended Treatments Widget (Basic Version)**
   - Simple rule-based suggestions using past services.  
   - Later upgrade to AI-driven recommendations.

**Exit Criteria:**  
- Authenticated clients can see and manage their own appointments and info.  
- Profile updates persist.  
- Portal has no obvious broken states on mobile.

---

## 🛠️ Phase 7 – Admin Dashboard (Core Operations)

### Goals

- Let admins see KPIs, manage bookings, clients, services, and staff.

### Tasks

1. **Admin Layout**
   - Create `/admin` layout with sidebar: Overview, Appointments, Clients, Services, Staff, Settings, Post-Care.

2. **Overview**
   - Query bookings to show:  
     - Today’s schedule (list).  
     - This week’s booking count.  
     - Approximate revenue.  
     - # of new clients this week.

3. **Appointments**
   - Table with filters:  
     - Status, date range, provider, service.  
   - Actions: mark completed, cancel, reschedule.  
   - Optionally, show a booking detail drawer.

4. **Clients**
   - List users with role `CLIENT`.  
   - Show last visit and total bookings.  
   - Detail view: booking history, total spent.

5. **Services CRUD**
   - Admin UI to create, edit, deactivate services.  
   - Ensure booking flow reads from this table.

6. **Staff CRUD**
   - Admin UI to create/edit staff profiles.  
   - Ability to associate services and set basic working hours (e.g., Mon–Fri 9–5).

7. **Settings**
   - Clinic name, address, phone.  
   - Timezone.  
   - Deposit configuration.  
   - Default email footer text.

**Exit Criteria:**  
- Admin can operate the clinic from `/admin`: manage services, staff, and bookings.  
- Role protection enforced: only admins can access these routes.

---

## 🤖 Phase 8 – AI Features (Treatment Finder & FAQ)

### Goals

- Add visible AI features that are practical and elegant.

### Tasks

1. **AI Treatment Recommender**
   - Create `/treatment-finder` route or a section on `/services`.  
   - Form asks:
     - main concern, budget, timeline.  
   - On submit:
     - Call an API route/server action that:  
       - Prepares a prompt with user inputs + list of services.  
       - Calls OpenAI Chat Completion.  
       - Returns recommended services (service IDs + text).  
   - Display recommended services with CTAs to “Book this treatment”.

2. **AI FAQ Assistant (Optional)**
   - Define a static list of FAQs and answers in a file.  
   - Build `/faq` page with:
     - Chat input box.  
     - API route that uses OpenAI with the FAQ content as context.  
   - Show AI responses in a small, constrained chat UI.

**Exit Criteria:**  
- Treatment Finder works end-to-end and feels helpful.  
- (Optional) FAQ assistant reliably answers basic questions from seeded FAQ content.

---

## ✉️📱 Phase 9 – Post-Care Automation (Email & SMS Journeys)

### Goals

- Implement the post-treatment care protocol engine with email & SMS scheduling.

### Tasks

1. **Extend Data Models**
   - Add `PostCareProtocol`, `ProtocolStep`, `PostCareEnrollment`, `NotificationLog` to the DB schema.  
   - Migrate DB.

2. **Admin UI – Post-Care Protocols**
   - `/admin/post-care` list page: protocols with service name, status, step count.  
   - Protocol editor page:  
     - Fields: name, linked service, description, active toggle.  
     - Steps list:
       - For each: dayOffset, channels (email/SMS), email subject/body, SMS body.  
       - Buttons to add, order, delete steps.

3. **Enrollment Logic**
   - When a booking status changes to `COMPLETED`:
     - Find active protocol for its `serviceId`.  
     - If exists, create `PostCareEnrollment` with `startDate = booking.startTime`.  
     - Check client preferences (email/SMS toggles).

4. **Scheduler**
   - Implement a server-side function that:  
     - Finds ACTIVE enrollments.  
     - Calculates daysSinceStart.  
     - Finds ProtocolSteps where `dayOffset == daysSinceStart`.  
     - For each step:
       - For each channel:
         - Render message with templates.  
         - Call Resend or Twilio.  
         - Create `NotificationLog` entry.

   - Expose this as:
     - `/api/run-post-care-scheduler` for manual testing.  
     - A cron job in production (Vercel/Netlify or external).

5. **Client Portal – Care Journey Timeline**
   - Add a section in client portal: “Your Care Journey”.  
   - Show timeline of:  
     - Steps already completed (using NotificationLog).  
     - Steps upcoming (from ProtocolSteps).

6. **Admin – Care Journey View**
   - On booking or client detail, show history of notifications sent.  
   - Provide a toggle to cancel an enrollment for specific client if needed.

7. **Content Examples**
   - Seed 1–2 protocols with realistic content, e.g.:
     - Botox 2-Week Post-Care  
     - Body Contouring 4-Week Post-Care

   - Include specific examples:  
     - Day 1: “Remember to wear compression garments for one hour today.”  
     - Day 7: “It has been one week since your treatment; here’s what’s normal and when to contact us.”

**Exit Criteria:**  
- Completing a booking triggers enrollment into a protocol.  
- The scheduler sends Day 0 / Day 1 / Day 7 messages appropriately in test.  
- Logs and timelines accurately reflect what was sent.

---

## 🧽 Phase 10 – QA, Polish & Portfolio Packaging

### Goals

- Fix bugs, refine UX, and prepare assets for portfolio and client demos.

### Tasks

1. **Testing & QA**
   - Walk through all core flows on mobile & desktop:
     - Public navigation.  
     - Booking (with payment).  
     - Client portal.  
     - Admin operations.  
     - AI features.  
     - Post-care automation (trigger manual scheduler).  
   - Log and fix issues.

2. **Performance & Best Practices**
   - Use `next/image` for images.  
   - Reduce unnecessary client components.  
   - Ensure good Lighthouse scores for performance and SEO.

3. **Seed Data & Demo Mode**
   - Seed a realistic dataset:
     - Services, staff, 10–20 fake clients, 20–30 bookings.  
     - Some protocols and steps.  
   - Prepare demo accounts:
     - `demo.admin@example.com`  
     - `demo.client@example.com`

4. **Documentation**
   - Write a strong `README.md`:
     - Project summary  
     - Features list  
     - Tech stack  
     - Setup & run instructions  
     - Demo creds  
   - Document environment variables and integration stubs.

5. **Portfolio Assets**
   - Capture high-quality screenshots:
     - Home page hero.  
     - Booking stepper.  
     - Client portal dashboard.  
     - Admin overview.  
     - AI Treatment Finder.  
     - Post-Care timeline.  
   - Optionally record a short Loom-style tour.

6. **Upwork Case Study Text**
   - Write a case study style description:  
     - Problem → Solution → Features → Tech stack → Business value (repeat bookings, automation, etc.).

**Final Exit Criteria:**  
- Deployed app on Vercel/Netlify with test integrations.  
- Clean repo with clear documentation.  
- Screenshots and description ready to add to Upwork portfolio.
