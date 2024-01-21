module.exports = (app) => {

    const UserController = require("../controllers/users.controller");
    const router = require('express').Router();
    router.get('/', UserController.getUsers);
    router.get('/:id', UserController.getUserById);
    router.post('/register', UserController.registerUser);
    router.post('/login', UserController.loginUser);
    router.delete('/logout', UserController.logoutUser);

    app.use('/api/users', router);
};