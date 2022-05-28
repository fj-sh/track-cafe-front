import { Menu } from './types/menu'

/**
 * メニューの配列から合計金額を返す。
 * @param {Menu[]} menus
 * @return {number} totalAmount
 */
export function getTotalAmount(menus: Menu[]) {
  return menus
    .map((menu) => menu.price * menu.numberOfOrders)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
}

/**
 * メニューの配列から商品数を返す。
 * @param {Menu[]} menus
 * @return {number} totalProducts
 */
export function getTotalProducts(menus: Menu[]) {
  return menus
    .map((menu) => menu.numberOfOrders)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
}
