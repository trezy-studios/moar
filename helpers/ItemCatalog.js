// Module imports
import Fuse from 'fuse.js'





const allItems = [
  {
    baseValue: 50,
    id: 0,
    name: 'Minor Health Potion',
    type: 'potion',
    weight: 0.1,
  },

  {
    baseValue: 50,
    id: 1,
    name: 'Minor Mana Potion',
    type: 'potion',
    weight: 0.1,
  },
]





class ItemCatalog {
  items = []
  itemsByID = {}
  itemsByName = {}

  addItem = item => {
    if (this.validateItem(item)) {
      item.safeName = item.name.toLowerCase().replace(/[^\w]/g, '-').replace(/--+/g, '-')
      this.items.push(item)
      this.itemsByID[item.id] = item
      this.itemsByName[item.name] = item
    }
  }

  addItems = items => items.forEach(this.addItem)

  constructor (items = []) {
    this.addItems([
      ...allItems,
      ...items,
    ])
  }

  findItem = searchKey => {
    const fuse = new Fuse(this.items, {
      includeScore: true,
      keys: [
        'id',
        'name',
      ]
    })

    return fuse.search(searchKey)
  }

  getItemByID = id => this.itemsByID[id]

  getItemByName = name => this.itemsByName[name]

  validateItem = item => {
    const errors = []
    const itemShapePairs = Object.entries({
      baseValue: value => (typeof value === 'number'),
      id: value => (typeof value === 'string'),
      name: value => (typeof value === 'string'),
      type: value => (typeof value === 'string'),
      weight: value => (typeof value === 'number'),
    })

    itemShapePairs.forEach(([key, test]) => {
      if (!item[key]) {
        return errors.push(`Item is missing required key ${key}`)
      }

      if (!test(item[key])) {
        return errors.push(`Item has invalid data type for key ${key}`)
      }
    })

    if (errors.length) {
      return errors
    }

    return true
  }
}





export {
  allItems,
  ItemCatalog,
}
