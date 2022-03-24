# API_RESERVATIONS

## Table of Contents

## Intorduction

## Objectives
- User
  - Register
  - Login
  - Logout (erase/cancel token?? OR change state from "logged in" to "logged out")
  - See list of past appointments
  - See list of future appointments
  - Cancel existing appointment
- Endpoints
  - User registration
    - Admin role
    - User role
  - User Login
  - User Logout
  - Pending appointments list
  - Appointment cancellation
  - Appointment creation

### Extra points
- Filter the appointment list by date
- If user has client role, can only see its own appointments
- If user has admin role, can see all appointments

### Tech requirements
- ES6
- async/await
- github and gitFlow
- full readme
- Heroku deployment
- authentication using JWT through middlewares
  - JwT must include user role
- only admins can create other admins

#### More extra points
- Usage of images or gifs in readme