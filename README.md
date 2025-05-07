# Job Portal

*Job Portal* is a *MERN Stack* web application that streamlines the job application process by allowing users to register as either **Applicants** or **Recruiters**. It features persistent login sessions, secure JWT-protected REST APIs, and a wide array of job-related functionalities tailored to each user role.

# 🔍 Features

# 👨‍💼 Recruiter:
- Create, update, and delete job listings
- View applicant resumes
- Shortlist, accept, or reject applications
- Edit personal profile

# 👨‍🎓 Applicant:
- View and search jobs with fuzzy search and multiple filters
- Apply to jobs by submitting a Statement of Purpose (SOP)
- Track application statuses
- Upload profile picture and resume
- Edit personal profile


# 📁 Directory Structure
```
- backend/
    - public/
        - profile/
        - resume/
- frontend/
- README.md
```

# Instructions for initializing web app:

- Install Node JS, MongoDB in the machine.
- Start MongoDB server: `sudo service mongod start`
- Move inside backend directory: `cd backend`
- Install dependencies in backend directory: `npm install`
- Start express server: `npm start`
- Backend server will start on port 4444.
- Now go inside frontend directory: `cd ..\frontend`
- Install dependencies in frontend directory: `npm install`
- Start web app's frontend server: `npm start`
- Frontend server will start on port 3000.
- Now open `http://localhost:3000/` and proceed creating jobs and applications by signing up in required categories.


# Dependencies:

- Frontend
  - @material-ui/core
  - @material-ui/icons
  - @material-ui/lab
  - axios
  - material-ui-chip-input
  - react-phone-input-2
- Backend
  - bcrypt
  - body-parser
  - connect-flash
  - connect-mongo
  - cors
  - crypto
  - express
  - express-session
  - jsonwebtoken
  - mongoose
  - mongoose-type-email
  - multer
  - passport
  - passport-jwt
  - passport-local
  - uuid

# Machine Specifications

Details of the machine on which the webapp was tested:

- Operating System: Elementary OS 5.1 (Hera)
- Terminal: Bash
- Processor: Intel Core i7-8750H CPU @ 2.20 GHz 2.21 GHz
- RAM: 16 GB

