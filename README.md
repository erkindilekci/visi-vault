# VisiVault

## Overview
This project is a web application that helps people manage their contacts. The backend is built with Java and Postgres, while the frontend is developed using React and JavaScript.

## Screenshot
![313451412-a023d97d-0930-45fd-9df3-29cb247139c7](https://github.com/user-attachments/assets/0df3e679-cd63-4e11-adbd-13696e8b587d)
![313451417-f126018f-c9eb-4a6f-a4d5-dc17bfcf788c](https://github.com/user-attachments/assets/fe38171f-2391-473c-a734-b877172b0122)
![313451415-e1d389ca-4dde-46ca-8bd2-b4a1b0452fd2](https://github.com/user-attachments/assets/cee8925a-693f-4d8b-bd08-b1628e8a7c44)

## Technologies

### Backend
- **Java**: A high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible.
- **Postgres**: A powerful, open-source object-relational database system with a strong reputation for reliability and performance.
- **Spring Boot**: A framework that simplifies the development of new Spring applications, providing a range of non-functional features common to large classes of projects.
- **Lombok**: A Java library that automatically plugs into your editor and build tools, spicing up your Java.
- **Spring Data JPA**: A part of the larger Spring Data family, makes it easy to implement JPA-based repositories.
- **Spring Dotenv**: A library to load environment variables from a `.env` file into the Spring application context.

### Frontend
- **React**: A JavaScript library for building user interfaces, maintained by Facebook and a community of individual developers and companies.
- **Vite**: A build tool that aims to provide a faster and leaner development experience for modern web projects.
- **Axios**: A promise-based HTTP client for the browser and Node.js.
- **React Router**: A collection of navigational components that compose declaratively with your application.
- **React Toastify**: A library to add notifications to your app with ease.
- **ESLint**: A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom user interfaces.

## Getting Started

### Prerequisites
- Java 17 or later
- Node.js 14.x or later
- Postgres 12 or later

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/erkindilekci/visivault.git
   cd visivault
   ```

2. **Backend Setup:**
   ```sh
   cd server
   ./mvnw clean install
   ```

3. **Frontend Setup:**
   ```sh
   cd client
   npm install
   npm run dev
   ```

### Running the Application

1. **Start the Backend:**
   ```sh
   cd server
   ./mvnw spring-boot:run
   ```

2. **Start the Frontend:**
   ```sh
   cd client
   npm run dev
   ```

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
