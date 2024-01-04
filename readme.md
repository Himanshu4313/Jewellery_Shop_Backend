# Backend setup for jewellery shop 
  
##  overview

  welcome to my dynamic backend jewellery shop application powered by Nodejs , Expressjs , and MongoDB for management of data.

## Technologies Used 

   -> NodeJs: A JavaScript runtime for building scalable network applications.
   -> ExpressJs:  A web application framework for Node.js, designed for building robust APIs.
   -> MongoDB: A NoSQL database for storing and retrieving data efficiently.

## Dependencies

  Before you start, ensure the following dependencies are installed on your machine:

 1.Node.js
 2.npm (Node Package Manager)
 3.MongoDB

## And some dependencies are use in this project like 
  
    if you install all these dependencies in your system then copy this command that are given below

```
  npm install express dotenv mongoose cloudinary multer cors cookie-parser nodemon nodemailer email-validator bcrypt morgan jsonwebtoken razorpay

```
## Describe all dependencies why use in this project 

-> express:- This is a framework for nodeJs , Using this framework we can build full backend.

-> dotenv:- dotenv is a configure file which help to store sensative data which are used here for
            building this web application.

->mongoose:- mongoose is library of mongodb its help to management database like create , update , delete  etc.

->cloudinary:- cloudinary is a thrid party library that help to store photo and video on his platfrom.

->multer:- multer is used for convert image binary data into url .

->cors:- cors is help to communicate frontend and backend, means cross origin platform url.

->cookie-parser: cookie-parser it allow to send and recive cookie from client to server and server to client.

->nodemon: nodemon is just like a runtime enviroment to help run the node application.And it auto update the server when any changes are occure.

->nodemailer: nodemailer is library which is given by nodejs , using this library we send email and recieve.

->email-validator: it used for check email is correct or not .

->bcrypt: this dependencies is provide security for any sensative information that are store in database.

->jsonwebtoken: jsonwebtoken is used to generate token.

->razorpay:- razorpay is install for payment ..

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [License](#license)

## Features 

- **Product Management**: Add, update, and delete jewelry products.
- **User Authentication**: Secure user authentication for customer accounts.
- **Order Processing**: Handle customer orders and transactions.
- **Category Management**: Categorize jewelry products for easy navigation.
-**Search and Filters**: Allow users to search for products and apply filters.
-**Wishlist**: Allow users to wishlist they favorite items.
-**addToCart**: Allow users to add item into addToCart.

## Getting Started

## Prerequisites

```
  
  Node.Js
  npm (node package manager)
  mongodb

```

## Installation
     
     if you install these application first create a folder 
     ```
      mkdir jewelleryShop
     
     ```
   if you once created this then follow these command for installation

   ```
    cd jewelleryShop
   
   ```

  1. Clone the git repository 

  ```
  https://github.com/Himanshu4313/Jewellery_Shop_Backend.git
  
  ```
  2. install dependencies

  ```
    npm install <dependencies> that require in this project 

  ```
  3. And setup .env file like 
  
  ```
   PORT=3000
   SECRET=SECRET
   MONGODB_URI=<mongodb link>
  
  ```
  4. if you once complete the installation then run this command 

  ```
   
     npm run start 
     or
     npm run dev 

  ```