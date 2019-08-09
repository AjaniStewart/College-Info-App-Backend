const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const port = process.env.PORT || 80;
const bodyParser = require('body-parser');

const db = require('./database/index');
const apiRouter = require("./routes/index.js");

const app = express();

const configureApp = () => {
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

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

app.get('/',(req,res,next) => {
res.status(404).send("not a valid path. use /api/students or /api/campuses");
})
const bootApp = async () => {
  await configureApp();
};

// Main function invocation;
//db.sync({force: true});
bootApp();

module.exports = app;

// // console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));