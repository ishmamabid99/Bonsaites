<h1 align="center">
🌐 BonsaiTes - A plant saling app
</h1>
<h4 align="center">
MongoDB, Expressjs, React/Redux, Nodejs
</h4>



> MERN is a fullstack implementation in MongoDB, Expressjs, React/Redux, Nodejs.

MERN stack is the idea of using Javascript/Node for fullstack web development.

## clone or download
```terminal
$ git clone https://github.com/ishmamabid99/uBuy.git
$ yarn install
```

## project structure
```terminal
LICENSE
package.json
server/
   package.json
   .env (to create .env, check [prepare your secret session])
client/
   package.json
admin/
   package.json
bank/
   package.json
...
```

# Usage (run fullstack app on your machine)



notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Client-side usage(PORT: 3000)
```terminal
$ cd client   // go to client folder
$ yarn install
$ yarn start


```
## Admin-side usage(PORT: 8000)
```terminal
$ cd admin   // go to client folder
$ yarn install
$ yarn start

```
## bank-side usage(PORT: 9000)
```terminal
$ cd bank   // go to client folder
$ yarn install
$ yarn start

```



## Server-app usage(PORT: 5000)
```terminal
$ cd server   // go to client folder
$ yarn install
$ nodemon serverApp.js

```
## Bank-app usage(PORT: 5000)
```terminal
$ cd server   // go to client folder
$ nodemon serverBank.js

```
## Admin-app usage(PORT: 5000)
```terminal
$ cd server   // go to client folder
$ nodemon serverAdmin.js

```

# Dependencies(tech-stacks)
    "@material-ui/core": "^4.12.4",
    "@material-ui/icons": "^4.11.3",
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^13.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.27.2",
    "bootstrap": "^5.2.0",
    "chart.js": "^3.8.0",
    "http-proxy-middleware": "^2.0.6",
    "js-cookie": "^3.0.1",
    "jwt-decode": "^3.1.2",
    "react": "^18.1.0",
    "react-bootstrap": "^2.5.0",
    "react-chartjs-2": "^4.1.0",
    "react-dom": "^18.1.0",
    "react-image-magnifiers": "^1.4.0",
    "react-router-dom": "5.2.0",
    "react-scripts": "5.0.1",
    "sweetalert2": "^11.4.18",
    "web-vitals": "^2.1.0"   
    "bcrypt": "^5.0.1",
    "cors": "^2.8.5",
    "dotenv": "^16.0.0",
    "express": "^4.18.1",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.3.1",
    "multer": "^1.4.4"

# Screenshots of this project

User visit public and Home page
[Imgur](https://imgur.com/chC7NuC)


User can sign in or sign up
![](https://imgur.com/eRKJEiJ)

After signing in user can go to account route and make request to token-protected API endpoint
![After signing in user can go to account route](http://i.imgur.com/FzLB51u.png)

## Standard

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## BUGs or comments


Email Me: ishmam.abid5422@gmail.com



### License
[MIT](https://github.com/amazingandyyy/mern/blob/master/LICENSE)
