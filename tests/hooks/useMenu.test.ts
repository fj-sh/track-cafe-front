import { act, renderHook } from '@testing-library/react'
import { useMenu } from '../../src/hooks/useMenu'
import { menuData } from '../../src/lib/mocks/menu-data'
import { Menu } from '../../src/lib/types/menu'

describe('useMenu', () => {
  it('デフォルトで5つのメニューを返すこと', () => {
    // TODO: beforeAll などを使って初期化処理を切り出せないか確認すること
    const { result } = renderHook(() => useMenu(menuData))
    expect(result.current.menus.length).toEqual(5)
  })
  describe('商品をデフォルトから1つ追加したとき', () => {
    it('コーヒーの numberOfOrders が +1 インクリメントされること', () => {
      const { result } = renderHook(() => useMenu(menuData))
      act(() => {
        const updateMenu: Menu = { id: 'coffee', name: 'コーヒー', price: 480, numberOfOrders: 0 }
        result.current.updateMenus(updateMenu)
      })
      const coffeeMenu = result.current.menus.filter((menu) => menu.id === 'coffee')
      expect(coffeeMenu[0].numberOfOrders).toEqual(1)
    })
    it('紅茶の numberOfOrders が +1 インクリメントされること', () => {
      const { result } = renderHook(() => useMenu(menuData))
      act(() => {
        const updateMenu: Menu = { id: 'tea', name: '紅茶', price: 280, numberOfOrders: 0 }
        result.current.updateMenus(updateMenu)
      })
      const teaMenu = result.current.menus.filter((menu) => menu.id === 'tea')
      expect(teaMenu[0].numberOfOrders).toEqual(1)
    })

    it('ミルクの numberOfOrders が +1 インクリメントされること', () => {
      const { result } = renderHook(() => useMenu(menuData))
      act(() => {
        const updateMenu: Menu = { id: 'milk', name: 'ミルク', price: 180, numberOfOrders: 0 }
        result.current.updateMenus(updateMenu)
      })
      const milkMenu = result.current.menus.filter((menu) => menu.id === 'milk')
      expect(milkMenu[0].numberOfOrders).toEqual(1)
    })

    it('コーラ numberOfOrders が +1 インクリメントされること', () => {
      const { result } = renderHook(() => useMenu(menuData))
      act(() => {
        const updateMenu: Menu = { id: 'coke', name: 'コーラ', price: 190, numberOfOrders: 0 }
        result.current.updateMenus(updateMenu)
      })
      const cokeMenu = result.current.menus.filter((menu) => menu.id === 'coke')
      expect(cokeMenu[0].numberOfOrders).toEqual(1)
    })

    it('ビール numberOfOrders が +1 インクリメントされること', () => {
      const { result } = renderHook(() => useMenu(menuData))
      act(() => {
        const updateMenu: Menu = { id: 'beer', name: 'ビール', price: 580, numberOfOrders: 0 }
        result.current.updateMenus(updateMenu)
      })
      const beerMenu = result.current.menus.filter((menu) => menu.id === 'beer')
      expect(beerMenu[0].numberOfOrders).toEqual(1)
    })
  })

  describe('既に商品が追加されていて、さらに商品を追加したとき', () => {
    it('すべての商品を追加したときに正しく増加分が反映されること', () => {
      const menuDataAlreadyAdded: Menu[] = [
        { id: 'coffee', name: 'コーヒー', price: 480, numberOfOrders: 1 },
        { id: 'tea', name: '紅茶', price: 280, numberOfOrders: 2 },
        { id: 'milk', name: 'ミルク', price: 180, numberOfOrders: 3 },
        { id: 'coke', name: 'コーラ', price: 190, numberOfOrders: 4 },
        { id: 'beer', name: 'ビール', price: 580, numberOfOrders: 5 },
      ]
      const { result } = renderHook(() => useMenu(menuDataAlreadyAdded))

      // coffee を追加
      act(() => {
        const updateMenu: Menu = { id: 'coffee', name: 'コーヒー', price: 480, numberOfOrders: 0 }
        result.current.updateMenus(updateMenu)
      })
      const coffeeMenu = result.current.menus.filter((menu) => menu.id === 'coffee')
      expect(coffeeMenu[0].numberOfOrders).toEqual(2)

      // tea を追加
      act(() => {
        const updateMenu: Menu = { id: 'tea', name: '紅茶', price: 280, numberOfOrders: 0 }
        result.current.updateMenus(updateMenu)
      })
      const teaMenu = result.current.menus.filter((menu) => menu.id === 'tea')
      expect(teaMenu[0].numberOfOrders).toEqual(3)

      // milk を追加
      act(() => {
        const updateMenu: Menu = { id: 'milk', name: 'ミルク', price: 180, numberOfOrders: 0 }
        result.current.updateMenus(updateMenu)
      })
      const milkMenu = result.current.menus.filter((menu) => menu.id === 'milk')
      expect(milkMenu[0].numberOfOrders).toEqual(4)

      // coke を追加
      act(() => {
        const updateMenu: Menu = { id: 'coke', name: 'コーラ', price: 190, numberOfOrders: 0 }
        result.current.updateMenus(updateMenu)
      })
      const cokeMenu = result.current.menus.filter((menu) => menu.id === 'coke')
      expect(cokeMenu[0].numberOfOrders).toEqual(5)

      // beer を追加
      act(() => {
        const updateMenu: Menu = { id: 'beer', name: 'ビール', price: 580, numberOfOrders: 0 }
        result.current.updateMenus(updateMenu)
      })
      const beerMenu = result.current.menus.filter((menu) => menu.id === 'beer')
      expect(beerMenu[0].numberOfOrders).toEqual(6)
    })
  })
})
