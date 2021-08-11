const express = require("express");
const methodOverride = require("method-override");
const rowdyLogger = require("rowdy-logger");
const app = express();
const controller = require("./controllers/controller");
const port = 4000;
const rowdy = rowdyLogger.begin(app);
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(methodOverride("_method"))
app.use("express.urlEncoded({extended:false"}));
app.use("/names", controller);
app.listen(port () => {
    rowdy.results()
})



modules. exports(app);