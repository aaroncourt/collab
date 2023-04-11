const User = require('../models/user.model');

module.exports = {
    // test that server is running
    testConnection: (req, res) => {
        res.json({ 
            message: "Hello World"
        });
    },

    // create a new user using User schema
    createUser: (req, res) => {
        User.create(req.body)
            .then(newUser => 
                res.json({user: newUser}))
            .catch (err => {
                res.json({message: 'Something went wrong when creating a new user: ', error: err})
            })
    },

    verifyUser: (req, res => {
        User.findOne
    })
}
