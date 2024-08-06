<div align="center">
  <p align="center"><img src="./client-side/client/public/neko-logo.png" alt="Logo" width="200" height="200"></p>
  <h1 style="border: none;">Nekomics: Comic reading website using MangaDex API</h1>
  <div>
    <img src="https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D" alt="vuejs" />
    <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="javascript" />
    <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="postgresql" />
    <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="supabase" />
    <img src="https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34" alt="firebase" />
  </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)

## <a name="introduction">🤖 Introduction</a>

Welcome to Nekomics, your ultimate destination for reading comics from MangaDex. Our responsive platform offers a seamless reading experience for comics from Japan and around the world. Users can log in to save bookmarks and reading history. Additionally, we have integrated Midtrans for donations, allowing generous readers to support us directly.
<br /><br />
<img src="image.png" alt="Project Banner">

## <a name="tech-stack">⚙️ Tech Stack</a>

### Client-Side:
- Vue.js
- Pinia
- Vue Router
- Vue Disqus
- Vue3 Toastify
- TailwindCSS
- Axios

### Server-Side:
- Express
- Sequelize
- PostgreSQL
- Midtrans
- Bcryptjs
- JSON Web Token (JWT)
- CORS
- Axios

## <a name="features">🔋 Features</a>

👉 **Comic Reader Features**:

- Responsive design with TailwindCSS.
- User authentication for saving bookmarks and reading history.
- Integration with MangaDex API for a wide variety of comics.
- Midtrans payment integration for donations.
- Commenting system using Vue Disqus.
- Toast notifications with Vue3 Toastify.

👉 **Development Best Practices**:

- Modular and reusable components.
- State management with Pinia.
- Form validation and error handling.
- Secure user authentication with JWT and bcryptjs.
- Environment configuration with dotenv.
- Automated server restarts with Nodemon.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [PostgreSQL](https://www.postgresql.org/)

**Cloning the Repository**

```bash
git clone https://github.com/Firkhie/nekomics-app.git
cd nekomics-app
```

### Client-Side:

**Package Installation**

Install the project dependencies using npm:

```bash
cd client-side\client
npm i
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

### Server-Side:

**Package Installation**

Install the project dependencies using npm:

```bash
cd server-side
npm i
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
JWT_SECRET_KEY=
MIDTRANS_SERVER_KEY=

DB_USER=
DB_PASSWORD=
DB_HOST=
DB_PORT=
```

Replace the placeholder values with your actual respective account credentials.

**Initiate Project For the First Time**

Create PostgreSQL database, migrating, and seeding the database

```bash
npm run init
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

#
