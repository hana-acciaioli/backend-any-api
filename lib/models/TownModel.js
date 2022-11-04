const pool = require('../utils/pool');
module.exports = class climbTown {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.nearestClimbingDestination = row.nearest_climbing_destination;
    this.climbMonths = row.climb_months;
    this.population = row.population;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from climbing_towns');
    return rows.map((townRow) => new climbTown(townRow));
  }
};
