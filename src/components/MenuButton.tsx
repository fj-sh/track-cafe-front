import React from 'react'
import { Menu } from '../lib/types/menu'
import style from './MenuButton.module.scss'

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
      <div className={style.menuButton} onClick={onClick} data-testid="menuButton">
        <div className={style.menu}>
          <span className="">{menu.name}</span>
          <span className="">{menu.price} 円</span>
        </div>
        <span className={style.badge} data-testid="badge">
          {menu.numberOfOrders}
        </span>
      </div>
    </>
  )
}

export default MenuButton
