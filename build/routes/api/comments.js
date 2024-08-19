const express = require('express');
const router = express.Router();
const db = require('../../db')


/**
 * GET all comments relating to a specific thread
 * 
 * @param   {int}         thread_id       A number for identifying the parent thread
 * @returns {[Object]}                    An array containing question objects
 */
router.get('/:id', function(req, resp) {
    db('comments').where({comment_id: req.params.id}).select().then(function(data) {
        resp.send(data);
    });
});

/**
 * POST: comment to comments table
 * 
 * @param   {Object}       object           An object or an array of objects containing variables for creating a comment
 * @param   {Object}       object.id        A number for identifying each unique comment
 * @param   {Object}       object.thread_id A Foreign key(int) for identifying the parent thread
 * @param   {Object}       object.user_id   A Foreign key(int) for identifying the creator
 * @param   {Object}       object.content   A string for the content of the comment
 * @returns {Object}                        Returns an object of the created comment
 */
router.post('/', function (req, res) {
    db.insert(req.body).returning('*').into('comments').then(function(data) {
        res.send(data);
    })
});

/**
 * PATCH an existing comment
 * 
 * @param   {int}         id              A number for identifying each unique comment
 * @returns {[Object]}                    An array containing the created comment
 */
router.patch('/:id', function(req, res) {
    db('comments').where({ comment_id: req.params.id}).update(req.body).returning('*').then(function(data) {
        res.send(data);
    });
    
});

/**
 * PUT an existing comment
 * 
 * @param   {int}         id              A number for identifying each unique comment
 * @returns {[Object]}                    An array containing the edited comment
 */

router.put('/:id', function(req, res){
    db('comments').where({comment_id: req.params.id}).update({
        title: req.body.content || null
    }).returning('*').then(function(data){
        res.send(data);
    })
})

/**
 * DELETE an existing comment
 * 
 * @param   {int}         id              A number for identifying each unique comment
 * @returns {[Object]}                    An array containing the deleted comment
 */
router.delete('/:id', function(req, res) {
    db('comments').where({comment_id: req.params.id}).del().then(function() {
        res.json({sucess: true});
    });
});

module.exports = router;