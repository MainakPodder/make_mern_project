const express = require("express");
const app = express();
const router = require("./routers/router");
require("./db/conn");

app.use(express.json());
app.use(router);

module.exports = app;
