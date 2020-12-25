const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const carnumber = req.body.carnumber;
  const carmark = req.body.carmark;  
  const ownerovog = req.body.ownerovog;
  const ownerner = req.body.ownerner;
  const ownerrd = req.body.ownerrd; 
  const ownerphone = Number(req.body.ownerphone); 
  const ownergender = req.body.ownergender;  
  const uildon = Number(req.body.uildon);

  const newExercise = new Exercise({
    
    carnumber,
    carmark,
    ownerovog,
    ownerner,
    ownerrd,
    ownerphone,
    ownergender,
    uildon,
  });

  newExercise.save()
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => {
      exercise.carnumber = req.body.carnumber;
      exercise.carmark = req.body.carmark;
      exercise.ownerovog = req.body.ownerovog;
      exercise.ownerner = req.body.ownerner;
      exercise.ownerrd = req.body.ownerrd;      
      exercise.ownerphone = Number(req.body.ownerphone);
      exercise.ownergender = req.body.ownergender;
      exercise.uildon = Number(req.body.uildon);

      exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;