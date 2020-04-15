// Local imports
import { ItemCatalog } from '../helpers/ItemCatalog'





const getTotalInventoryWeight = options => {
  const {
    itemCatalog,
    shouldRound,
    slots,
  } = options

  if (!itemCatalog) {
    itemCatalog = new ItemCatalog
  }

  const totalWeight = Object.values(slots).reduce((accumulator, itemData) => {
    if (itemData) {
      const {
        itemID,
        quantity,
      } = itemData
      const item = itemCatalog.getItemByID(itemID)

      return accumulator += (item.weight * quantity)
    }

    return accumulator
  }, 0)

  if (shouldRound) {
    return Math.round(totalWeight)
  }

  return totalWeight
}





export { getTotalInventoryWeight }
