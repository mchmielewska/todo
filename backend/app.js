const express = require('express');
const cors = require('cors');
const routes = require('./routers/todos');

const app = express();
app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.use('/api', routes);
app.listen(process.env.PORT || 4000);

module.exports = app;