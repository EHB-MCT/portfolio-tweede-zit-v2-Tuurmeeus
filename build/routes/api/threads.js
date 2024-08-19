const express = require('express');
const router = express.Router();
const db = require('../../db')

/**
 * GET all threads saved in the database
 * 
 * @returns {[Object]}                   An array of all threads
 * 
 */
router.get('/', function(req, resp) {
    db.select().from('threads').then(function(data) {
        resp.send(data);
    });
})

/**
 * GET a thread object by their id from the database
 * 
 * @param   {int}         id              A number for identifying each unique thread
 * @returns {[Object]}                    An array containing a thread object
 */
router.get('/:id', function(req, resp) {
    db('threads').where({id: req.params.id}).select().then(function(data) {
        resp.send(data);
    });
});

/**
 * POST: create a new thread
 * 
 * @param   {Object}       object       An object or an array of objects containing variables for creating a new thread
 * @param   {Object}       object.id    A number for identifying each unique thread
 * @param   {Object}       object.user_id  A Foreign key(INT) for identifying the user that created the thread
 * @param   {Object}       object.isResolved A boolean showing the status of the thread
 * 
 * @returns {Object}                    Returns an object of the created user
 */
router.post('/', function (req, res) {
    db.insert(req.body).returning('*').into('threads').then(function(data) {
        res.send(data);
    })
});


/**
 * DELETE: an existing thread
 * 
 * @param   {int}         id              A number for identifying each unique thread
 * @returns {[Object]}                    An array containing the deleted thread
 */
router.delete('/:id', function(req, res) {
    db('threads').where({id: req.params.id}).del().then(function() {
        res.json({sucess: true});
    });
});

module.exports = router;