# EncryptAndDecryptRepo
Encrypt and Decrypting the String
# Project Name

This repository contains both the **Spring Boot Backend** and **React (Vite) Frontend** for the project.

## 📌 Project Structure

```
my-project/
│── backend/   # Spring Boot API (Java)
│── frontend/  # React (Vite) App
│── README.md
```

## 🚀 Getting Started

### **Backend - Spring Boot API**

#### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo/backend
```

#### **2️⃣ Open in Spring Tool Suite (STS) or IntelliJ**
- Import the project as a **Maven project**.
- Ensure `application.properties` is configured correctly.

#### **3️⃣ Run the Spring Boot Application**
- **Using STS:** Click `Run As → Spring Boot App`
- **Using Terminal:**
  ```bash
  mvn spring-boot:run
  ```
- The API should start on: `http://localhost:8080/`

---

### **Frontend - React (Vite)**

#### **1️⃣ Navigate to Frontend Folder**
```bash
cd ../frontend
```

#### **2️⃣ Install Dependencies**
```bash
npm install
```

#### **3️⃣ Run the React App**
```bash
npm run dev
```

#### **4️⃣ Access the Application**
- Open `http://localhost:5173/` in your browser.

---

## 📤 Pushing to GitHub

#### **1️⃣ Initialize Git (if not already done)**
```bash
git init
```

#### **2️⃣ Add and Commit Changes**
```bash
git add .
git commit -m "Initial commit"
```

#### **3️⃣ Push to GitHub**
```bash
git remote add origin https://github.com/your-username/your-repo.git
git branch -M main
git push -u origin main
```

---

## 🔗 GitHub Repository Link
Once pushed, your GitHub repository will be available at:
```
https://github.com/your-username/your-repo
```

---

## ❓ FAQ

### **Can I keep backend and frontend in the same repo?**
✅ **Yes**, keeping them in one repository makes it easy to manage small projects.
🚀 **For larger projects**, you may prefer separate repositories for better CI/CD and collaboration.

---

## 📄 License
This project is licensed under the MIT License - see the `LICENSE` file for details.

