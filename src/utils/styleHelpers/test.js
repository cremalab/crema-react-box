import * as styleHelpers from '.'

describe('cssAdjust', () => {
  it('applies provided function over each value', () => {
    const actual = styleHelpers.cssAdjust(x => x / 2, '10px 20em 30%')
    const wanted = '5px 10em 15%'
    expect(actual).toBe(wanted)
  })
})

describe('toCssAttr', () => {
  it('returns function', () => {
    const actual = styleHelpers.toCssAttr('padding', 'test')
    expect(actual).toBeInstanceOf(Function)
  })
  it('returned function accepts props and returns css string', () => {
    const props = { test: '10px' }
    const actual = styleHelpers.toCssAttr('padding', 'test')(props)
    expect(actual).toBe('padding: 10px;')
  })
})

describe('propStyle', () => {
  it('returns function', () => {
    const actual = styleHelpers.propStyle()
    expect(actual).toBeInstanceOf(Function)
  })
  describe('returned function takes props', () => {
    const props = { test: '10px' }
    it('returns css string if prop exists', () => {
      const actual = styleHelpers.propStyle('padding', 'test')(props)
      expect(actual).toEqual('padding: 10px;')
    })
    it('returns null if prop does not exist', () => {
      const actual = styleHelpers.propStyle('padding', 'bad')(props)
      expect(actual).toEqual(null)
    })
  })
  describe('opts', () => {
    const props = { test: '-10.75px' }
    it('handles opts.halve', () => {
      const actual = styleHelpers.propStyle('padding', 'test', { halve: true })(props)
      expect(actual).toEqual('padding: -5.375px;')
    })
    it('handles opts.negate', () => {
      const actual = styleHelpers.propStyle('padding', 'test', { negate: true })(props)
      expect(actual).toEqual('padding: 10.75px;')
    })
    it('handles opts.halve and opts.negate', () => {
      const actual = styleHelpers.propStyle('padding', 'test', { negate: true, halve: true })(props)
      expect(actual).toEqual('padding: 5.375px;')
    })
    it('handles no opts', () => {
      const actual = styleHelpers.propStyle('padding', 'test')(props)
      expect(actual).toEqual('padding: -10.75px;')
    })
  })
})
