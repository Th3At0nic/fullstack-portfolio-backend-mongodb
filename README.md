# ts-express-mongo-initializer

A simple and reusable project initializer for backend applications using **TypeScript**, **Express**, and **MongoDB** (Mongoose). This starter setup can be used to quickly kick off your projects, saving time on repetitive configurations and setup tasks. It's designed to be easy to use and extend for future projects.

## Features:

- Express server setup with TypeScript
- MongoDB/Mongoose connection
- Preconfigured ESLint and Prettier for consistent code style
- Basic routes and middleware setup (e.g., CORS, JSON parsing)
- Ready-to-go TypeScript compilation and execution with `ts-node-dev`
- Simple structure with modular components for easy scaling

## Getting Started

To use this initializer in your future projects, follow these steps:

### 1. Clone the repository (when you're ready to use it in a future project)

When you're ready to use this initializer for a new project, clone the repository to your local machine.

```bash
git clone https://github.com/Th3At0nic/ts-express-mongo-backend-initializer.git
```

### 2. Install dependencies

After cloning, navigate to the project folder and install the required dependencies.

```bash
cd ts-express-mongo-initializer
npm install
```

This will install all the necessary dependencies, including **Express**, **Mongoose**, **TypeScript**, and development tools like **ESLint**, **Prettier**, and **ts-node-dev**.

### 3. Set up your MongoDB connection

To use MongoDB, make sure you have a running MongoDB instance. You can either:

- Use a local MongoDB server, or
- Use a cloud-based service like MongoDB Atlas.

Configure your MongoDB URI in `src/config/db.ts` (you can modify the file to suit your preferred configuration).

```ts
// Example MongoDB URI setup
export const MONGO_URI = 'mongodb://your-database';
```

### 4. Run the project

After the setup, you can run the project with the following command:

- **In development mode:**

```bash
npm run start:dev
```

This will start the Express server using `ts-node-dev` with automatic restarts on code changes.

- **In production mode:**

```bash
npm run start:prod
```

This will compile the TypeScript code and run it using Node.js.

### 5. Additional Commands

- **Build the project (compile TypeScript):**

```bash
npm run build
```

- **Run TypeScript in watch mode (auto-compiles on change):**

```bash
npm run watch:dev
```

- **Run the linter (ESLint):**

```bash
npm run lint
```

- **Automatically fix linting issues:**

```bash
npm run lint:fix
```

- **Format your code using Prettier:**

```bash
npm run format
```

---

By following these steps, you can use this initializer to jumpstart your future projects. The modular structure allows you to add more features or extend it according to your needs.

```

This version is ready for you to copy and paste directly into your README. All necessary commands are included inside the content.
```
