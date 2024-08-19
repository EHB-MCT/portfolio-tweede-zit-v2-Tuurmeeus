const express = require('express');
const router = express.Router();
const db = require('../../db')


/**
 * GET a question object by their id from the database
 * 
 * @param   {int}         id              A number for identifying each unique question
 * @returns {[Object]}                    An array containing a question object
 */
router.get('/:id', function(req, resp) {
    db('questions').where({id: req.params.id}).select().then(function(data) {
        resp.send(data);
    });
});

/**
 * POST student to questions table
 * 
 * @param   {Object}       object              An object or an array of objects containing variables for creating a question
 * @param   {Object}       object._id          A number for identifying each unique question
 * @param   {Object}       object.thread_id    A Foreign key (int) for identifying the parent class
 * @returns {Object}                           Returns an object of the created question
 */
router.post('/', function (req, res) {
    db.insert(req.body).returning('*').into('questions').then(function(data) {
        res.send(data);
    })
});

/**
 * PATCH an existing question
 * 
 * @param   {int}         id              A number for identifying each unique question
 * @returns {[Object]}                    An array containing the updated question
 */
router.patch('/:id', function(req, res) {
    db('questions').where({ id: req.params.id}).update(req.body).returning('*').then(function(data) {
        res.send(data);
    });
    
});

/**
 * PUT an existing question
 * 
 * @param   {int}         id              A number for identifying each unique question
 * @returns {[Object]}                    An array containing the edited question
 */

router.put('/:id', function(req, res){
    db('questions').where({id: req.params.id}).update({
        title: req.body.title || null
    }).returning('*').then(function(data){
        res.send(data);
    })
})



module.exports = router;