// Module imports
import React from 'react'





// Local imports
import { InventoryPanel } from './InventoryPanel'
import { QuickStats } from './QuickStats'





const GameUI = () => (
  <div className="game-ui">
    <QuickStats />
    <InventoryPanel />
  </div>
)





export { GameUI }
