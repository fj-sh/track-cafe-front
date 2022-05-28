import React from 'react'
import MenuButtonList from './MenuButtonList'
import BillBoard from './BillBoard'
import { Menu } from '../lib/types/menu'
import style from './TrackCafeLayout.module.scss'

type Props = {
  menus: Menu[]
  updateMenus: (menu: Menu) => void
}
const TrackCafeLayout = ({ menus, updateMenus }: Props) => {
  return (
    <>
      <div className={style.container}>
        <div className={style.menuButtonList}>
          <MenuButtonList menus={menus} updateMenus={updateMenus} />
        </div>
        <div className={style.billBoard}>
          <BillBoard menus={menus} />
        </div>
      </div>
    </>
  )
}

export default TrackCafeLayout
