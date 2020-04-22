// Module imports
import React from 'react'





// Local imports
import { Hotbar } from './Hotbar'
import { InventoryPanel } from './InventoryPanel'
import { QuickStats } from './QuickStats'





const GameUI = () => (
  <div className="game-ui">
    <div className="quick-stats-container">
      <QuickStats />
    </div>

    <div className="hotbar-container">
      <Hotbar />
    </div>

    <div className="panels-container">
      <InventoryPanel />
    </div>
  </div>
)





export { GameUI }
