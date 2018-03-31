module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();

    router.use("/users", require("./users.js")(passport));
    router.use("/sessions", require("./sessions.js")(passport));

	return router;
};