const express =  require('express');
const Router =  express.Router();


//Start Block Calling and Initializing Middlewares

//Start Block Calling and Initializing Middlewares

//Start Block Calling and Initializing Controlers
const { UserTable } = require('../controllers/UserManagementController');
//Start Block Calling and Initializing Controlers

//Routes
Router.post('/UserTable',UserTable);
//Routes

module.exports = Router;