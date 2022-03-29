# API Citas Clinica Dental

![enter image description here](https://vinti7.com/wp-content/uploads/2016/05/logos-de-dentistas-35.jpg)

## Índice
  - [Api Reservations](#Api-Reservations)
  - [Tech Stack🛠](#Tech-Stack)
  - [Requisitos 📋](#Descripcion-y-usabilidad)
  - [Relaciones🥨](#Relaciones)
  - [Endpoints⛩](#Endpoints)
  - [Variables de entorno🥑](#Variables-de-entorno)
  - [Middlewares y services🔐�](#Middlewares-y-services)
  - [Bases de datos🔗](#Comandos-utiles-iniciales)
  - [Como instalarlo 🥷](#Instalacion)
  - [Tareas Pendientes 🧙](#Tareas-pendientes)
  - [Autores🤘](#Autores)
  - [Como Ayudar🤝](#Como-ayudar)
  - [Agradecimientos💖](#Agradecimientos)

# Tech Stack 🛠

Se han utilizado las siguientes tecnologías:

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
Además se ha hecho uso de las siguientes librerías/herramientas/tecnologías para el desarrollo del proyecto: Entorno: Nodejs, ORM: Sequelize, librería: JsonWebToken, librería: express ,librería para desarrollo: nodemon, SGBD: Mysql, gestores DB UI: Mysql Workbench, driver: Mysql2 librería hash password bcrypt, libería validator para hacer la validacion del parametro introducido email, librería para variables de entorno: dotenv,herramienta para alojar el repo: github, herramienta de despliegue de proyecto Node: heroku.

# Descripción y usabilidad 📋

Proyecto del bootcamp en GeeksHubs dónde desde producción nos piden que realicemos el backend de un sistema de gestión de citas en una clínica dental.
Éste es el primer proyecto grupal, en el que hemos trabajado dos developers, **_Mihai Daniel Somkereki_ y _Alejandro Montero_**, y hemos seguido la filosofía gitFlow junto con metodologia ágil Kanban mediante Trello para la organización y optimización del tiempo, tareas y trabajo conjunto.<br>
Mihai ha creado el repositorio de producción en Github, creando un scaffolding básico de patrón MVC de directorios orientado a entidades ya que nos ha sido más fácil para organizar los archivos. Con el scaffolding realizado hemos optado por hacer un fork del mismo para poder trabajar en paralelo, y subir los cambios al mismo repositorio remoto, el de Mihai. <br>
Utilizando la filosofía gitFlow cada uno nos hemos creado una rama develop, dónde ha ido progresando el proyecto paralelamente y ramas adicionales para ir añadiendo funcionalidades al proyecto, una vez que las funcionalidades funcionan correctamente se han añadido a la rama develop, o en el caso de Alejandro, se ha pusheado al remoto develop de Mihai. En el despliegue se ha hecho un merge a master para subirlo a Heroku.<br>
Para este proyecto hemos utilizado como ORM sequelize para interactuar con la base de datos Mysql dónde el primer paso que hemos realizado ha sido hacer el diagrama de Entidad-Relacion del sistema de gestion de citas de la clinica dental que mostramos a continuación:

![enter image description here](https://i.postimg.cc/SsQgbJvd/ER-Visits.png)

Cómo podéis observar hemos realizado 4 entidades básicas referenciadas como User, Patient, Doctor y Visit.
- Tabla User:  
Contiene los datos necesarios de los Usuarios para registrarse en el sistema, que está relacionada con Patients y Doctors, dónde un usuario solo puede tener un Patient o un Doctor.
- Tabla Patient:
Contiene los datos adicionales de un Patient y una clave foránea idUser que hace referencia al usuario del paciente, cuando el Patient se registra, se le crea automaticamente su usuario, por lo que en el registro deberá de rellenar los campos de la tabla Patient y los de User.
- Tabla Doctor:
Contiene los datos adicionales de un Doctor y una clave foránea idUser que hace referencia al usuario del doctor, al igual que con Patients, cuando un doctor se registra se le genera automáticamente su usuario teniendo en cuenta que tiene que rellenar los datos de doctor y user en el registro.
- Tabla Visit:
Contiene la información necesaria sobre las visitas. Visit, es la tabla asociativa entre Patient y Doctor dónde existen dos claves foraneas de idDoctor e idPatient, que hacen referencia a sus tablas relacionadas. Gracias a Mysql se añaden automáticamente los campos de Date con la fecha de creación de la visita y la fecha de la última modificación de la misma.

# Relaciones 🥨

Las relaciones entre las tablas son las siguientes:

```
- User vs Patient 1:1
- User vs Doctor 1:1
- Doctor vs Patient n:m
- Doctor vs Visit 1:n
- Patient vs Visit 1:n 
```

# Endpoints ⛩

A continuación detallaremos los endpoints de cada entidad y su Schema: 

## User

```
{
      "name": "userName",
      "lastname": "userLastName",
      "email": "userEmail@userDomain.com",
      "password": "userPassword",
      "phone_number": "userPhone"
} 
```

* get `/user` Devuelve todos los usuarios / Sólo puede hacerlo un Doctor(admin) 
* get `/user/login` Se introduce el email y password del User en headers, si el usuario existe, devuelve un token, y pasa al estado isLogged true.
* get `/user/logout` Se introduce el token por headers, si el usuario existe y el token es válido, hace logout y pasa al estado isLogged false
* post `/user` Este endpoint solo tienen acceso Doctors para crear usuarios personalizados como nuevos doctores, admins u otros roles. Se hashea la password.
* patch `/:id` Es necesario introducir el id User por path params(URI) para modificar al usuario / Sólo doctores(Admin) tienen acceso
* delete `/:id` Es necesario introducir el id User por path params(URI) para borrar un User, incluyendose a sí mismo también // Sólo doctores(Admin) tienen acceso

## Patient
```
{
      "name": "yourName",
      "lastname": "yourLastName",
      "email": "example@example.com",
      "password": "yourPassword",
      "phone_number": "yourPhoneNumber",
      <!------ Patient Data ------>
      "sex": "yourSex",
      "birth_date": "YYYY-MM-DD",
      "age": "yourAge",
      "dni": "yourDNIwithLetter",
      "allergies": "yourAllergies",
      "address": "YourAdress"
    }
```
Post Visit as Patient

```
{
      "date": "YYYY-MM-DD hour:min:sec",
      "description": "visitDescription",
      "state": "pending/finished/cancelled",
      "idDoctor": idDoctor(INTEGER),
      "idPatient": iDPatient(INTEGER)
}
```
* get `/patient` Es necesario introducir el token en headers, muestra sus datos de paciente y usuario y puede filtrar por cualquiera de ellos / Sólo puede hacerlo un Patient 
* get `/patient/visits` Se introduce el token en headers, y el Patient solo puede ver sus citas y filtrar por cualquiera de sus campos menos por fecha / Sólo puede acceder Patient
* patch `/patient//visits/cancellation/:id` Introduciendo el token por headers, y el id de la visita por path params (URI) el Patient puede borrar sólo sus visitas
* post `/visits/create` Introduciendo el token por headers, puede crear su propia cita. Se hashea la password / Puede acceder cualquiera / Se le asigna automáticamente el role de Patient
* post `/register` Es necesario introducir el ejemplo de arriba y se crea el Patient y el User a la vez / Sólo puede acceder Patient
* patch `/patient` Es necesario introducir el token para que el Patient modifique cualquiera de sus datos / Sólo puede acceder Patient
* delete `/patient` Es necesario introducir token , el Patient puede borrarse a sí mismo, pero no borra su usuario.

## Doctor

```
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
Para cualquiera de los endpoints de doctor es necesario es necesario tener role de Doctor(Admin) e introducir el token
`router.use(auth('Doctor'))`

* get `/doctor` Devuelve todos los doctores de la DB
* post `/register` Es necesario introducir en el body el JSON de ejemplo para crear un doctor y a la vez su User asociado, se asigna automáticamente el role de doctor
* patch `/doctor/:id` Introduciento el id por path params(URI) puede modificar la información de cualquier doctor.
* delete `/doctor/:id` Introduciento el id por path params(URI) puede eliminar la información de cualquier doctor.

## Visit
```
{
      "date": "YYYY-MM-DD hour:min:sec",
      "description": "visitDescription",
      "state": "pending/finished/cancelled",
      "idDoctor": idDoctor(INTEGER),
      "idPatient": iDPatient(INTEGER)
}
```
Sólo los doctores pueden acceder a estos endpoints poniendo el token en headers.

* get `/visit` Devuelve todas las visitas de la DB
* post `/visit` Es necesario introducir en el body el JSON de ejemplo para crear una visita.
* patch `/visit/:id` Introduciento el id por path params(URI) puede modificar la información de cualquier visita.
* delete `/visit/:id` Introduciento el id por path params(URI) puede eliminar la información de cualquier visita.


# Variables de entorno 🥑

Para añadir seguridad al API hemos utilizado la librería dotenv para que la información sensible no sea visible, las variables a configurar son las siguientes:
```
NODE_ENV=[yourEnv]
PORT=[yourPort]
DB_NAME=[yourDataBaseName]
DB_USERNAME=[userDataBase]
DB_PASSWORD=[userPasswordDataBase]
DB_HOST=[dataBaseUri]
DB_DIALECT=[mysql/mariaDB/Postgres]
JWT_SECRET=[secretKey] // this key is for generate tokens with JsonWebToken
```

# Middlewares y services 🔐

Hemos aislado funcionalidades para mejorar la organización y limpieza del código en una carpeta aparte llamada shared que contiene:

**- Services**

* Funciones de hashear y comprobar contraseñas en la creación de usuarios utilizando la librería bcrypt y así añadir seguridad a las mismas.
* Generador y comparador de tokens de usuarios para poder autenticarse de manera segura y no repetitiva.
* Validador de emails, para restringir la estructura de un email y así evitar registros erroneos por poner mal el correo electronico.
* Funcion Check que verifica si un usuario esta logeado o no.

**- Middlewares**

* Funcion de autenticación dónde verifica si tiene permisos suficientes para acceder al endpoint introducido mediante el token, verifica que el role del usuario coincida con el role necesario para acceder y si el usuario está logeado.

**- Models** 
* Por el momento y debido a la inexperiencia con sequelize hemos tenido que hacer un fichero models intermedio dónde hemos añadido las relaciones de todas las tablas y las hemos sincronizado con la base de datos Mysql para la creación de las relaciones y modelos de las entidades.


# Base de datos 🔗

El proyecto requería utilizar y experimentar con bases de datos relacionales, en este caso Mysql como SGBD y Sequelize como ORM. Para instalarlo sólo es necesario introducir los siguientes comandos:

_- Sequelize with mysql driver_

`npm i sequelize`
`npm i mysql2`

_- Mysql_

https://dev.mysql.com/downloads/


# Comandos útiles iniciales 👀

 `npm run start`  // Ejecuta el archivo principal para levantar el API

_Es necesario levantar tu base de datos también y añadir tu .env con tus variables de entorno_

# Instalación 🥷

Para poder consumir el API es necesario lo siguiente:
- Clonar o forkear el repositorio si deseas, **Alejandro:** _(https://github.com/AlexMonPe/API_RESERVATIONS)_, **Mihai:** _(https://github.com/MDSkrki/API_RESERVATIONS)_
- Instalar Mysql
- Hacer _npm install_ para cargar las dependencias del package.json
- Acceder al API publicada en PONER ENLACE HEROKU
- Revisar documentación.
- Es necesario utilizar Postman para probar el Api ya que carece de Frontend.
- Conexión a internet

# Tareas pendientes 🧙

  - [ ] Crear el FrontEnd del API
  - [ ] Crear migraciones.
  - [ ] Documentar con swagger.
  - [ ] Filtrar por fechas. 
  - [ ] Añadir nuevas tablas y roles como Administrador.
  - [ ] Crear un seed data.

# Autores 🤟

* const Mihai = (Portfolio) => https://github.com/MDSkrki ❌
* const Alejandro = (Portfolio) => https://github.com/AlexMonPe ⭕

# Como ayudar 🤝
  
  - Si deseas colaborar con éste proyecto u otro no dudes en contactar con nosotros o solicitar una pull request.
  - Nuestro correo electrónico es  _somkereki@hotmail.com , alex_bcn10@hotmail.es_
  - Cualquier aporte se puede recompensar con una cerveza o café, preferimos cerveza.

# Agradecimientos 💖

  * Al equipo de desarrollo (Mihai, Alejandro) por su constancia, esfuerzo, comunicación y buen trabajo en equipo.
  * A nuestro profesor titular Gonzalo, que se esfuerza día a día para que seamos mejores programadores.
  * Enorme agradecimiento a Pablo, por su ayuda, paciencia y dedicación que nos ofrece siempre que lo necesitamos.
  * A nuestros compañeros que siempre estan dispuestos a ayudar como un equipo de remo.
  * Repositorio público con código libre con el fin de seguir promoviendo compartir conocimientos y ayudar a otros programadores.