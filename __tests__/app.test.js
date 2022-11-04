const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { plants } = require('../lib/plants-data.js');
const { towns } = require('../lib/climbing-towns-data.js');

describe('plants routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/plants should return a list of plant botany', async () => {
    const res = await request(app).get('/plants');
    const expected = plants.map((plant) => {
      return { id: plant.id, biomeName: plant.biome_name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/plants/:id should return plant biome detail', async () => {
    const res = await request(app).get('/plants/1');
    const birchForest = {
      id: '1',
      biomeName: 'BIRCH_FOREST',
      material: 'LONG_GRASS:1',
      baseMaterial: 'GRASS',
      scanForMaterial: 'LONG_GRASS:1',
      plantDensity: 0.03,
    };
    expect(res.body).toEqual(birchForest);
  });

  afterAll(() => {
    pool.end();
  });
});

describe('climbing town routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/towns should return a list of towns with id', async () => {
    const res = await request(app).get('/towns');
    const expected = towns.map((town) => {
      return { id: town.id, name: town.name };
    });
    expect(res.body).toEqual(expected);
  });
});
