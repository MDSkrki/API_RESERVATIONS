# API Dental Clinic Appointments

![logo clinica dental](https://vinti7.com/wp-content/uploads/2016/05/logos-de-dentistas-35.jpg)

[Click aquí para leer el README en Español](./README.md) 

## Table of Contents
- [API Dental Clinic Appointments](#api-dental-clinic-appointments)
  - [Table of Contents](#table-of-contents)
  - [Tech Stack🛠](#tech-stack)
  - [Description and How to Use 📋](#description-and-how-to-use-)
    - [Associations 🥨](#associations-)
    - [Endpoints ⛩](#endpoints-)
      - [User](#user)
      - [Patient](#patient)
      - [Doctor](#doctor)
      - [Visit](#visit)
  - [Environment variables 🥑](#environment-variables-)
  - [Middlewares and services 🔐](#middlewares-and-services-)
  - [Database 🔗](#database-)
  - [Useful commands 👀](#useful-commands-)
  - [Installation 🥷](#installation-)
  - [Pending tasks 🧙](#pending-tasks-)
  - [Authors 🤟](#authors-)
  - [How to contribute 🤝](#how-to-contribute-)
  - [Special thanks 💖](#special-thanks-)


## Tech Stack🛠

The following technologies have been used: 

<p align="left">     
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> 
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
  <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a>
  <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> 
  <a href="https://heroku.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40"/> </a> 
  <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img height="50" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png"> </a> 
  <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> 
  <a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a>
  
</a> 
</p>

Furthermore, the following libraries have been used for the project development:
- Environment: `NodeJs` 
- `Sequelize` ORM
- `MySQL` Relational Database Management System
- As dependency libraries: 
  - `JsonWebToken` for authentication throughout the API 
  - `Express`, `Mysql2` driver, `bcrypt`, `validator` and `dotenv`
- As development dependencies: `nodemon`
- Database GUI: `MySQL Workbench`
- Repository hosted by `GitHub`
- Deployed with `Heroku` at [https://mdskrki-api-reservations.herokuapp.com](https://mdskrki-api-reservations.herokuapp.com)

## Description and How to Use 📋

This is a project for the bootcamp with GeeksHubs Academy where we were asked to carry out the backend for the appointment handling of a Dental Clinic. <br/>
This is the first group project, wher two developers have participated, [Mihai Daniel Somkereki](https://github.com/MDSkrki) and [Alejandro Montero](https://github.com/alexmonpe). We have followed the _GitFlow_ philosophy and _Kanban_ agile methodology through Trello in order to organise and optimise task and time management.<br/>
Mihai created the repository in GitHub, with a basic scaffolding for an MVC architecture design pattern focused on Entities, for an easier organisation of files. After the scaffolding, we decided to fork the project in order to be able to work in parallel.<br/>
We have mainly worked on our own `develop` branch following the GitFlow philosophy, creating branches for new features and hotfixes. When we were sure the features were functional, we pushed them to the develop branch, and Alejandro sent Merge Requests to Mihai's repository. When the project was completed, it was pushed to the `master` branch for its deployment through Heroku.<br/>

For this project we have used `Sequelize` ORM in order to interact with the `MySQL` database where our first step was designing the Entity-Relations diagram of the appointment system: 

![ER Diagram](https://i.postimg.cc/SsQgbJvd/ER-Visits.png)

As you can see, we have separated 4 basic entities as *User*, *Patient*, *Doctor* and *Visit*.

- User Table:

It contains the required information for users to register in the system. It is associated to Patient and Doctor tables, where a user can only be associated to a patient or a doctor.

- Patient Table:

It contains additional information pertaining to the patients and a foreign key idUser that references the User associated to it. During a patient's registration, a user is created automatically for them, so they can log in and out of the app.

- Doctor Table:

It contains the additional information pertainig to the doctors and a foreign key idUser that references the User associated to it. Just as with Patients, a user is automatically created for them.

- Visit Table:

It contains the information about each appointment. It has two foreign keys, idDoctor and idPatient, that reference their associated tables. Dates are automatically created when appointments are initially made and updated thanks to Sequelize

### Associations 🥨

```
- User vs Patient 1:1
- User vs Doctor 1:1
- Doctor vs Patient n:m
- Doctor vs Visit 1:n
- Patient vs Visit 1:n
```

### Endpoints ⛩

#### User

```json
{
      "name": "userName",
      "lastname": "userLastName",
      "email": "userEmail@userDomain.com",
      "password": "userPassword",
      "phone_number": "userPhone"
} 
```

* _GET_ `/user` Returns all users / Only Doctors(admin) can perform this operation
* _GET_ `/user/login` Requires email and password through headers. If user exists, sets state to isLogged : true and gives token.
* _GET_ `/user/logout` Requires token through headers. If token is valid and user exists, isLogged sets to false (making token useless)
* _POST_ `/user` This endpoint can only be accessed by Doctors in order to create custom users, such as admins or any other type of users needed. Password introduced will be saved as hashed.
* _PATCH_ `/:id` Requires user's id through path params in order to update the user's fields / Only Doctors(admin) can perform this operation
* _DELETE_ `/:id` Requires user's id through path params in order to erase a user, including themselves(!!) / Only Doctors(admin) can perform this operation

#### Patient

```json
{
      "name": "yourName",
      "lastname": "yourLastName",
      "email": "example@example.com",
      "password": "yourPassword",
      "phone_number": "yourPhoneNumber",

      <!------ Patient Related Data ------>
      
      "sex": "yourSex",
      "birth_date": "YYYY-MM-DD",
      "age": "yourAge",
      "dni": "yourDNIwithLetter",
      "allergies": "yourAllergies",
      "address": "YourAdress"
    }
```

Post Visit as Patient 

```json
{
      "date": "YYYY-MM-DD hour:min:sec",
      "description": "visitDescription",
      "state": "pending/finished/cancelled",
      "idDoctor": idDoctor(INTEGER),
      "idPatient": iDPatient(INTEGER)
}
```

* _GET_ `/patient` Requires token through headers, shows patient's own data and user associated and can query by any of the fields / Can only be performed by Patients
* _GET_ `/patient/visits` Requires token through headers. Patient can see all his appointments and query by all fields (except by date) / Can only be performed by Patients
* _PATCH_ `/patient/visits/cancellation/:id` Requires token through headers and visit id through path params. Patient cn only update his own appointments.
* _POST_ `/visits/create` Requires token through headers. Can only create appointment for themselves. / Can only be performed by Patients
* _POST_ `/register` They need to introduce the data as in the example above. Patient and User are created at the same time, and password is saved directly as hashed. Automatically recieves 'Patient' role. / Free Access
* _PATCH_ `/patient` Requires token through headers. Patient can modify their patient-related data.
* _DELETE_ `/patient` Requires token through headers. Patient can erase his own data (does not erase his user-related data !!)

#### Doctor

```json 
{
      "name": "Yolanda",
      "lastname": "perez",
      "email": "yoly@api.com",
      "password": "yoly",
      "phone_number": "654675487",
      <!------ Doctor Data ------>
      "specialty": "trauma",
      "schedule": "mornings"
    }
```

For all endpoints related to doctors, a token will be required through headers and only Doctors(admin) will have access.

* _GET_ `/doctor` Returns all Doctors in database and associated user data.
* _POST_ `/register` Needs data as in the example above in order to create a Doctor with its user associated data. Will be assigned a 'Doctor' role.
* _PATCH_ `/doctor/:id` Requires id through path params. Will update the docotr-related data of the doctor with that id
* _DELETE_ `/doctor/:id` Requires id through path params. Can erase any doctor-related information

#### Visit

```json
{
      "date": "YYYY-MM-DD hour:min:sec",
      "description": "visitDescription",
      "state": "pending/finished/cancelled",
      "idDoctor": idDoctor(INTEGER),
      "idPatient": iDPatient(INTEGER)
}
```

Only doctors can access these endpoints through token in headers

* _GET_ `/visit` Returns all appointments in the database
* _POST_ `/visit` Needs the data as in example above in order to create a custom appointment.
* _PATCH_ `/visit/:id` Requires id through path params. Can update any appointment information.
* _DELETE_ `/visit/:id` Requires id through path params. Can delete any Appointment information.

## Environment variables 🥑

For another layer of security we have used the `dotenv` library so that the sensitive information cannot be visible. The following need to be configured: 

```
NODE_ENV=[yourEnv]
PORT=[yourPort]
DB_NAME=[yourDataBaseName]
DB_USERNAME=[userDataBase]
DB_PASSWORD=[userPasswordDataBase]
DB_HOST=[dataBaseUri]
DB_DIALECT=[mysql/mariaDB/Postgres]
JWT_SECRET=[secretKey] // this key is used to generate tokens with JsonWebToken
```

## Middlewares and services 🔐

We have separated some functionalities in order to improve code readability and cleanliness into a shared folder that contains:

**- Services**
* Functions that hash passwords and decode them using the bcrypt library, adding another security layer for passwords.
* Token generator and verifyer functions so the users can authenticate through the app safely and comfortably.
* Email validators, so it doesn't accept an item that doesn't resemble an email where needed.
* Function that checks if a user is logged in or not.

**- Middlewares**
* Just an authentication function that cheks through token if the user is authorised to access certain endpoints and if user is still logged in

**- Models**
* So far, and due to our lack of experience using sequelize, we had to crate a separate file where we declared all associations between tables and synchronised them in an orderly fashion.

## Database 🔗

This project required the use of relational databases, in this case MySQL as RDMS and Sequelize as ORM. In order to install them you need the following commands through the terminal:

_- Sequelize with mysql driver_

`npm i sequelize`
`npm i mysql2`

_- Mysql_

[https://dev.mysql.com/downloads/](https://dev.mysql.com/downloads/)

## Useful commands 👀

`npm run start` Starts the server and the API
`npm run dev` Starts the server and API through nodemon

_In both cases you are required to fill out your .env file with you own environment variables_

## Installation 🥷

In order to use the API, the following steps should be followed:
- Clone or fork the repository if you'd like: [**Mihai**](https://github.com/MDSkrki/API_RESERVATIONS), [**Alejandro](https://github.com/AlexMonPe/API_RESERVATIONS)
- Install MySQL
- _npm install_ in order to install all required dependencies
- Access deployed API at [https://mdskrki-api-reservations.herokuapp.com](https://mdskrki-api-reservations.herokuapp.com)
- Check docs
- Use Postman to easily test the API
- Internet connection

## Pending tasks 🧙

- [ ] Create a FrontEnd for the API
- [ ] Create Migrations
- [ ] Use SwaggerUI for docs
- [ ] Query by Date
- [ ] Add more tables and roles (such as an admin)
- [ ] Create a Data Seeder

## Authors 🤟

* const Mihai = (Portfolio) => https://github.com/MDSkrki ❌
* const Alejandro = (Portfolio) => https://github.com/AlexMonPe ⭕

## How to contribute 🤝

- If you wish to contribute to this project or any of our other projects, don't hesitate to contact us or submit a pull request
- Our emails are: [Mihai Daniel Somkereki](mailto:somkereki@hotmail.com?subject=[GitHub]) and [Alejandro Montero](mailto:alex_bcn10@hotmail.es?subject=[GitHub])
- You can buy us a beer or a coffee (we generally prefer beers)

## Special thanks 💖

* To the development team (Mihai, Alejandro), for their perseverence, effort, communication and teamwork skills.
* To our main teacher Gonzalo, who strives daily to make us better developers
* Great thanks to Pablo, for the help, patience and dedication that he gives every time we need it
  
Public repository with free to use code in order to promote knowledge sharing and to be of help to any other developer in need.