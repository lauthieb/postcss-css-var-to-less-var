const postcss = require('postcss')
const util = require('postcss-plugin-utilities')

function varToLess (object, variable) {
  return '@' + variable.substring(2)
}

module.exports = postcss.plugin('varToLess', opt => css => {
  css.walkRules(':root', rule => {
    rule.walkDecls(decl => {
      rule.before(decl)
    })
    rule.remove()
  })
  css.walkDecls(decl => {
    if (decl.prop.startsWith('--')) decl.prop = '@' + decl.prop.substring(2)
  })
  util.parseFunction(css, 'var', varToLess)
})
