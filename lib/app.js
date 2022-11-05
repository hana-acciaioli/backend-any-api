const express = require('express');

const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
// Built in middleware
app.use(express.json());

// App routes
app.use('/plants', require('./controllers/plants'));
app.use('/towns', require('./controllers/towns'));

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
