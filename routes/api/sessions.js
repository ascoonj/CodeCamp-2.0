module.exports = function (passport) {
	const path = require("path");
    const router = require('express').Router();
	const sessionsController = require("../../controllers/sessionsController.js");
    

    router.get('/', sessionsController.findAllSessions);
    router.post('/',sessionsController.addNewSession);

    router.get('/:id', sessionsController.findSessionById);
    router.put('/:id', sessionsController.updateSession);
    


	return router;
};