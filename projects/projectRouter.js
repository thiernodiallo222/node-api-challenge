const express = require('express');
const router = express.Router();
const db = require("../data/helpers/projectModel");

router.get('/', (req, res) => {
    db.get()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json(`An unknown error occurred !`)
        })
});
// request by id
router.get('/:id', (req, res) => {
    db.get(req.params.id)
        .then(project => {
            if (project) {
                res.status(200).json(project);
            } else {
                res.status(404).json({message: "That specific project was not found"})
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
        res.status(400).json({ message: "Missing object body" });
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
        .then(project => {
            if (!project) {
                res.status(400).json({ message: "Project not found" });
            } else {
                res.status(200).json({message: "Project has been updated"})
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: `An ${error} occurred !` });
    })
})
// writing code to delete project
router.delete('/:id', (req, res) => {
    db.remove(req.params.id)
        .then(project => {
            if (!project) {
                res.status(400).json({message: "Cannot find specific project !"})
            } else {
                res.status(200).json({message: `Project has been removed successfully !`})
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "An unknown error occurred !" });
        })
})
//writing a function that returns project actions
router.get('/:id', (req, res) => {
    db.getProjectActions(req.params.id)
        .then(actions => {
            if (!actions) {
                res.status(400).json({ message: "That project has no actions" });
            } else {
                res.status(200).json(actions);
           }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({message:"An unknown error occurred !"})
         })
})
module.exports = router;
