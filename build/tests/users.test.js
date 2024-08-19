const request = require('supertest');
const express = require('express');
const router = express.Router();
const db = require('../../db');
const app = require('../index');


it('should return details of an existing user', async () => {
    const res = await request(app)
      .post('/users')
      .send({ user_name: 'Tuur' }); 

    expect(res.statusCode).toBe(200);
    expect(res.body.is_new).toBeFalsy();
    expect(res.body.user_name).toBe('Tuur');
  });

  describe('Create a new user', () => {
    it('should save a new user to the database', async () => {
      const user_name = 'teeus';
      const user_fname = 'muur'; 
      const role = 'student';
      const email = 'muur@ehb.be'
      
      const res = await request(app)
        .post('/users')
        .send({ user_name, fname, role, email });
  
      expect(res.statusCode).toBe(200);
      expect(res.body.user_name).toBe(user_name);
      expect(res.body.user_fname).toBe(user_fname);
      expect(res.body.role).toBe(role);
      expect(res.body.email).toBe(email);
    })});

    