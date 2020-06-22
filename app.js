/** @format */
////////////////////////////////////////////////////////////////////////////////
// Importing modules, dependencies, packages and routes from other files
////////////////////////////////////////////////////////////////////////////////
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const users = require('./routes/users');
const config = require('./config/database');

////////////////////////////////////////////////////////////////////////////////
// Database setup
////////////////////////////////////////////////////////////////////////////////
mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
  console.log('Connected to database ' + config.database);
});
 
mongoose.connection.on('error', (err) => {
  console.log('Database error: ' + err);
});
////////////////////////////////////////////////////////////////////////////////
// Server setup
////////////////////////////////////////////////////////////////////////////////
const app = express();
// CORS Middleware, allows different domain to access this server resources.
app.use(cors());
// Body Parser Middleware allows for parsing the body  of request to json format
app.use(bodyParser.json());
// Passport Middleware allows for local authentication methods
app.use(passport.initialize());
app.use(passport.session());
//importing our strategy
require('./config/passport')(passport);
//routes traffic to /users file
app.use('/users', users);


app.use(express.static(path.join(__dirname, 'public')));

// Index Route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});+

// Start Server
const port = 3000;
app.listen(port, function () {
  console.log('Server started on port ' + port);
});

