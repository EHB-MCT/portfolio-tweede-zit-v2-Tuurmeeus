const express = require('express');
const router = express.Router();
const db = require('../../db')

/**
 * GET all users saved in the database
 * 
 * @returns {[Object]}                   An array of all users
 * 
 */
router.get('/', function(req, resp) {
    db.select().from('users').then(function(data) {
        resp.send(data);
    });
})

/**
 * GET a user object by their id from the database
 * 
 * @param   {int}         id              A number for identifying each unique user
 * @returns {[Object]}                    An array containing a user object
 */
router.get('/:id', function(req, resp) {
    db('users').where({id: req.params.id}).select().then(function(data) {
        resp.send(data);
    });
});

/**
 * POST: student to student table
 * 
 * @param   {Object}       object       An object or an array of objects containing variables for creating a user
 * @param   {Object}       object.id    A number for identifying each unique user
 * @param   {Object}       object.name  A string for the last name of a user
 * @param   {Object}       object.fname A string for the first name of a user
 * @param   {Object}       object.role  A string for the designated role of a user
 * @returns {Object}                    Returns an object of the created user
 */
router.post('/', function (req, res) {
    db.insert(req.body).returning('*').into('users').then(function(data) {
        res.send(data);
    })
});

/**
 * PATCH: an existing user
 * 
 * @param   {int}         id              A number for identifying each unique user
 * @returns {[Object]}                    An array containing the created user
 */
router.patch('/:id', function(req, res) {
    db('users').where({ id: req.params.id}).update(req.body).returning('*').then(function(data) {
        res.send(data);
    });
    
});

/**
 * DELETE: an existing student
 * 
 * @param   {int}         id              A number for identifying each unique user
 * @returns {[Object]}                    An array containing the deleted user
 */
router.delete('/:id', function(req, res) {
    db('users').where({id: req.params.id}).del().then(function() {
        res.json({sucess: true});
    });
});

module.exports = router;