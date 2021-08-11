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
        res.render("show.ejs"), { oneName: foundName })
    })
})

router.post("/", (req, res) => {
    if (req.body.startsithAConsonant === "on") {
        req.body.startsithAConsonant = true;
    } else {
        req.body.startsithAConsonant = false;
    }

    dataBase.Name.create(req.body, (err, createdName => {
        if (err) return console.log(err);

    res.redirect("/names")
    });
})

router.delete("./:nameId", (req, res) => {
    dataBase.Name.findByIdAndDelete(req.params.nameId, (err) => {
        if (err) return console.log(err);
        res.redirect("./names");
    })
})

router.get("./:nameId/edit", (req, res) => {
    dataBase.Name.findById(req.params.fruitId, (err, foundName) => {
        if (err) return console.log(err);

        res.render("edit.ejs", { oneName: foundName});
    })
});

router.put("./fruitId", (req, res) => {
    console.log(req.body);

    if (req.body.startsithAConsonant === "on") {
        req.body.startsithAConsonant = true;
    } else {
        req.body.startsithAConsonant = false;
    }

    console.log(req.body);

    dataBase.Name.findByIdAndUpdate(req.params.nameId, req.body, (err, updatedName) => {
        if (err) console.log(err);
        res.redirect(`/names/${req.params.fruitI}`)
    })
})

module.exports = router