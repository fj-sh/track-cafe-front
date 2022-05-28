import React from 'react'
import { Menu } from '../lib/types/menu'
import { getTotalAmount, getTotalProducts } from '../lib/bill-board'
import style from './BillBoard.module.scss'

type Props = {
  menus: Menu[]
}

const BillBoard = ({ menus }: Props) => {
  return (
    <div className={style.container}>
      <span className={style.title}> お会計</span>

      <span className={style.amount}>商品数：{getTotalProducts(menus)} 個</span>
      <span className={style.amount}>合計金額：{getTotalAmount(menus)} 円</span>
    </div>
  )
}

export default BillBoard
