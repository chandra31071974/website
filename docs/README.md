# Vritti Head Hunters

## Overview
Vritti Head Hunters is a full-stack web application designed to connect job seekers with potential employers. The application features a responsive design and includes functionalities for user registration, login, and job listings.

## Project Structure
The project is divided into two main parts: the backend and the frontend.

```
vritti-head-hunters
├── backend
│   ├── src
│   │   ├── app.js
│   │   ├── controllers
│   │   │   └── userController.js
│   │   ├── models
│   │   │   └── user.js
│   │   ├── routes
│   │   │   └── userRoutes.js
│   │   └── config
│   │       └── db.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── public
│   │   ├── index.html
│   │   ├── about.html
│   │   ├── services.html
│   │   ├── contact.html
│   │   └── careers.html
│   ├── src
│   │   ├── css
│   │   │   └── styles.css
│   │   ├── js
│   │   │   └── main.js
│   │   └── assets
│   └── README.md
├── .gitignore
└── README.md
```

## Technologies Used
- **Frontend**: HTML, CSS (Vanilla or Bootstrap), JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.
- MongoDB installed and running.

### Backend Setup
1. Navigate to the `backend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   npm start
   ```
4. The backend will be running on `http://localhost:5000`.

### Frontend Setup
1. Navigate to the `frontend` directory.
2. Open the `public/index.html` file in your browser to view the application.

## Features
- User registration and login
- Job listings with filters
- Contact form for inquiries
- Responsive design for mobile and desktop views

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.