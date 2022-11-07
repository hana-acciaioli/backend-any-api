const plants = [
  {
    id: '1',
    biome_name: 'BIRCH_FOREST',
    material: 'LONG_GRASS:1',
    base_material: 'GRASS',
    scan_for_material: 'LONG_GRASS:1',
    plant_density: 0.03,
  },
  {
    id: '2',
    biome_name: 'MESA',
    material: 'CACTUS:0',
    base_material: 'SAND',
    scan_for_material: 'CACTUS:0',
    plant_density: 0.002,
  },
  {
    id: '3',
    biome_name: 'MESA',
    material: 'SAPLING:0',
    base_material: 'GRASS',
    scan_for_material: 'LEAVES:0',
    plant_density: 0.1,
  },
  {
    id: '4',
    biome_name: 'MESA',
    material: 'SAPLING:0',
    base_material: 'DIRT',
    scan_for_material: 'LEAVES:0',
    plant_density: 0.1,
  },
];
module.exports = { plants };
