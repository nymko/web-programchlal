const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const carnumber = req.body.carnumber;
  const newUser = new User({carnumber});

  newUser.save()
    .then(() => res.json('carnumber added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;