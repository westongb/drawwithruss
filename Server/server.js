require('dotenv').config({path:'../.env'});
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const port = process.env.PORT || 5000;
const fs = require('fs');


app.use(cors());
app.use(bodyParser());