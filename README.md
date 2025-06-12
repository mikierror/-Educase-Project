
# 🔐 PopX User Authentication App

A responsive, modern user authentication interface built with **React**, **React Router**, **TailwindCSS**, and **Vite**. This project includes functionality for account creation, login validation using `localStorage`, and dynamic user profile rendering.

---

## 📸 Preview![Vite + React - Google Chrome 6_12_2025 5_58_21 PM](https://github.com/user-attachments/assets/38edd9f5-528f-4cd2-99b4-af2fffdf2f6f)![Vite + React - Google Chrome 6_12_2025 5_56_57 PM](https://github.com/user-attachments/assets/e74e1725-e4c1-4f87-8fa1-020a04191ae3)![Vite + React - Google Chrome 6_12_2025 5_56_43 PM](https://github.com/user-attachments/assets/f6ef8b2a-b986-43e8-a2fa-e176b96f9fbe)



## 📁 Project Structure

src/
├── Components/
│ ├── LandingScreen.jsx
│ ├── SignupPage.jsx
│ ├── LoginScreen.jsx
│ └── Profile.jsx
├── Routing/
│ └── appRouter.jsx
├── App.jsx
└── main.jsx


---

## ⚙️ Features

- ✅ **Create Account** page with full form validation
- ✅ **Login Screen** that validates user credentials from `localStorage`
- ✅ **Dynamic Profile Page** using stored user data
- ✅ Conditional rendering and error handling
- ✅ Mobile-first UI using Tailwind CSS
- ✅ Page routing with React Router v6

---

## 🚀 Tech Stack

- **React 18**
- **React Router DOM**
- **TailwindCSS**
- **Vite**
- **Remix Icons**

---

## 📦 Dependencies

Install all with:

```bash
npm install
Key dependencies:

json
Copy
Edit
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-router-dom": "^6.22.3",
"@remixicon/react": "^1.3.0",
"tailwindcss": "^3.4.1",
"vite": "^5.2.0",
"autoprefixer": "^10.4.17",
"postcss": "^8.4.33"
🧪 How to Run Locally

# Clone the repo
git clone https://github.com/mikierror/-Educase-Project.git

# Move into directory
cd popx-auth-app

# Install dependencies
npm install

# Run the app
npm run dev

📷 Screens Included
LandingScreen – Welcome screen with navigation

SignupPage – Account creation form (stored in localStorage)

LoginScreen – Validates credentials and navigates to profile

Profile – Displays user info (name, email, dummy description)

🔒 Login Validation
Compares input with localStorage.getItem('user')

Displays error if credentials are incorrect

Navigates to profile page on success

🧠 Learning Outcomes
Mastered useState, useNavigate, localStorage

Developed mobile-first UIs with TailwindCSS

Used React Router for clean routing

Managed user state with form-controlled components

📬 Contact
Made with ❤️ by Suryansh Kaintura
Feel free to connect on LinkedIn or drop a ⭐ on this repo!

---

Would you like me to generate this `README.md` as a downloadable file? Or push it directly to your repo with instructions?



=======
# PopX Auth UI

A simple React-based authentication UI with signup, login, and profile page using localStorage. Built with Vite + TailwindCSS.

## Features
- Signup page with form validation
- Login with credential verification
- Profile page displaying dynamic user data
- Fully responsive for mobile (390x844)

## Tech Stack
- React (Vite)
- TailwindCSS
- React Router
- LocalStorage for temporary data storage

## How to Run

```bash
npm install
npm run dev
>>>>>>> 77dfc86 (Fix login and signup flow with localStorage integration)
