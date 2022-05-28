import React from 'react'
import { Menu } from '../lib/types/menu'
import { getTotalAmount, getTotalProducts } from '../lib/bill-board'
import './BillBoard.scss'

type Props = {
  menus: Menu[]
}

const BillBoard = ({ menus }: Props) => {
  return (
    <div className="container">
      <span className="title"> お会計</span>

      <span className="amount">商品数：{getTotalProducts(menus)} 個</span>
      <span className="amount">合計金額：{getTotalAmount(menus)} 円</span>
    </div>
  )
}

export default BillBoard
