const express = require("express");
const dataBase = require(".../models/index.js");
const router = express.Router();
router.get("/", (req, res) => {
    dataBase.Name.find({}, (err, allNames) => {
        if(err) return console.log(err);

        res.render("index.ejs", { allNames: allNames})
    })
})

router.get("/new", (req, res) => {
    res.render("new.ejs")
})

router.get("/:nameId", (req, res) => {
    dataBase.Name.findById(req.params.nameId, (err, foundName) => {
        if (err) return console.log(err);
        res.render("show.ejs"), { oneFruit: foundFruit })
    })
})

router.post