const express = require('express');
const app = express();
const port = process.env.PORT||5000
const cors = require('cors');
app.use(express.json());   // auto format in json
const projectRoutes = require('./actions/actionRouter');
const actionRoutes = require('./projects/projectRouter');
require('dotenv').config();
// const welcome = require('./server');


app.use('/projects', projectRoutes);
app.use('/actions', actionRoutes);


app.listen(port, () => console.log(`Server is listening at: http://localhost:${port}`));




