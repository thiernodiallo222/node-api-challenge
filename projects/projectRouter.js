const express = require('express');
const router = express.Router();
const db = require("../data/helpers/projectModel");

router.get('/', (req, res) => {
    db.get(req.params.id)
    .then(projects => {
        res.status(200).json(projects);
    }).catch(error => {
        console.log(error);
        res.status(500).json(`An unknown error occurred !`)
})
})


module.exports = router;