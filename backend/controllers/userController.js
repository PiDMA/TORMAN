const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "1d"})
};

const registerUser = asyncHandler(async (req, res) => {

    const { name, email, password } = req.body

    //Validation
    if (!name || !email || !password){
        res.status(400)
        throw new Error("Please fill in all fields")
    }

    if(password.length < 6){
        res.status(400)
        throw new Error("Password must be at least 6 characters")
    }

    //TODO validate other required input
        //Code goes here

    //TODO check if user already exists
    const userExists = await User.findOne({email})

    //Generating secure token to stay signed in

    if(userExists){
        res.status(400)
        throw new Error("Email is already in use. Please Log in")
    }

    //Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    const token = generateToken(user.id);

    //Send http-only cookie
    if(passwordIsCorrect){
        res.cookie("token", token, {
            path: "/",
            httpOnly: true,
            expires: new Date(Date.now() + 1000 * 86400), //aka one day
            sameSite: "none",
            secure: true
        })
    }


    //login after creation
    if(user){
        //add photo here when/if implementing photos
        const {_id, name, email} = user
        res.status(201).json({
            _id,
            name,
            email,
            token
        })
    }

});

//Login user
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body

    // Validate email and password
    if(!email || !password){
        res.status(400)
        throw new Error("Please add email and password")
    }

    // Find the user by email, if not found throw error
    const user = await User.findOne({email})

    if(!user){
        res.status(400)
        throw new Error("User not found. Please Register!")
    }

    //User exists, check password
    const passwordIsCorrect = await bcrypt.compare(password, user.password)

    if(user && passwordIsCorrect){
        const{_id, name, email} = user;
        res.status(200).json({
            _id,
            name,
            email,
        })
    } else{
        throw new Error("Invalid email or password")
    }
})

module.exports = {
    registerUser,
    loginUser
}