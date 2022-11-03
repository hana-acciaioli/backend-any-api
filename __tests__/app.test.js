const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { plants } = require('../lib/plants-data.js');

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
});
