# 🛒 VibeCommerce — Full Stack Mock E-Commerce Cart

A modern, full-stack mock shopping cart web app built for the **Vibe Commerce Coding Assessment**.  
This project demonstrates complete **frontend–backend integration** using **React (Vite)**, **Node.js/Express**, and **SQLite**, featuring realistic e-commerce flows like viewing products, adding/removing cart items, calculating totals, and performing a mock checkout.

---

## 🚀 Features

✅ Full-stack e-commerce workflow  
✅ RESTful API integration (Express backend)  
✅ SQLite database persistence for products & cart  
✅ Add, update, and remove items from cart  
✅ Auto-calculated totals & mock checkout receipts  
✅ Responsive, modern UI (TailwindCSS)  
✅ Clean project structure for frontend and backend  
✅ Cross-platform build (works on Windows, macOS, and Replit)

---

## 🧠 Tech Stack

| Layer | Technologies Used |
|--------|------------------|
| **Frontend** | React, TypeScript, Vite, TailwindCSS |
| **Backend** | Node.js, Express.js, TypeScript |
| **Database** | SQLite (using Drizzle ORM / seed on startup) |
| **Build Tools** | Vite, esbuild |
| **Version Control** | Git & GitHub |
| **License** | MIT License |

---

## 📦 API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| `GET` | `/api/products` | Fetch 5–10 mock product items (id, name, price) |
| `POST` | `/api/cart` | Add item to cart `{ productId, qty }` |
| `DELETE` | `/api/cart/:id` | Remove item from cart |
| `GET` | `/api/cart` | Get all cart items with computed total |
| `POST` | `/api/checkout` | Mock checkout (returns total + timestamp receipt) |

---

## 🧩 Folder Structure

VibeCommerce/
├── client/ # React frontend
│ ├── src/
│ │ ├── components/ # Reusable UI + pages (Products, Cart, Checkout)
│ │ ├── hooks/ # Custom React hooks
│ │ ├── lib/ # Helper functions
│ │ └── pages/ # Page views (Home, Not Found)
│ ├── public/ # Static assets & favicon
│ ├── index.html # Vite entrypoint
│ └── package.json
│
├── server/ # Express backend
│ ├── index.ts # Main entry
│ ├── routes.ts # API endpoints
│ ├── storage.ts # SQLite or mock DB setup
│ ├── vite.ts # Vite integration for dev/prod
│ ├── dist/ # Built output
│ └── package.json
│
├── shared/ # Shared schema/types between frontend & backend
│ └── schema.ts
│
├── .gitignore
├── README.md
└── LICENSE

yaml
Copy code

---

## ⚙️ Installation & Setup

##1️⃣ Clone Repository

```bash
git clone https://github.com/<your-username>/VibeCommerce.git
cd VibeCommerce

##2️⃣ Install Frontend Dependencies
bash
Copy code
cd client
npm install
npm run build

##3️⃣ Install Backend Dependencies
bash
Copy code
cd ../server
npm install
npm run build
npm start

4️⃣ Access Application
Visit 👉 http://127.0.0.1:5000
You’ll see the VibeCommerce app with mock products, cart view, and checkout flow.

🧮 Example Checkout Flow
Open http://127.0.0.1:5000

Browse product grid

Click Add to Cart

Open the Cart View to update quantity or remove items

Proceed to checkout and submit mock details (name/email)

Receive a receipt modal showing total amount and timestamp

##🎥 Demo Video
🎬 https://www.loom.com/share/a18aea2e003240b9a274f2d60b72f27a

🧰 Development Commands
Command	Description
npm run dev (frontend)	Run frontend in Vite dev mode
npm run build	Build project for production
npm start (backend)	Start Express server serving React build
npm run clean	Clean dist folders

🧠 Troubleshooting Tips
If you see a blank screen → ensure serveStatic() in vite.ts points to ../dist/public

If npm start fails with ENOTSUP, remove reusePort (Windows issue — already fixed in this repo)

Ensure ports 5000 (backend) are free before starting

📜 License — MIT

👤 Author
Sarthak Nagave
📧 sarthaknagave@gmail.com
🌐 https://github.com/Sarthak-Nagave

#vibecommerce #fullstack #react #express #sqlite #ecommerce #vite #typescript #nodejs #coding-assessment
