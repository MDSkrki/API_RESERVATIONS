# API Dental Clinic Appointments

![logo clinica dental](https://vinti7.com/wp-content/uploads/2016/05/logos-de-dentistas-35.jpg)

[Click aquí para leer el README en Español](./README.md) 

## Table of Contents
- [API Dental Clinic Appointments](#api-dental-clinic-appointments)
  - [Table of Contents](#table-of-contents)
  - [Tech Stack🛠](#tech-stack)
  - [Description and How to Use 📋](#description-and-how-to-use-)
    - [Associations 🥨](#associations-)


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