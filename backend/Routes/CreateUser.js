const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

router.post('/createuser', [
    body('email').isEmail(),
    body('password').isLength({min: 5})]
    ,async (req, res) => {

        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            location: req.body.location
        })
        res.json({success:true});

    } catch (error) {
        console.log(error);
        res.json({success:false});
    }
})

router.post('/loginuser', [
    body('email', 'Invalid email').isEmail(),
    body('password','Incorrect Password').isLength({min: 5})]
    ,async (req, res) => {

        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        let email = req.body.email;
    try {
        let userData = await User.findOne({email});
        if(!userData) {
            return res.status(400).json({errors: 'Trying logging with correct credentials'});
        }

        if(userData.password !== req.body.password) {
            return res.status(400).json({errors: 'Trying logging with correct credentials'});
        }
        
        res.json({success:true});

    } catch (error) {
        console.log(error);
        res.json({success:false});
    }
})

module.exports = router;

