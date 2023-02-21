const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb+srv://superDavid:1234@cluster0.plxa2pp.mongodb.net/torman-app?retryWrites=true&w=majority")
    .then(() => app.listen(PORT, () => {
        console.log(`Server running on port: ${PORT}`);
    }))
    .catch(err => console.log(err));