const plugin = require('./')
const postcss = require('postcss')
function testCode(code, expected, options = {}, plugins = []) {
  return () => {
    if (plugins.length === 0) plugins.push(plugin(options));
    return postcss(plugins)
      .process(code, { from: undefined })
      .then(result => {
        expect(result.css.replace(/[\n]/ig, '')).toEqual(expected);
      })
  }
}

it('can convert variables', testCode(
  ':root { --color: black; --size: 15px } div { --size: 20px; background: var(--color); font-size: var(--size) } p { font-size: var(--size) }',
  ' $color: black; $size: 15px; div { $size: 20px; background: $color; font-size: $size } p { font-size: $size }'
))