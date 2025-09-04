# 🛒 nxtcart - Online Shopping App  

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)  
[![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white)](https://react.dev/)  
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)  
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)  
[![Shadcn UI](https://img.shields.io/badge/Shadcn-UI-purple)](https://ui.shadcn.com/)  
[![Stripe](https://img.shields.io/badge/Stripe-Payments-635bff?logo=stripe&logoColor=white)](https://stripe.com/)  
[![PayPal](https://img.shields.io/badge/PayPal-Checkout-00457C?logo=paypal&logoColor=white)](https://paypal.com/)  
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel)](https://vercel.com/)  

nxtcart is a **full-stack e-commerce application** built with **Next.js 15** and **MongoDB**.  
It provides a modern, scalable, and production-ready shopping platform with features for customers, secure authentication, order management, and an admin dashboard.  

---

## 🚀 Tech Stack  

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Server Components)  
- **UI**: React 19, Tailwind CSS, Shadcn UI, Radix UI, Recharts  
- **Database**: MongoDB + Mongoose  
- **Authentication**: Auth.js (NextAuth), Google Auth, Magic Link  
- **Payments**: PayPal, Stripe  
- **Deployment**: Vercel, GitHub  
- **Others**: Uploadthing, Resend, Zustand, Zod  

---

## ✨ Features  

### 🛍 Customer-Facing  
- Responsive design with **Tailwind + Shadcn UI**  
- Header, Footer, Sidebar, Search, and Category Navigation  
- Product listing with **sliders & carousels** (Today’s Deals, Best Sellers)  
- **Quick View Modals** using Next.js Parallel + Intercepting Routes  
- Product details with reviews and ratings  
- Add-to-cart with **server-side cookies**  
- Checkout with **PayPal & Stripe integration**  
- Order placement, payment, and history tracking  
- Customer dashboard: Update profile, track orders  

### 🔐 Authentication  
- Sign up / Sign in with email  
- Google OAuth & Magic Link  
- Secure sessions with Auth.js + MongoDB Adapter  

### 📊 Admin Dashboard  
- Manage products (Create, Update, Delete)  
- Manage orders (Mark as Paid / Delivered)  
- Manage users (Edit roles, Update info)  
- Website CMS (create/update pages)  
- Settings & multilingual support (next-intl)  
- **Interactive charts** with Recharts  

---

## 📂 Project Structure  

- **Frontend** → Next.js (App Router + Server Components)  
- **Backend** → Next.js Server Actions (no REST API needed)  
- **Database** → MongoDB with Mongoose models  
- **Auth** → NextAuth (Auth.js) with MongoDB adapter  
- **Payments** → PayPal & Stripe SDKs  
- **State Management** → Zustand + React Hook Form + Zod  

---

## 📘 Lessons / Roadmap  

This project covers **37 lessons**, from setup to advanced features:  

1. Create Next.js App  
2. Layout (Header, Footer, Sidebar)  
3. Home page with Carousel & Sliders  
4. Connect MongoDB & Seed Products  
5. Product Details Page  
6. Cart Management & Sidebar  
7. Authentication (Email, Google, Magic Link)  
8. Checkout + Place Order  
9. Pay with **PayPal** & **Stripe**  
10. Customer Dashboard (Profile, Orders)  
11. Admin Dashboard (Products, Orders, Users)  
12. CMS Pages, Settings, Multilingual  

…and much more 🚀  

---

## ⚡ Getting Started  

### 1️⃣ Clone the repository  
```bash
git clone https://github.com/fawazv/nxt-cart.git
cd nxt-cart
```

### 2️⃣ Create Environment File  
Copy `.example-env` → `.env.local` and set:  
```env
MONGODB_URI=your_mongodb_connection_string
```

### 3️⃣ Setup Database  

**Cloud MongoDB** → [Create a cluster](https://www.mongodb.com/)  
**Local MongoDB** → [Download & Install](https://www.mongodb.com/try/download/community)  

### 4️⃣ Seed Data  
```bash
npm run seed
```

### 5️⃣ Install & Run  
```bash
npm install --legacy-peer-deps
npm run dev
```

### 6️⃣ Access App  
- Open [http://localhost:3000](http://localhost:3000)  

**Admin Login**  
- Email: `admin@example.com`  
- Password: `123456`  

---

## 📦 Key Dependencies  

- **UI & Styling** → Tailwind, Shadcn, Radix UI, Lucide Icons  
- **Forms & State** → React Hook Form, Zustand, Zod  
- **Payments** → Stripe, PayPal  
- **Auth** → NextAuth (Auth.js) with MongoDB Adapter  
- **Emails & Uploads** → Resend, Uploadthing, React Email  
- **Charts** → Recharts  
- **Markdown Support** → React Markdown, Markdown Editor Lite  

---

## 🎯 Learning Outcomes  

By building nxtcart, you’ll learn how to:  
- Build scalable apps with **Next.js 15 + Server Components**  
- Create beautiful UIs with **Shadcn UI + Tailwind**  
- Implement secure authentication & OAuth (NextAuth)  
- Work with **MongoDB & Mongoose** effectively  
- Validate forms with **React Hook Form + Zod**  
- Manage cart & state with **cookies + Zustand**  
- Integrate payments (**PayPal & Stripe**)  
- Build **Customer & Admin Dashboards**  
- Implement multilingual support with **next-intl**  
- Deploy production-ready apps to **Vercel**  

---

## 🚀 Deployment  

- Hosted on **Vercel** for serverless, scalable deployments.   

---

## 📜 License  

You are free to use, modify, and distribute it.  

---

👨‍💻 Developed with ❤️ by Mohammed Fawaz

