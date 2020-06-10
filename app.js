const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.Promise = global.Promise;

const db = mongoose.connect('mongodb://localhost:27017/usercli', 
    {'useNewUrlParser': true, 'useUnifiedTopology': true});

const User = require('./models/user')


//set the template engine ejs
app.set('view engine', 'ejs')

//middlewares
app.use(express.static('public'))


//routes
app.get('/', (req, res) => {
    res.render('index')
})

//Listen on port 3000
server = app.listen(3000)



//socket.io instantiation
const io = require("socket.io")(server)


//listen on every connection
io.on('connection', (socket) => {
    console.log('New user connected')

    //default username
    socket.username = "Anonymous"

    //listen on change_username
    socket.on('change_username', (data) => {
        socket.username = data.username
    })

    //listen on new_message
    socket.on('new_message', (data) => {
        //broadcast the new message
        io.sockets.emit('new_message', {message : data.message, username : socket.username});
    })

    //listen on typing
    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', {username : socket.username})
    })
})

// CLI 

 //Add User
 const addUser = (user) => {
  User.create(user).then(user => {
    console.info('New User Added');
    db.close();
  });
} 

 // Find User
const findUser = (name) => {
  // Make case insensitive
  const search = new RegExp(name, 'i');
  User.find({$or: [{name: search}]})
    .then(user => {
      console.info(user);
      console.info(`${user.length} matches`);
      db.close();
    });
}

// Remove User
const removeUser = (_id) => {
  User.remove({ _id })
    .then(user => {
      console.info('User Removed');
      db.close();
    });
}

// List Users
const listUsers = () => {
  User.find()
    .then(users => {
      console.info(users);
      console.info(`${users.length} users`);
      db.close();
    });
}

// Export All Methods
module.exports = {
  addUser,
  findUser,
  removeUser,
  listUsers
}

