const { Router } = require('express');
const climbTown = require('../models/TownModel.js');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const town = await climbTown.getById(req.params.id);
    res.json(town);
  })
  .get('/', async (req, res) => {
    const towns = await climbTown.getAll();
    const filtered = towns.map(({ id, name }) => ({ id, name }));
    res.json(filtered);
  });
