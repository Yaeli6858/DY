# Daat Yehudit Management System

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express%205-339933?style=flat&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose%208-47A248?style=flat&logo=mongodb)
![MUI](https://img.shields.io/badge/MUI-7.3.4-007FFF?style=flat&logo=mui)

## Overview

Daat Yehudit is a comprehensive full-stack web application designed for managing financial and administrative operations of a religious organization. The system handles donor management, avrechim (scholars) tracking, debt management, expenses, and various financial summaries. It provides a user-friendly interface for administrators to oversee donations, yahrzeits, milgot (scholarships), and organizational links.

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [API Overview](#api-overview)
- [Database](#database)
- [Authentication & Authorization](#authentication--authorization)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [UI Design](#ui-design)
- [UI Screenshots](#ui-screenshots)

---

## Features

- **Donor Management**: Add, edit, and track donors with donation history, yahrzeit information, and contact details
- **Avrechim Tracking**: Manage scholars with personal details, activity status, and associated milgot
- **Debt Management**: Track given and taken debts with payment status
- **Expense Tracking**: Record and categorize organizational expenses
- **Financial Summaries**: Generate comprehensive financial reports with filtering capabilities
- **Milgot Management**: Handle scholarship assignments and tracking
- **Link Management**: Store and organize important organizational links
- **Email Notifications**: Automated email services for reminders and notifications
- **Data Export**: Export donor and avrechim details to Excel format
- **Responsive UI**: Modern Material-UI based interface

## Architecture

The application follows a modular full-stack architecture:

- **Frontend**: React single-page application with component-based structure
- **Backend**: Express.js REST API server with MVC pattern
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT-based authentication system
- **Background Jobs**: Cron jobs for automated tasks (donations, emails)
- **Email Service**: Nodemailer integration for notifications

## Tech Stack

### Frontend
- React 19.2.0
- Material-UI (MUI) 7.3.4
- React Router DOM 7.9.4
- Axios 1.12.2
- React Hook Form 7.69.0
- Yup validation
- XLSX for Excel export

### Backend
- Node.js
- Express 5.1.0
- MongoDB with Mongoose 8.15.1
- JWT for authentication
- bcrypt for password hashing
- Nodemailer 7.0.10
- CORS support

### Development Tools
- Nodemon for development
- Create React App
- ESLint

## API Overview

The REST API provides endpoints for all major entities:

- `/api/donors` - Donor management (CRUD operations, donations, yahrzeits)
- `/api/avrechim` - Avrechim management (CRUD, milgot assignment)
- `/api/expenses` - Expense tracking
- `/api/debts` - Debt management (given/taken debts)
- `/api/links` - Link management
- `/api/integration` - Integration endpoints
- `/api/user/login` - User authentication
- `/api/user/register` - User registration

All endpoints return JSON responses with appropriate HTTP status codes.

## Database

The application uses MongoDB as the primary database with the following main collections:

- **Donors**: Donor information, contact details, donation history
- **Avrechim**: Scholar details, activity status, milgot assignments
- **Debts**: Debt records with payment tracking
- **Expenses**: Expense entries with categorization
- **Milgot**: Scholarship information and assignments
- **Links**: Organizational links and resources
- **Users**: User accounts for authentication

## Authentication & Authorization

- **Registration**: User registration with username, password, name, email, and phone
- **Login**: JWT-based authentication
- **Password Security**: bcrypt hashing for secure password storage
- **Session Management**: JWT tokens for maintaining user sessions

## Prerequisites

Before running this application, ensure you have the following installed:

- Node.js (version 14 or higher)
- npm or yarn package manager
- MongoDB database (local or cloud instance)
- Git for version control

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Devora9249/Daat-Yehudit-Management
   cd Daat-Yehudit-Management
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Set up environment variables**
   Create a `.env` file in the server directory with:
   ```
   PORT=1111
   DATABASE=mongodb://localhost:27017/daatyehudit
   JWT_SECRET=your-secret-key
   MAIL_HOST=smtp.example.com
   MAIL_PORT=587
   MAIL_USER=your-email@gmail.com
   MAIL_PASS=your-email-password
   EMAIL_RECIPIENT=recipient@example.com
   ```

5. **Start MongoDB**
   Ensure MongoDB is running on your system.

6. **Start the backend server**
   ```bash
   cd server
   npm run dev
   ```

7. **Start the frontend client**
   ```bash
   cd ../client
   npm start
   ```

8. **Access the application**
   Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
DaatYehudit/
├── client/                          # React frontend
│   ├── public/                      # Static assets
│   ├── src/
│   │   ├── Components/              # React components
│   │   │   ├── Alerts/              # Notification components
│   │   │   ├── Avrechim/            # Avrechim management
│   │   │   ├── Debts/               # Debt management
│   │   │   ├── Donors/              # Donor management
│   │   │   ├── Expenses/            # Expense tracking
│   │   │   ├── FinanceSummary/      # Financial reports
│   │   │   ├── GeneralComponents/   # Shared components
│   │   │   ├── Links/               # Link management
│   │   │   └── Milgot/              # Scholarship management
│   │   ├── MainDesign/              # Theme and styling
│   │   ├── Validation/              # Form validation
│   │   ├── App.js                   # Main app component
│   │   └── index.js                 # App entry point
│   └── package.json
├── server/                          # Express backend
│   ├── config/                      # Configuration files
│   ├── controllers/                 # Route handlers
│   ├── cron/                        # Scheduled tasks
│   ├── MailService/                 # Email utilities
│   ├── models/                      # MongoDB models
│   ├── routes/                      # API routes
│   ├── server.js                    # Server entry point
│   └── package.json
├── package.json                     # Root package file
└── README.md                        # This file
```

## UI Design

The entire application theme is defined in a single file: `client/src/MainDesign/theme.js`, using Material-UI's `createTheme`. This centralized approach makes it easy to update the look and feel of the whole app from one place.

**Color palette:** The design uses deep red (`#b71c1c`) as the primary brand color, with dark red (`#7f0000`) for hover states and headings, against a clean light gray background (`#f5f5f5`) and white cards.

**Typography:** All text uses the **Rubik** font (with Arial as fallback), which gives the interface a modern, rounded feel well-suited for Hebrew content. Headings are bold and centered in the brand red color.

**Custom component variants:**
- Buttons come in several variants: `addButton`, `miniButton`, `activeButton`, and `iconButton` — each tailored for a different action context
- Cards support `donorCard` and `linkCard` variants with hover animations (a smooth upward lift effect)
- Tables have styled headers with a soft red background (`#ffe6e6`) and centered text throughout
- Dialogs are rounded with a subtle shadow, sized at 25vw for a focused modal experience
- TextFields support a `descriptionField` variant with a scrollable, resizable textarea

**RTL-ready:** The font choice (Rubik) and centered layout patterns are well-suited for Hebrew right-to-left content across all pages.

## UI Screenshots

<!-- Add screenshots here -->
