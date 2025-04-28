const express = require('express');
const router = express.Router();
const Species = require('../models/species');

// Getting all species
router.get('/', async (req, res) => {
  try {
    const species = await Species.find();
    res.json(species);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Getting a specific species
router.get('/:id', getSpecies, (req, res) => {
  res.send(req.params.id);
});

// Create species
router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const species = new Species(req.body);
    const newSpecies = await species.save();
    console.log(newSpecies);
    return res.status(201).json(newSpecies);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

//Updating species
router.patch('/:id', getSpecies, async(req, res) => {
  if (req.body.name != null) {
    res.species.name = req.body.name
  }
  try {
    const updatedSpecies = await res.species.save()
    res.json(updatedSpecies)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
});

//Delete species
router.delete('/:id', getSpecies, async(req, res) => {
  try {
    await res.species.remove()
    res.json({ message: 'Deleted Species' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});

async function getSpecies(req, res, next) {
  let species;
  try {
    species = await Species.findById(req.params.id);
    if (species == null) {
      return res.status(404).json({ message: 'Cannot find species' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.species = species;
  next();
}

module.exports = router;
