const express = require('express');
const router = express.Router();
const db = require("../data/helpers/actionModel");

// request all actions
router.get('/', (req, res) => {
    db.get()
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json(`An unknown error occurred !`)
        })
});
// request an action by id
router.get('/:id', (req, res) => {
    db.get(req.params.id)
        .then(action => {
            if (action) {
                res.status(200).json(action);
            } else {
                res.status(404).json({message: "That specific action was not found"})
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({message: "An unknown error occurred !"})
        })
})
// A post request
router.post('/', (req, res) => {
    if (!req.body) {
        res.status(400).json({ message: "Missing action body" });
    } else {
        if (!req.body.name || !req.body.description) {
            res.status(400).json({message:"name or description is missing !"})
        } else {
            db.insert(req.body)
                .then(post => {
                res.status(201).json(post);
                })
                .catch(error => {
                    console.log(error);
                    res.status(500).json({ message: "Sorry, an unknown error occurred !" });
            })
        }
    }
})
// Writing an update request handler
router.put('/:id', (req, res) => {
    db.update(req.params.id, req.body)
        .then(action => {
            if (!action) {
                res.status(400).json({ message: "action not found" });
            } else {
                res.status(200).json({message: "action has been updated"})
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: `An ${error} occurred !` });
    })
})
// writing code to delete action
router.delete('/:id', (req, res) => {
    db.remove(req.params.id)
        .then(action => {
            if (!action) {
                res.status(400).json({message: "Cannot find specific action !"})
            } else {
                res.status(200).json({message: `Action has been removed successfully !`})
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "An unknown error occurred !" });
        })
})

module.exports = router;