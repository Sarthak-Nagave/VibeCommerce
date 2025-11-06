```markdown
# 🛒 VibeCommerce — Full Stack Mock E-Commerce Cart

A modern **full-stack mock shopping cart web app** built for the **Vibe Commerce Coding Assessment**.  
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
| **Database** | SQLite (via Drizzle ORM, auto-seeded on startup) |
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

```

VibeCommerce/
├── client/                # React frontend
│   ├── src/
│   │   ├── components/    # UI + logic (Products, Cart, Checkout)
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utilities & helper functions
│   │   └── pages/         # Page views (Home, Not Found)
│   ├── public/            # Static assets
│   ├── index.html         # Vite entry point
│   └── package.json
│
├── server/                # Express backend
│   ├── index.ts           # Main entry
│   ├── routes.ts          # API endpoints
│   ├── storage.ts         # SQLite / mock DB setup
│   ├── vite.ts            # Vite integration
│   └── package.json
│
├── shared/                # Shared schema/types between frontend & backend
│   └── schema.ts
│
├── .gitignore
├── README.md
└── LICENSE

````

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/<your-username>/VibeCommerce.git
cd VibeCommerce
````

### 2️⃣ Install Frontend Dependencies

```bash
cd client
npm install
npm run build
```

### 3️⃣ Install Backend Dependencies

```bash
cd ../server
npm install
npm run build
npm start
```

### 4️⃣ Access Application

Visit 👉 [http://127.0.0.1:5000](http://127.0.0.1:5000)

You’ll see the **VibeCommerce App** with mock products, a working cart, and a checkout flow.

---

## 🧮 Example Checkout Flow

1. Open [http://127.0.0.1:5000](http://127.0.0.1:5000)
2. Browse the product grid
3. Click **Add to Cart**
4. Open the **Cart View** to update quantity or remove items
5. Proceed to **Checkout**, fill mock name & email
6. Receive a **receipt modal** showing total amount and timestamp

---

## 🎥 Demo Video

🎬 [Watch the Demo on Loom](https://www.loom.com/share/a18aea2e003240b9a274f2d60b72f27a)

---

## 🧰 Development Commands

| Command                  | Description                                |
| ------------------------ | ------------------------------------------ |
| `npm run dev` (frontend) | Run frontend in Vite dev mode              |
| `npm run build`          | Build project for production               |
| `npm start` (backend)    | Start Express server (serving React build) |
| `npm run clean`          | Clean dist folders                         |

---

## 🧠 Troubleshooting Tips

⚠️ **Blank screen?**
Ensure `serveStatic()` in `vite.ts` correctly points to `../dist/public`.

⚙️ **Windows ENOTSUP error?**
Remove `reusePort` option (already fixed in this repo).

🔌 **Port in use?**
Stop any process on port `5000` before running `npm start`.

---

## 📜 License — MIT

This project is licensed under the [MIT License](./LICENSE).

---

## 👤 Author

**Sarthak Nagave**
📧 [sarthaknagave@gmail.com](mailto:sarthaknagave@gmail.com)
🌐 [GitHub — Sarthak-Nagave](https://github.com/Sarthak-Nagave)

---

### 🏷️ Tags

`#vibecommerce` `#fullstack` `#react` `#express` `#sqlite` `#ecommerce` `#vite` `#typescript` `#nodejs` `#coding-assessment`

````

---
