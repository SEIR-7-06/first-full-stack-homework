const express = require("express");
const methodOverride = require("method-override");
const rowdyLogger = require("rowdy-logger");
const app = express();
const controller = require("./controller/controller.js");
const port = 4000;
const rowdy = rowdyLogger.begin(app);
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(express.urlEncoded({ extended: false }))
app.use("/names", controller);
app.get("/dragon", (req, res) => {
    res.send("This is not a name!");
})

app.get("/", (req, res) => {
    res.send("This is my Names Website!");
})

app.listen(port () => {
    console.log(`Your server us running on port: ${port}`);
    rowdy.print()
});