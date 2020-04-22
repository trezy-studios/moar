// Module imports
import Fuse from 'fuse.js'





// Local imports
import { Catalog } from './Catalog'
import allItems from '../data/items'
import allSpells from '../data/spells'





// Local constants
const ITEM_TYPES = {
  'potion': true,
}
const SPELL_SHAPES = {
  'circle': true,
  'square': true,
}
const SPELL_TYPES = {
  'missile': true,
  'target': true,
  'area': true,
}





class AllCatalogs {
  static items = new Catalog({
    items: allItems,
    name: 'items',
    shape: {
      baseValue: value => (typeof value === 'number'),
      id: value => (typeof value === 'string'),
      name: value => (typeof value === 'string'),
      type: value => ITEM_TYPES[value],
      weight: value => (typeof value === 'number'),
    }
  })

  static spells = new Catalog({
    items: allSpells,
    name: 'spells',
    shape: {
      baseArea: value => (typeof value === 'number'),
      baseCooldown: value => (typeof value === 'number'),
      baseDamage: value => (typeof value === 'number'),
      baseDuration: value => (typeof value === 'number'),
      id: value => ['number', 'string'].includes(typeof value),
      name: value => (typeof value === 'string'),
      shape: value => {
        if (value) {
          return SPELL_SHAPES[value]
        }
        return true
      },
      type: value => SPELL_TYPES[value],
    }
  })
}





export { AllCatalogs }
