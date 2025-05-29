const express = require('express');
const airoutes = require('./rotues/ai.routes')
const cors = require('cors');



const app = express();

app.use(cors());
app.use(express.json());

app.use('/ai' , airoutes);

module.exports = app