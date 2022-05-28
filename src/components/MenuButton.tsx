import React from 'react'
import { Menu } from '../lib/types/menu'
import './MenuButton.scss'

type Props = {
  menu: Menu
  updateMenus: (menu: Menu) => void
}

const MenuButton = ({ menu, updateMenus }: Props) => {
  const onClick = () => {
    updateMenus(menu)
  }
  return (
    <>
      <div className="order-button" onClick={onClick}>
        <div className="menu">
          <span className="menu-name">{menu.name}</span>
          <span className="menu-price">{menu.price} 円</span>
        </div>
        <span className="badge">{menu.numberOfOrders}</span>
      </div>
    </>
  )
}

export default MenuButton
