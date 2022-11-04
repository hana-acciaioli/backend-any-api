const { Router } = require('express');
const plantBotany = require('../models/PlantModel.js');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const plant = await plantBotany.getById(req.params.id);
    res.json(plant);
  })
  .get('/', async (req, res) => {
    const plants = await plantBotany.getAll();
    const filtered = plants.map(({ id, biomeName }) => ({ id, biomeName }));
    res.json(filtered);
  });
