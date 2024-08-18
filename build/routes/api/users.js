const express = require('express');
const router = express.Router();
const db = require('../../db')

/**
 * GET: all students from students table
 * 
 * @returns (object) - all students
 * 
 */
router.get('/', function(req, resp) {
    db.select().from('users').then(function(data) {
        resp.send(data);
    });
})

/**
 * GET: a student by id
 * 
 * @params (int) - id
 * @returns (object) - of student
 */
router.get('/:id', function(req, resp) {
    db('users').where({id: req.params.id}).select().then(function(data) {
        resp.send(data);
    });
});

/**
 * POST: student to student table
 * 
 * @param (object) - of student
 * @returns (object) - added student
 */
router.post('/', function (req, res) {
    db.insert(req.body).returning('*').into('users').then(function(data) {
        res.send(data);
    })
});

/**
 * PUT: an existing student
 * 
 * @param (int) - id
 * @returns (object) - updated student
 */
router.put('/:id', function(req, res) {
    db('users').where({ id: req.params.id}).update(req.body).returning('*').then(function(data) {
        res.send(data);
    });
    
});

/**
 * DELETE: an existing student
 * 
 * @param (int) - id
 * @returns (object) - deleted student
 */
router.delete('/:id', function(req, res) {
    db('users').where({id: req.params.id}).del().then(function() {
        res.json({sucess: true});
    });
});

module.exports = router;