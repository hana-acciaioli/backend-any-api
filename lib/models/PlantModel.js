const pool = require('../utils/pool');
module.exports = class plantBotany {
  constructor(row) {
    this.id = row.id;
    this.biomeName = row.biome_name;
    this.material = row.material;
    this.baseMaterial = row.base_material;
    this.scanForMaterial = row.scan_for_material;
    this.plantDensity = row.plant_density;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from plants_botany');
    return rows.map((plantRow) => new plantBotany(plantRow));
  }
};
