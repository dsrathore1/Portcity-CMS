<h1 align='center'>PORTCITY'S CMS</h1>

## Overview 🚀

The Portcity CMS is a modern web application built with NEXT.js, Node.js, Docker, MongoDB, TailwindCSS, Tailblocks, Vercel, and GitHub Actions. This application is designed to simplify the management and update process of your personal portfolio. It features a modular architecture with both backend and frontend components, enabling seamless CRUD (Create, Read, Update, Delete) operations on your portfolio projects.

## Features 🌟

- **User-Friendly Interface:** The frontend, powered by NEXT.js, provides an intuitive and responsive user experience for managing portfolio projects.

- **CRUD Operations:** The application supports basic CRUD operations, allowing you to effortlessly add, view, edit, and delete projects from your portfolio.

- **Modular Architecture:** Leveraging the power of NEXT.js for frontend and Node.js for backend, the application promotes code maintainability and scalability.

- **Docker Containerization:** The application is containerized with Docker, ensuring consistent and reliable deployment across different environments.

- **Database Integration:** MongoDB is used as a NoSQL database for storing and retrieving portfolio project data, with Mongoose simplifying interactions with the database.

- **TailwindCSS and Tailblocks:** The frontend is styled using TailwindCSS and Tailblocks, providing a customizable and modern design for your portfolio.

- **Vercel for Deployment:** Take advantage of Vercel for easy deployment and hosting, ensuring your portfolio is accessible globally.

- **GitHub Actions:** Automate the CI/CD pipeline with GitHub Actions, ensuring a smooth development workflow.

## Tech Stack 💻

### Frontend

- **NEXT.js:** A React framework for building server-rendered and statically generated web applications.

- **TailwindCSS:** A utility-first CSS framework for building modern designs with ease.

- **Tailblocks:** A collection of responsive and customizable blocks for TailwindCSS, speeding up frontend development.

### Backend

- **Node.js:** A runtime environment for executing JavaScript code on the server side.

- **Express.js:** A minimal and flexible Node.js web application framework for building robust APIs.

- **MongoDB:** A NoSQL database for storing and retrieving portfolio project data.

- **Mongoose:** An ODM (Object Data Modeling) library for MongoDB and Node.js, simplifying interactions with the database.

### Deployment

- **Docker:** Containerization platform for packaging the application and its dependencies.

- **Vercel:** Cloud platform for hosting and deploying applications with ease.

### CI/CD

- **GitHub Actions:** Automate workflows for building, testing, and deploying your application directly from your GitHub repository.

## Getting Started 🚦

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB database set up and accessible.
- Docker installed on your machine.

### Installation 🛠️

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/personal-portfolio-cms.git
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   cd personal-portfolio-cms/frontend
   npm install
   cd ../backend
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the `backend` directory and configure the necessary variables (e.g., database connection string, port).

4. Run the application:
   ```bash
   # Start the frontend
   cd ../frontend
   npm start

   # Start the backend
   cd ../backend
   npm start
   ```

5. Access the application in your browser at `http://localhost:3000`.

## Usage 🌐

1. Navigate to the application in your browser.

2. Log in to the CMS using your credentials.

3. Manage your portfolio by adding, editing, or deleting projects.

4. Save changes, and your portfolio is instantly updated.

## Contributing 🤝

Contributions are welcome! Please follow our [contribution guidelines](CONTRIBUTING.md).

## License 📝

This project is licensed under the [MIT License](LICENSE).
