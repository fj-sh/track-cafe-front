import React from 'react'
import './App.css'
import OrderButton from './components/OrderButton'
import { menus } from './lib/mock'

/**
 * React App
 * @constructor
 */
function App() {
  return (
    <div className="App">
      {menus.map((menu) => (
        <div className={'my-8 mx-8'}>
          <OrderButton menu={menu} key={menu.id} />
        </div>
      ))}
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default App
