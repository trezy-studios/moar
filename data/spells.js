export default [
  {
    baseArea: 0,
    baseCooldown: 500,
    baseDamage: 10,
    baseDuration: 0,
    id: 0,
    name: 'Magic Missile',
    shape: 'circle',
    type: 'missile',
  },

  {
    baseArea: 0,
    baseCooldown: 1000,
    baseDamage: -10,
    baseDuration: 0,
    id: 1,
    name: 'Heal',
    shape: null,
    type: 'target',
  },

  {
    baseArea: 50,
    baseDamage: 0,
    baseCooldown: 5000,
    baseDuration: 5000,
    id: 2,
    name: 'Entangle',
    shape: 'circle',
    type: 'area',
  },
]
