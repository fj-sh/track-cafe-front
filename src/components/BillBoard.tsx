import React from 'react'
import { Menu } from '../lib/types/menu'

type Props = {
  menus: Menu[]
}

const BillBoard = ({ menus }: Props) => {
  return (
    <div className="container">
      <div className="title"> お会計</div>
      <div className="order-price"></div>
    </div>
  )
}

export default BillBoard
