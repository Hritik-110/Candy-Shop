

# 🍭 Sweet Shop Inventory & Purchase Management System

A full-stack MERN web application for managing sweets, handling customer purchases, maintaining stock, and providing admin-level control for a sweet shop.

---

# 🌟 1. Project Summary

This application is designed to streamline sweet shop operations. It allows customers to browse and buy sweets, while admins can manage stock, update items, and track sales.
It features:

✔ Sweet listing, search, and purchase
✔ Admin CRUD operations
✔ JWT-based login system
✔ Order history for users
✔ Responsive modern UI made with Tailwind

---

# 🧰 2. Tech Stack

### **Frontend** (Run using `npm start`)

* React.js
* React Router
* Tailwind CSS
* Toast Notifications

### **Backend** (Run using `node server.js`)

* Node.js
* Express.js
* MongoDB (Mongoose ORM)
* JWT Authentication

---

# ⚙️ 3. How to Run the Project Locally

### 📌 Step 1 — Clone this repository

```bash
git clone https://github.com/<your-username>/sweet-shop-management-system.git
cd sweet-shop-management-system
```

---

# 🖥️ 4. Backend Setup

### 1. Move into backend folder

```bash
cd backend
```

### 2. Install required packages

```bash
npm install
```

### 3. Create a `.env` file inside backend

```
PORT=4000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret
```

### 4. Start the backend server

```bash
npm start
```

Backend will run on:
👉 [http://localhost:4000](http://localhost:4000)

---

# 🎨 5. Frontend Setup

### 1. Open frontend folder

```bash
cd ../frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the frontend

```bash
npm start
```

Frontend runs on:
👉 [http://localhost:3000](http://localhost:3000)

---

# 🧪 6. Testing

The project supports both manual API testing and automated test execution.

### Run backend tests

```bash
npm test
```

---

# 📊 7. Test Summary

| Test Case         | Description                    | Result   |
| ----------------- | ------------------------------ | -------- |
| User Signup       | Registers a new user           | ✔ Passed |
| User Login        | Valid credentials return token | ✔ Passed |
| Auth Middleware   | Restricts unauthorized access  | ✔ Passed |
| Add Sweet (Admin) | Admin adds sweet item          | ✔ Passed |
| Purchase Sweet    | Creates user order             | ✔ Passed |
| View Orders       | User sees own order list       | ✔ Passed |
| Pagination        | Works for sweet listing        | ✔ Passed |

All tests executed successfully.

---

# 🖼️ 8. Screenshots

All screenshots are available inside:

```
project-root/
 ├── backend/
 ├── frontend/
 ├── screenshots/   ← All preview images stored here
 └── README.md
```

---

# 🤖 9. Use of AI in This Project (Required)

Portions of this project were created with assistance from AI tools (ChatGPT).
AI was mainly used for:

* UI/UX improvement ideas
* Code optimization suggestions
* Writing reusable frontend components
* Drafting backend controller logic
* Enhancing Tailwind styling patterns
* Structuring this README file

All final code was written, reviewed, tested, and organized manually by the developer.

---

# 👨‍💻 10. Developer

**Hritik Rathore**
Full Stack (MERN) Developer

If you want, I can also:

✅ Rewrite your entire project folder structure to avoid duplication
✅ Rewrite backend routes/controllers uniquely
✅ Rewrite frontend components in a different coding style

Just send the folder or selected files.
