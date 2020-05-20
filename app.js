//Server imports
//Express is a node.js library which allows for pre-build functionality to be implemented.
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
//mongoose is a MongoDB library which allows for pre-build functionality to be implemented.
const mongoose = require('mongoose');
//Returns the file with eh URL being exported which contains the database
const config = require('./config/database');

// Connect To Database
mongoose.connect(config.database);

// On Connection report succesfull
mongoose.connection.on('connected', () => {
  console.log('Connected to database '+ config.database);
});

// If the is an error when connection is being tried report error
mongoose.connection.on('error', (err) => {
  console.log('Database error: '+err);
});

//Initializes the variable with the express application
const app = express();

const users = require('./routes/users');

// Port Numberw
const port = 3000;

// CORS Middleware, allows remote hosts to access this server resources.
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

// Index Route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

// Start Server
app.listen(port, () => {
  console.log('Server started on port '+port);
});
