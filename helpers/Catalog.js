// Module imports
import Fuse from 'fuse.js'





class Catalog {
  byID = {}
  byName = {}
  items = []

  addItem = item => {
    if (this.validateItem(item)) {
      const safeName = item.name.toLowerCase().replace(/[^\w]/g, '-').replace(/--+/g, '-')

      item.imageURL = `/game-assets/${this.name}/${safeName}@4x.png`
      item.safeName = safeName

      this.items.push(item)
      this.byID[item.id] = item
      this.byName[item.name] = item
    }
  }

  addItems = items => items.forEach(this.addItem)

  constructor (options) {
    const {
      items = [],
      name,
      shape,
    } = options

    this.name = name
    this.shape = shape

    this.addItems(items)
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

  getByID = id => this.byID[id]

  getByName = name => this.byName[name]

  validateItem = item => {
    const errors = []
    const shapePairs = Object.entries(this.shape)

    shapePairs.forEach(([key, test]) => {
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





export { Catalog }
