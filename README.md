# WhatsApp-clone

This repository contains a WhatsApp clone application that allows users to authenticate using their Google accounts and engage in real-time chatting. Users can send messages, images, and documents to their contacts, and they also have the option to view their own profiles.

Table of Contents
1. Features
2. Getting Started
3. Usage
4. Screenshots
5. Technologies Used
6. License


Features
Google Authentication: Users can sign in using their Google accounts, ensuring secure and convenient access.

Real-time Chatting: Enjoy real-time messaging with friends and contacts. Chat messages are delivered instantly.

Message Types: Send text messages, images, and documents to your contacts.

Profile Management: Users can view their profiles, including profile pictures and personal information.

Getting Started
To get started with this WhatsApp clone, follow these steps:

Clone this repository to your local machine:
Go to terminal and
Copy code

**git clone https://github.com/sarthakgawri889/Whatsapp-clone.git**


Navigate to the project directory:

Copy code

**cd Whatsapp-clone**

Install the project dependencies:
Copy code

**npm install**

Then go to client folder 
**cd client**

run the react app:

copy code:

**npm run start**

if this error comes, **'react-scripts' is not recognized as an internal or external command**

then copy code

****npm install react-scripts --save-dev****

Then install nodemon with command **npm install nodemon**

Then Go to server folder with **cd server**

and write command **nodemon index.js** to connect the database

then go to socket folder with command **cd socket**

and write command **nodemon index.js** to use socket.io
