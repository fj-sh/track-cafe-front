import React from 'react'
import { vi } from 'vitest'
import { cleanup, fireEvent, render, renderHook } from '@testing-library/react'
import { screen } from '@testing-library/react'
import MenuButton from '../../src/components/MenuButton'
import { useMenu } from '../../src/hooks/useMenu'
import { menuData } from '../../src/lib/mocks/menu-data'

describe('MenuButton', () => {
  it('正しくレンダリングされること', () => {
    const { result } = renderHook(() => useMenu(menuData))
    const { container } = render(
      <MenuButton menu={result.current.menus[0]} updateMenus={result.current.updateMenus} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
  describe('menuButtonがクリックされたとき', () => {
    const handleClick = vi.fn()
    beforeAll(() => {
      const { result } = renderHook(() => useMenu(menuData))
      render(<MenuButton menu={result.current.menus[0]} updateMenus={handleClick} />)
      fireEvent.click(screen.getByTestId('menuButton'))
    })
    it('onClickが呼ばれること', () => {
      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })
  afterEach(() => cleanup())
})
