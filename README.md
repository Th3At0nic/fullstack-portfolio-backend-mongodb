# MongoDB Backend Initializer

A minimal and reusable TypeScript + Express backend starter project with MongoDB support, pre-configured with error handling, middleware, validation, and utility folders. Ideal for quick project bootstrapping.

## 🚀 Features

- **Express + TypeScript** boilerplate
- **Mongoose** for MongoDB ORM
- **Zod** for schema validation
- **Custom error handling** (Zod, Mongoose, Cast, Duplicate, etc.)
- **Middleware structure** (Auth, NotFound, GlobalErrorHandler, etc.)
- **Modular folder structure**
- **Pre-configured scripts** for development, linting, and formatting
- **Utils, config, interfaces, and modules** folders ready to scale
- **Cloudinary**, **Multer**, and **bcrypt** included for image uploads & password hashing

## 📁 Project Structure
src/
├── app/
│ ├── middlewares/
│ ├── error/
│ ├── routes/
│ ├── utils/
│ ├── interfaces/
│ ├── config/
│ └── modules/
├── server.ts
.env # Add your environment variables here
