import { describe, expect, it } from 'vitest'
import { Menu } from '../../src/lib/types/menu'
import { getTotalAmount, getTotalProducts } from '../../src/lib/bill-board'

describe('bill-board functions', () => {
  const haveAllMenus: Menu[] = [
    { id: 'coffee', name: 'コーヒー', price: 480, numberOfOrders: 1 },
    { id: 'tea', name: '紅茶', price: 280, numberOfOrders: 2 },
    { id: 'milk', name: 'ミルク', price: 180, numberOfOrders: 3 },
    { id: 'coke', name: 'コーラ', price: 190, numberOfOrders: 4 },
    { id: 'beer', name: 'ビール', price: 580, numberOfOrders: 5 },
  ]

  const haveZeroMenus: Menu[] = [
    { id: 'coffee', name: 'コーヒー', price: 480, numberOfOrders: 1 },
    { id: 'tea', name: '紅茶', price: 280, numberOfOrders: 2 },
    { id: 'milk', name: 'ミルク', price: 180, numberOfOrders: 0 },
    { id: 'coke', name: 'コーラ', price: 190, numberOfOrders: 4 },
    { id: 'beer', name: 'ビール', price: 580, numberOfOrders: 0 },
  ]

  const allZeroMenus: Menu[] = [
    { id: 'coffee', name: 'コーヒー', price: 480, numberOfOrders: 0 },
    { id: 'tea', name: '紅茶', price: 280, numberOfOrders: 0 },
    { id: 'milk', name: 'ミルク', price: 180, numberOfOrders: 0 },
    { id: 'coke', name: 'コーラ', price: 190, numberOfOrders: 0 },
    { id: 'beer', name: 'ビール', price: 580, numberOfOrders: 0 },
  ]

  describe('getTotalAmount', () => {
    it('すべての商品が購入されたときに合計金額を正しく返すこと', () => {
      const totalAmount = getTotalAmount(haveAllMenus)
      const expectTotalAmount = 5240
      expect(totalAmount).equal(expectTotalAmount)
    })

    it('0個の商品があっても合計金額を正しく返すこと', () => {
      const totalAmount = getTotalAmount(haveZeroMenus)
      const expectTotalAmount = 1800
      expect(totalAmount).equal(expectTotalAmount)
    })

    it('何も商品が購入されていないときは 0 を返すこと', () => {
      const totalAmount = getTotalAmount(allZeroMenus)
      const expectTotalAmount = 0
      expect(totalAmount).equal(expectTotalAmount)
    })
  })

  describe('getTotalProducts', () => {
    it('すべてのメニューが購入されたときに商品数を正しく返すこと', () => {
      const totalProducts = getTotalProducts(haveAllMenus)
      const expectTotalProducts = 15
      expect(totalProducts).equal(expectTotalProducts)
    })

    it('0個の商品があっても商品数を正しく返すこと', () => {
      const totalProducts = getTotalProducts(haveZeroMenus)
      const expectTotalProducts = 7
      expect(totalProducts).equal(expectTotalProducts)
    })

    it('何も商品を購入していないときは 0 を返すこと', () => {
      const totalProducts = getTotalProducts(allZeroMenus)
      const expectTotalProducts = 0
      expect(totalProducts).equal(expectTotalProducts)
    })
  })
})
