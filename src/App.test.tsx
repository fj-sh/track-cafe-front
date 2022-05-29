import React from 'react'
import { it } from 'vitest'
import { render } from '@testing-library/react'
import App from './App'

describe('<App /> のスナップショットテスト', () => {
  it('<App /> がレンダリングされて表示されること', () => {
    const { container } = render(<App />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
