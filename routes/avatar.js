const express = require('express');
const router = express.Router();
const Wildlife = require('../models/wildlife');

// Getting all data
router.get('/', async (req, res) => {
  try {
    const wildlife = await Wildlife.find();
    res.json(wildlife);
  } catch (err) {
    res.status(500).json({ message: err.message }); //Verify later err msg
  }
});

//Getting a specific data
router.get('/:id', (req, res) => {
  res.send(req.params.id);
});

//Creating data
// router.post('/', async (req, res) => {
//   const wildlife = new Wildlife({
//     name: req.body.name,
//     region: req.body.region,
//     commonLocation: req.body.commonLocation,
//     rareLocation: req.body.rareLocation,
//     weakSpot: req.body.weakSpot,
//     drops: req.body.drops,
//   });
//   try {
//     const newWildlife = await wildlife.save();
//     console.log(newWildlife);
//     res.status(201).json(newWildlife);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// Optmized create data
router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const wildlife = new Wildlife(req.body);
    const newWildlife = await wildlife.save();
    console.log(newWildlife);
    return res.status(201).json(newWildlife);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

//Updating data
router.patch('/:id', (req, res) => {});
//Delete data
router.delete('/:id', (req, res) => {});
module.exports = router;
