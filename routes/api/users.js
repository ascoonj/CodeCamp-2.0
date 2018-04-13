module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();
    const usersController = require("../../controllers/usersController.js");
    

    router.get('/', usersController.findAllUsers);
    router.post('/',usersController.addNewUser);

    router.get('/:id', usersController.findUserById);
    router.post('/addToSchedule/:id', usersController.updateUserSchedule);

    
    


	return router;
};