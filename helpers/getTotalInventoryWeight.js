// Local imports
import { AllCatalogs } from '../helpers/AllCatalogs'





const getTotalInventoryWeight = options => {
  const {
    shouldRound,
    slots,
  } = options

  const itemCatalog = AllCatalogs.items

  const totalWeight = Object.values(slots).reduce((accumulator, itemData) => {
    if (itemData) {
      const {
        itemID,
        quantity,
      } = itemData
      const item = itemCatalog.getByID(itemID)

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
