import React, { useState } from 'react'
import './App.css'
import { menuData } from './lib/mocks/menu-data'
import MenuButtonList from './components/MenuButtonList'
import { Menu } from './lib/types/menu'

/**
 * React App
 * @constructor
 */
function App() {
  const [menus, setMenus] = useState(menuData)
  const updateMenus = (targetMenu: Menu) => {
    const updatedMenus = menus.map((menu) => {
      if (menu.id === targetMenu.id) {
        return { ...menu, numberOfOrders: menu.numberOfOrders + 1 }
      }
      return menu
    })
    setMenus(updatedMenus)
  }
  return (
    <div className="App">
      <MenuButtonList menus={menus} updateMenus={updateMenus} />
    </div>
  )
}

export default App
