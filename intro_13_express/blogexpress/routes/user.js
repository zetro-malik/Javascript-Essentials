const express = require('express')
const router = express.Router()
const users = require('../data/user')

router.get('/',(req,res)=>{
    res.render("blogUser",{
        Users:users
    });
})

module.exports = router