const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const apiRouter = require("./routes/index.js");
const bodyParser = require('body-parser');

app.use("/api", apiRouter);
app.use(bodyParser.json());

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));