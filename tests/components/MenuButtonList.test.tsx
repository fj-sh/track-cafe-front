import React from 'react'
import { render, renderHook, screen } from '@testing-library/react'
import { useMenu } from '../../src/hooks/useMenu'
import { menuData } from '../../src/lib/mocks/menu-data'
import MenuButtonList from '../../src/components/MenuButtonList'
import { Menu } from '../../src/lib/types/menu'

describe('MenuButtonList', () => {
  it('正しくレンダリングされること', () => {
    const { result } = renderHook(() => useMenu(menuData))
    const { container } = render(
      <MenuButtonList menus={result.current.menus} updateMenus={result.current.updateMenus} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
  it('メニューがないときに「メニューデータが存在しません」と表示されること', () => {
    const { result } = renderHook(() => useMenu(menuData))
    const emptyMenus: Menu[] = []
    render(<MenuButtonList menus={emptyMenus} updateMenus={result.current.updateMenus} />)
    const menuNotFoundElement = screen.getByTestId('menuNotFound')
    expect(menuNotFoundElement.textContent).toEqual('メニューデータが存在しません。')
  })
})
