# 🚀 Next-Gen Learning Dashboard

A futuristic Student Dashboard built with Next.js, Supabase, Tailwind CSS, and Framer Motion.

## 🔗 Tech Stack

- Next.js (App Router)
- TypeScript
- Supabase
- Tailwind CSS
- Framer Motion
- Lucide React
- Vercel

---

## 📋 Features

### Layout & UI
- Dark mode dashboard
- Bento Grid layout
- Responsive design
- Animated Hero Tile
- Activity Heatmap Tile
- Dynamic Course Cards
- Mobile Bottom Navigation
- Tablet Collapsed Sidebar
- Desktop Full Sidebar

### Data Integration
- Courses fetched from Supabase
- Server Component data fetching
- Secure environment variables
- PostgreSQL database

### Animations
- Staggered page load animations
- Spring-based hover interactions
- Animated progress bars
- Sidebar active indicator using Framer Motion `layoutId`

### Loading & Error States
- Skeleton loading screen (`loading.tsx`)
- Database error handling
- Global route error boundary (`error.tsx`)

---

## 🏗️ Architecture

### Server Components

Course data is fetched on the server using Supabase before rendering the dashboard.

```tsx
const { data } = await supabase
  .from("courses")
  .select("*");
```

This reduces client-side work and improves performance.

### Client Components

Interactive UI elements are implemented as Client Components:

- Sidebar
- Mobile Navigation
- Course Cards
- Hero Tile
- Activity Tile

These components use Framer Motion for animations and interactions.

---

## 🗄️ Supabase Schema

Table: `courses`

| Column | Type |
|----------|----------|
| id | uuid |
| title | text |
| progress | integer |
| icon_name | text |
| created_at | timestamp |

Example Row:

| title | progress | icon_name |
|---------|---------|---------|
| Advanced React Patterns | 75 | Code |
| Next.js Fundamentals | 60 | Rocket |
| UI Motion Design | 90 | Sparkles |

---

## 📱 Responsive Design

### Desktop (>1024px)

- Full sidebar
- 3-column Bento layout

### Tablet (768px–1024px)

- Sidebar collapsed to icons
- 2-column layout

### Mobile (<768px)

- Bottom navigation
- Single-column layout
---

## 🚀 Deployment

The project is deployed on Vercel:

👉 Live URL: https://student-dashboard-ui-sigma.vercel.app/dashboard

Steps used:
1. Push code to GitHub
2. Import repo into Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

---

## 📚 What I Learned

- Server Components in Next.js App Router
- Supabase SSR authentication handling
- Preventing hydration mismatches in React
- Building performant UI with Framer Motion

---

## 👨‍💻 Author

Sathya
#### 📧 kuttysathya234@gmail.com

Frontend Intern Challenge Submission
