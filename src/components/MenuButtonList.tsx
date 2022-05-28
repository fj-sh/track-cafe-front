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
        <div className="mx-10 my-10">
          <OrderButton menu={menu} key={menu.id} updateMenus={updateMenus} />
        </div>
      ))}
    </>
  )
}

export default MenuButtonList
