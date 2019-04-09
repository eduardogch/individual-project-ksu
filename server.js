const express = require('express');
const passport = require('passport');
const helmet = require('helmet');
const compression = require('compression');
const bodyParser = require('body-parser');
const logger = require('morgan');
const chalk = require('chalk');
const dotenv = require('dotenv');
const path = require('path');
const mongoose = require('mongoose');
const expressValidator = require('express-validator');

const app = express();

/**
 * Load environment variables from .env file, where API keys and passwords are configured only if NODE_ENV var is set to production.
 */
dotenv.config({silent: process.env.NODE_ENV === 'production'});
dotenv.load({path: '.env'});

/**
 * Connect to MongoDB.
 */
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI, { useNewUrlParser: true });
mongoose.connection.on('error', (err) => {
  console.error(err);
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  process.exit();
});

/**
 * Express configuration.
 */
app.set('port', process.env.PORT || 3000);
app.use(helmet())
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());

/**
 * API examples routes.
 */
app.get("/api", function(req, res) {
  // res.json(version);
  res.send('Hello World!');
});

/**
 * Catch all the routes and give back the Angular app
 */
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('./dist/individual-project-ksu/'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/individual-project-ksu/index.html'));
  });
}

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({
      "message": err.name + ": " + err.message
    });
  }
});


app.all("*", function(req, res) {
  res.redirect("/");
});

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
  console.log('  Press CTRL-C to stop\n');
});

module.exports = app;
