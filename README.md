# SEA Catering - Healthy Meals Delivery App

A modern web application for SEA Catering's healthy meal delivery service across Indonesia. Built with Next.js 14, Supabase, and shadcn/ui components.

## Features

### 🍽️ Interactive Meal Plans

- Browse and explore different meal plans with detailed information
- Interactive modal dialogs showing nutrition facts and features
- Four specialized plans: Healthy Start, Fitness Pro, Family Pack, and Keto Specialist

### 📱 Responsive Navigation

- Floating navbar with scroll detection
- Mobile-responsive design with slide-out menu
- Active page highlighting
- Authentication-aware navigation (Dashboard link for signed-in users)

### 🔐 Authentication System

- Google OAuth integration with Supabase
- Email/password authentication
- Role-based access control (Admin/User)
- Protected dashboard routes

### 📊 User Dashboard

- Role-specific content (Admin vs User views)
- Sidebar navigation with user profile display
- Real-time authentication state management

### 💳 Subscription Plans

- Weekly, Monthly, and Quarterly subscription options
- Pricing comparison with savings calculations
- FAQ section for customer inquiries

### ⭐ Customer Testimonials

- Interactive testimonial submission form with star ratings
- Carousel display of customer reviews
- Sample testimonials for demonstration

### 🌙 Theme Support

- Light/Dark mode toggle
- System theme detection
- Smooth theme transitions

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Database & Auth**: Supabase
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Theme**: next-themes
- **Fonts**: Geist Sans

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ZulfiFazhar/SEA-CATERING.git
cd SEA-CATERING
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env.local` file with:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Configure Supabase:

   - Set up Google OAuth in Supabase Auth settings
   - Add redirect URLs for authentication
   - Configure user roles in user metadata

5. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
sea-catering/
├── app/                          # Next.js App Router pages
│   ├── auth/                     # Authentication pages
│   ├── dashboard/                # Protected dashboard
│   ├── menu/                     # Meal plans page
│   ├── subscriptions/            # Subscription plans
│   ├── contact/                  # Contact & testimonials
│   └── layout.tsx                # Root layout
├── components/                   # Reusable components
│   ├── auth/                     # Authentication components
│   ├── navbar/                   # Navigation components
│   ├── sidebar/                  # Dashboard sidebar
│   ├── testimonials/             # Testimonial components
│   └── ui/                       # shadcn/ui components
├── lib/                          # Utilities and configurations
│   └── supabase/                 # Supabase client configuration
└── public/                       # Static assets
```

## Key Pages

- **/** - Homepage with company information and features
- **/menu** - Interactive meal plans with detailed modals
- **/subscriptions** - Subscription plan comparison
- **/contact** - Contact information and testimonials
- **/dashboard** - Protected user/admin dashboard
- **/auth/login** - Authentication page with Google OAuth

## Authentication Flow

1. Users can sign in with Google OAuth or email/password
2. User roles are stored in Supabase user metadata
3. Dashboard content varies based on user role (admin/user)
4. Protected routes redirect unauthenticated users to login
