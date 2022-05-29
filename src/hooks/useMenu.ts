import { useState } from 'react'
import { Menu } from '../lib/types/menu'

/**
 * 初期メニューからメニューの状態を生成する。
 * @param {Menu[]} initialMenu
 * @return {Object} メニューのステート
 */
export const useMenu = (initialMenu: Menu[]) => {
  const [menus, setMenus] = useState(initialMenu)
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
