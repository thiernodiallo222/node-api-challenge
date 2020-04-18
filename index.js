const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());   // auto format in json
const projectRoutes = require('./actions/actionRouter');
const actionRouters = require('./projects/projectRouter');
// require('dotenv').config();
// const welcome = require('./server');


app.use('/projects', projectRoutes);
app.use('/actions', actionRouters);
const port = process.env.PORT||5000

app.listen(port, () => console.log(`Server is listening at: http://localhost:${port}`));




