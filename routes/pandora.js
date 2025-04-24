const express = require('express');
const router = express.Rounter();

// Getting all data
router.get('/', (req, res) => {

})
//Getting a specific data
router.get('/:id', (req, res) => {
res.send('Hello World')
})
//Creating data
router.post('/', (req, res) => {
  
})
//Updating data
router.patch('/', (req, res) => {
  
})
//Delete data
router.delete('/:id', (req, res) => {
  
})
module.exports = router
