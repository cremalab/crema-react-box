import { prop, ifElse, always, curry, map, zip, join, compose, over, lensProp, divide, multiply, __, identity } from 'ramda'

const mapToObj = xs => ({
  values: xs.split(' ').map(x => x.replace(/^-?\d*(.\d+)?$/g, '')).map(x => parseFloat(x)),
  lengths: xs.split(' ').map(x => x.match(/(?!\-?\.?[\d]).\w|%/g, ''))
})

const mapFn      = fn => over(lensProp('values'), map(fn))

const reassemble = x => join(' ', map(join(''), zip(x.values, x.lengths)))

// const log = x => {
//   console.log(x)
//   return x
// }

// cssAdjust :: (a -> b) -> String -> String
export const cssAdjust = curry((fn, xs) =>
  compose(reassemble, mapFn(fn), mapToObj)(xs))

export const toCssAttr = (attr, name, opts = {}) =>
  props => {
    const processed = compose(
      ifElse(always(opts.halve), cssAdjust(divide(__, 2)), identity),
      ifElse(always(opts.negate), cssAdjust(multiply(-1)), identity)
    )(props[name])
    return `${attr}: ${processed};`
  }

export const propStyle = (attr, name, opts = {}) =>
  ifElse(prop(name), toCssAttr(attr, name, opts), always(null))
