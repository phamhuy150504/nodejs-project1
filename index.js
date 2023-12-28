const express = require("express");
const system = require("./configs/system");

// setup dotenv in project 
require('dotenv').config()

// connect with database / mongoose database
const database = require("./configs/database")
database.connect()

const router = require("./routes/client/index.router");
const routerAmin = require("./routes/admin/index.router");

const app = express();
const port = process.env.PORT;

// automatically going to direct folder views when you want to link to the folder or file into folder views;
app.set("views", "./views");
app.set("view engine", "pug");

// public folder outside 
app.use(express.static("public"))
// Route 
router(app);
routerAmin(app);

// app.local
app.locals.prefixAdmin = system.prefixAdmin;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
