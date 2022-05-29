import React from 'react'
import { menuData } from './lib/mocks/menu-data'
import style from './App.module.scss'
import TrackCafeLayout from './components/TrackCafeLayout'
import { useMenu } from './hooks/useMenu'

const App = () => {
  const { menus, updateMenus } = useMenu(menuData)
  return (
    <div className={style.container}>
      <TrackCafeLayout menus={menus} updateMenus={updateMenus} />
    </div>
  )
}

export default App
