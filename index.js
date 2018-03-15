const postcss = require('postcss')
const util = require('postcss-plugin-utilities')

function varToSass (object, variable) {
  return '$' + variable.substring(2)
}

module.exports = postcss.plugin('varToSass', opt => css => {
  css.walkRules(':root', rule => {
    rule.walkDecls(decl => {
      rule.before(decl)
    })
    rule.remove()
  })
  css.walkDecls(decl => {
    if (decl.prop.startsWith('--')) decl.prop = '$' + decl.prop.substring(2)
  })
  util.parseFunction(css, 'var', varToSass)
})
