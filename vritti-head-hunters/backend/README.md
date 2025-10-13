# Vritti Head Hunters Backend

## Overview
This is the backend for the Vritti Head Hunters project, built using Node.js, Express.js, and MongoDB. The backend handles user-related operations such as registration and login, and serves as the API for the frontend application.

## Prerequisites
- Node.js (version 14 or higher)
- MongoDB (local or cloud instance)
- npm (Node Package Manager)

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd vritti-head-hunters/backend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Set up your MongoDB connection:
   - Create a `.env` file in the `backend` directory and add your MongoDB URI:
     ```
     MONGODB_URI=<your-mongodb-uri>
     ```

## Running the Server
To start the server, run the following command:
```
npm start
```
The server will start on `http://localhost:5000` (or the port specified in your app).

## API Endpoints
- **POST /api/users/register**: Register a new user.
- **POST /api/users/login**: Log in an existing user.

## Folder Structure
```
backend
├── src
│   ├── app.js
│   ├── controllers
│   │   └── userController.js
│   ├── models
│   │   └── user.js
│   ├── routes
│   │   └── userRoutes.js
│   └── config
│       └── db.js
├── package.json
└── README.md
```

## License
This project is licensed under the MIT License. See the LICENSE file for details.