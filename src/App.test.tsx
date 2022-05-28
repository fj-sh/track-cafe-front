import React from 'react'
import { it } from 'vitest'
import { render } from '@testing-library/react'
import App from './App'

describe('<App /> のスナップショットテスト', () => {
  // TODO: Vitest で updateSnapshot する方法が 2022-05-28 時点で不明。とはいえコンポーネント数が少ないため、一旦 skip でしのぐ
  it.skip('<App /> がレンダリングされて表示されること', () => {
    const { container } = render(<App />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
