const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const errorHandler = require('./middleWare/errorMiddleWare');
const cookieParser = require("cookie-parser")

//routes
const userRoute = require('./routes/userRoute');
const productRoute = require('./routes/productRoute');


//Middlewares
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json())

//Routes middleware
app.use("/api/users", userRoute)
app.use("/api/products", productRoute)

//Routes
app.get('/', (req, res) => {
    res.send('Torman home page');
});


//Error Middleware
app.use(errorHandler);

//Connecting
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
    .then(() => app.listen(PORT, () => {
        console.log(`Server running on port: ${PORT}`);
    }))
    .catch(err => console.log(err));