const UserController = require('../controllers/user.controller');

module.exports = (app) => {
    app.get('/api/create_user', UserController.createUser);
};