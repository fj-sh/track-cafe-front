import React, { useState } from 'react'
import { menuData } from './lib/mocks/menu-data'
import { Menu } from './lib/types/menu'
import style from './App.module.scss'
import TrackCafeLayout from './components/TrackCafeLayout'

const App = () => {
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
    <div className={style.container}>
      <TrackCafeLayout menus={menus} updateMenus={updateMenus} />
    </div>
  )
}

export default App
