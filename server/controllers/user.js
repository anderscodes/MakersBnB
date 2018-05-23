const User = require('../models').User;

module.exports = {
  create(req, res) {
    return User
    .create({
      name: req.body.name,
      email: req.body.email,
      phone_nr: req.body.phone,
    })
    .then(user => console.log("success"))
    .catch(error => console.log(error));
  },
};