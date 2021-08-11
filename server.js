const express = require("express");
const rowdyLogger = require("rowdy-logger");
const methodOverride = require("method-override");
const controller = require("./controllers/controller");
const app = express();
const port = 4000;
const rowdy = rowdyLogger.begin(app);
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(methodOverride("_method"))
app.use("express.urlEncoded({extended:false"}));
app.use("/names", controller);




modules. exports(app);