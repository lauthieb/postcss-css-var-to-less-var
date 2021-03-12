# PostCSS CSS var to Less var [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right">](https://github.com/postcss/postcss)
[![NPM Version](https://img.shields.io/npm/v/postcss-css-var-to-less-var.svg)](https://www.npmjs.com/package/postcss-css-var-to-less-var)
[![BGitter Chat](https://img.shields.io/badge/chat-gitter-blue.svg)](https://gitter.im/postcss/postcss)

A [PostCSS](https://github.com/postcss/postcss) plugin to convert CSS variables to Less variables


## Installation

```
npm install postcss-css-var-to-less-var
```

## Examples

```css
/* input */
:root {
  --color: black;
  --size: 15px;
}
div {
  --size: 20px;
  background: var(--color);
  font-size: var(--size);
}
p {
  font-size: var(--size);
}
```
```less
/* output */
@color: black;
@size: 15px;
div {
  @size: 20px;
  background: @color;
  font-size: @size; // 20px
}
p {
  font-size: @size; // 15px
}
```

## Usage

### [Postcss JS API](https://github.com/postcss/postcss#js-api)

```js
postcss([require('postcss-css-var-to-less-var')]).process(yourCSS);
```

### [Gulp](https://github.com/gulpjs/gulp)

```js
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const varConvert = require('postcss-css-var-to-less-var');
gulp.task('css', () => {
    gulp.src('path/to/dev/css')
        .pipe(postcss([
            varConvert()
        ]))
        .pipe(gulp.dest('path/to/build/css'));
});
```

## Tests

```
npm test
```

## Special thanks

This package is a fork of [postcss-css-var-to-sass-var](https://github.com/arpadHegedus/postcss-css-var-to-sass-var). Thanks a lot [Arpad Hegedus](https://github.com/arpadHegedus) for this great work!

## License
This project is licensed under the [MIT License](./LICENSE).
