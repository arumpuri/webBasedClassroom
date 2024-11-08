# webBasedClassroom
## Overview
This document outlines the key features, technologies, installation, and usage of the web-based classroom application. This MOOC app enables users to sign up for courses, access learning materials, complete assignments, and receive certifications upon course completion.

## Features
* User Authentication: Secure sign-up and login using JWT (JSON Web Tokens).
* Course Management: Instructors can create, update, and delete courses.
* Enrollment System: Students can enroll in courses and access materials.
* Quizzes & Assignments: Integrated quizzes and assignments for each course.
* Certificates: Automatic certificate generation upon course completion.

## Technologies Used
* Frontend: React with Vite for fast development.
* Backend: Express.js as a server framework.
* Database: MongoDB for managing users, courses, and assignments.

## Installation Guide
**Clone the Repository**
```
git clone https://github.com/yourusername/mooc-web-classroom.git
cd mooc-web-classroom

```
**Backend Setup**
* Navigate to the /server folder:
```
cd server
```
* Install dependencies:
```
npm install

```
* Set up environment variables by creating a `.env` file with the following:
```
PORT=5000
MONGO_URI=<your-mongo-db-uri>
JWT_SECRET=<your-secret-key>

```
* Run the backend server:
```
npm start

```
**Frontend Setup**
* Navigate to the `/client` folder::
```
cd client

```
* Install dependencies:
```
npm install

```
* Set up environment variables by creating a `.env` file in `/client`:
```
VITE_API_URL=http://localhost:5000

```
* Run the backend server:
```
npm run dev

```
**Database Setup**
Ensure that MongoDB is installed and running. If you are using MongoDB Atlas, ensure your connection string is correct in the `.env` file.

## Prerequisites
Before setting up the project, ensure you have the following installed:

* Node.js (v16 or higher)
* MongoDB
* Git

## API Documentation

### Authentication
POST `/api/auth/register`
Registers a new user (student or instructor).
Body parameters:
* name: Full name of the user.
* email: Email address of the user.
* password: Password for the account.
POST `/api/auth/login`
Logs in a user and returns a JWT token.
Body parameters:
* email: Email address.
* password: Account password.
  
### Courses
GET `/api/courses`
Fetches all available courses.
Response:
Array of course objects, including title, description, instructor, and enrollment_count.
POST `/api/courses`
Creates a new course (Instructor only).
Body parameters:
* title: Title of the course.
* description: Course description.
* price: Cost of the course (if applicable).
  
### Enrollment
POST `/api/enroll`
Enrolls a student in a course.
Body parameters:
* courseId: The ID of the course to enroll in.
GET `/api/enroll/:userId`
Fetches all courses a user is enrolled in.
### Real-Time Chat
The application uses Socket.io for real-time communication between students and instructors. When enrolled in a course, users can participate in course-specific chats.

### Assignment & Quiz System
**Quizzes**
Each course can have quizzes, which are created by the instructor.
POST `/api/quiz`: Creates a new quiz for a course.
**Assignments**
Students can submit assignments through the system. Instructors can grade them.
POST `/api/assignments/submit`: Submits an assignment for grading.
### Certificates
Upon course completion, students will receive a certificate. The certificate is generated and sent to their email.


