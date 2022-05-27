import React from 'react'
import { Menu } from '../lib/types/menu'
import './OrderButton.scss'

type Props = {
  menu: Menu
}

const OrderButton = ({ menu }: Props) => {
  return (
    <>
      <div className="order-button">
        <div className="menu">
          <span className="menu-name">{menu.name}</span>
          <span className="menu-price">{menu.price} 円</span>
        </div>
        <span className="badge">{menu.numberOfOrders}</span>
      </div>
    </>
  )
}

export default OrderButton
