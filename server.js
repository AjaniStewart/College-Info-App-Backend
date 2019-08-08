const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const port = process.env.PORT || 80;
const bodyParser = require('body-parser');

const createLocalDatabase = require('./utilities/createLocalDatabase');

const db = require('./database');

const apiRouter = require("./routes/index.js");

const syncDatabase = () => {

    // if (process.env.NODE_ENV === 'production') {
    //   db.sync();
    // }
    // else {
    //   console.log('As a reminder, the forced synchronization option is on');
    //   db.sync({ force: true })
    //     .catch(err => {
    //       if (err.name === 'SequelizeConnectionError') {
    //         createLocalDatabase();
    //       }
    //       else {
    //         console.log(err);
    //       }
    //     });
    //   }
  };

  const app = express();

  const configureApp = () => {
    app.use(helmet());
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(compression());
    app.use(cookieParser());
  
    // Mount our apiRouter;
    app.use('/api', apiRouter);
  
    // Error handling;
    app.use((req, res, next) => {
      if (path.extname(req.path).length) {
        const err = new Error('Not found');
        err.status = 404;
        next(err);
      }
      else {
        next();
      }
    });

    app.use((err, req, res, next) => {
        console.error(err);
        console.error(err.stack);
        res.status(err.status || 500).send(err.message || 'Internal server error.');
      });
    };

    app.get('*',(req,res,next) => {
      res.status(404).send("not a valid path. use /api/students or /api/campuses");
    })
    const bootApp = async () => {
        await syncDatabase();
        await configureApp();
      };
      
      // Main function invocation;
      bootApp();

      module.exports = app;

// app.use("/api", apiRouter);
// app.use(bodyParser.json());

// // console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));