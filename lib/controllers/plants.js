const { Router } = require('express');
const plantBotany = require('../models/PlantModel.js');

module.exports = Router().get('/', async (req, res) => {
  const plants = await plantBotany.getAll();
  const filtered = plants.map(({ id, biomeName }) => ({ id, biomeName }));
  res.json(filtered);
});
