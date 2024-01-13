const express = require("express");
const app = express();
const router = require("./routers/router");
require("./db/conn");

app.use(router);
app.use(express.json());

module.exports = app;
