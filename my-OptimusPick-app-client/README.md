# 🛍️ Product Recommendation System

Welcome to the **Product Recommendation System** – a fully responsive MERN-stack-based platform where users can post queries about products, receive alternative recommendations, and interact with other users' feedback.

## 🌐 Live Website
[🔗 Visit Now](https://optimuspick-d386a.web.app/)

---


## 📂 GitHub Repository  
[📁 Client Side](https://github.com/yourusername/product-recommendation-client)  
[🛠️ Server Side](https://github.com/yourusername/product-recommendation-server)
---
## 🧾 Project Purpose

This project is built to showcase your full-stack development skills, with a focus on CRUD operations, authentication, and responsive design. The platform allows users to:

- Post queries about products they want to boycott or replace.
- Receive recommendations from others.
- Track personal queries and recommendations.
- View and explore recommendations made by others.

---

## 🚀 Key Features

### 🔐 Authentication
- Email/Password and Google-based login via Firebase.
- JWT token-based protected routes.
- Role-based navigation (Logged-in vs Guest users).

### 💬 Queries & Recommendations
- Add, update, delete personal product queries.
- Add, view, and delete recommendations.
- Real-time recommendation count management.
- Each user can see recommendations made *for them* and *by them*.

### 🔎 Search & Filter
- Search queries by product name.
- Dynamic grid layout toggle (1/2/3 columns).

### 🖼 UI/UX
- Responsive design (mobile/tablet/desktop).
- Animations and layout inspired by Quora and ThemeForest Q&A templates.
- Beautiful header, footer, and 404 page.
- Clean card-based design for content display.

---

## 📦 Tech Stack

### 🔧 Frontend
- **React Router DOM** – Client-side routing
- **Tailwind CSS** – Utility-first CSS
- **DaisyUI** – Styled UI components
- **React Icons** – Icon library
- **React Slick** & **Slick Carousel** – Homepage image slider
- **React Toastify** – Toast notifications
- **SweetAlert2** – Elegant alert modals
- **Axios** – Promise-based HTTP client

### 🔧 Backend
- **Node.js & Express** – REST API for queries and recommendations
- **MongoDB** – Data storage (queries, users, recommendations)
- **JWT** – Secure route access using tokens
- **Firebase** – Authentication and user management

---

## 🛡️ Security

- Environment variables used for Firebase and MongoDB credentials.
- JWT token securely stored and sent with protected route requests.
- Private routes protected using both Firebase Auth and JWT logic.

---

## 📄 Pages Overview

| Page Name              | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| Home                   | Hero slider, recent 6 queries, 2 creative animated sections                 |
| Login & Registration   | Firebase login with email/password and Google                              |
| Queries                | All user queries, search functionality, layout toggle                      |
| Query Details          | View single query, add/view recommendations                                |
| My Queries (Private)   | User-specific query management with Add/Update/Delete                      |
| My Recommendations     | Recommendations added by the user with delete option                      |
| Recommendations For Me | Recommendations received by the user's queries                            |
| Add Query (Private)    | Submit product boycott/replace query                                       |
| 404 Page               | Redirects to homepage on invalid routes                                    |

---

## 🔐 Private Route Protection

Implemented using:
- Firebase Authentication
- JWT Token-based route verification
- Redirect on unauthorized access
- Firebase domain whitelisting for Netlify/Vercel deployment

---
