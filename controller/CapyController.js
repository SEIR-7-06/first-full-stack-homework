/* Require Modules */
const express = require('express');
const db = require('../models/index.js')
const router = express.Router();

//index
router.get('/',(req,res)=>{
    db.Capy.find({},(err,foundData)=>{
        if(err)return console.log(err)
        res.render('./capy/index.ejs',{
            allCapy: foundData
        })
    })
})
//new
router.get('/new',(req,res)=>{
    res.render('./capy/new.ejs')
})
//create
router.post('/',(req,res)=>{
    db.Capy.create(req.body, (err,createdItem)=>{
        if(err)return console.log(err)
        res.redirect('/capy')
    })
})
//show
router.get('/:dataId',(req,res)=>{
    db.Capy.findById(req.params.dataId, (err,foundItem)=>{
        if(err)return console.log(err)
        res.render('./capy/show.ejs',{oneCapy: foundItem})
    })
})
//edit
router.get('/:dataId/edit',(req,res)=>{
    db.Capy.findById(req.params.dataId,(err,foundItem)=>{
        if(err)return console.log(err)
        res.render('./capy/edit.ejs',{oneCapy:foundItem})
    })
})
//update
router.put('/:dataId',(req,res)=>{
    db.Capy.findByIdAndUpdate(req.params.dataId,req.body,(err,foundItem)=>{
        if(err)return console.log(err)
        res.redirect(`/capy/${req.params.dataId}`)
    })
})
//destroy
router.delete('/:dataId',(req,res)=>{
    db.Capy.findByIdAndDelete(req.params.dataId,(err)=>{
        if(err)return console.log(err)
        res.redirect('/capy/')
    })
})
module.exports = router