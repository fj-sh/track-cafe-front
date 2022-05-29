import { useState } from 'react'
import { Menu } from '../lib/types/menu'
import { menuData } from '../lib/mocks/menu-data'

export const useMenu = (initialMenu: Menu[]) => {
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
  return {
    menus,
    updateMenus,
  }
}
