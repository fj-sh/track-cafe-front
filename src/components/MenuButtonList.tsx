import React from 'react'
import { Menu } from '../lib/types/menu'
import OrderButton from './MenuButton'

type Props = {
  menus: Menu[]
  updateMenus: (menu: Menu) => void
}

const MenuButtonList = ({ menus, updateMenus }: Props) => {
  if (!menus.length) return <div>メニューデータが存在しません。</div>
  return (
    <>
      {menus.map((menu) => (
        <OrderButton menu={menu} key={menu.id} updateMenus={updateMenus} />
      ))}
    </>
  )
}

export default MenuButtonList
