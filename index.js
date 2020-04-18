const express = require('express');
const app = express();
const port = process.env.PORT||5000
const cors = require('cors');
app.use(express.json());   // auto format in json
const projectRoutes = require('./projects/projectRouter');
const actionRoutes = require('./actions/actionRouter');
require('dotenv').config();
// const welcome = require('./server');

app.use(cors());
app.use('/projects', projectRoutes);
app.use('/actions', actionRoutes);
app.get('/', (req, res) => {
    res.json(`Welcome to our API !`);
})
app.use((req, res) => {
    res.status(404).json(`The end point: ${req.url} does not exist in our api`);
})


app.listen(port, () => console.log(`Server is listening at: http://localhost:${port}`));




