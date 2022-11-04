const { Router } = require('express');
const climbTown = require('../models/TownModel.js');

module.exports = Router().get('/', async (req, res) => {
  const towns = await climbTown.getAll();
  const filtered = towns.map(({ id, name }) => ({ id, name }));
  res.json(filtered);
});
