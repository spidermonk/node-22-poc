import { add } from './math.js' // Note: .js extension is required in ESM!

describe('add', () => {
  it('adds two numbers', () => {
    expect(add(2, 3)).toBe(5)
  })
})
