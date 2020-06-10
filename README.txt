Chat Interface

Hey! Here is my application using node.js (express), socket.io, ejs, mongoose, inquirer. 
It is a chat app which will run on the browser locally using 'https://localhost:3000'. 

Run App
Unzip the folder. Download and install node.js on the computer if not already installed.
Once installed, open a git bash command line (or command prompt) and install the dependencies.

Navigate to this project folder using the 'cd' command.

Once inside the project directory, run this command on the command prompt to install the dependencies - 
npm install commander ejs express inquirer mongoose nodemon socket.io

Once installed, run the project using the command-
run npm start
and browse https://localhost:3000


User Management CLI
Command line interface for managing users. Uses Mongoose, Commander.js and Inquirer.js

Version
1.0.0

To make the command line work, open git bash command line (or command prompt) and type the below command
$ npm link
(Used to Create Symlink)

Commands

List Users (list or l)
$ clichatinterface list

Find Users (find or f)
$ clichatinterface find [NAME]

Add User (add or a)
$ clichatinterface add

Remove User (remove or r)
$ clichatinterface remove [_ID]

(to get User ID, find the user using find command and then copy the id)

