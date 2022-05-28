import React from 'react'
import { it } from 'vitest'
import { render } from '@testing-library/react'
import App from './App'

describe('Vitest を動かしてみる', () => {
  it('console.log', (ctx) => {
    console.log(ctx.meta.name)
  })
  it('正しくレンダリングされること', () => {
    const { container } = render(<App />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
