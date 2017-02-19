/**
 * @module utils
 */
var slice = [].slice

/**
 * String format function.
 * @param {String} str   String to be formatted
 * @param {...*}   args  Format params
 */
exports.stringFormat = function () {
  var args, i, j, ref, reg, s
  args = arguments.length >= 1 ? slice.call(arguments, 0) : []
  s = args[0]
  for (i = j = 0, ref = args.length - 1; ref >= 0 ? j < ref : j > ref; i = ref >= 0 ? ++j : --j) {
    reg = new RegExp('\\{' + i + '\\}', 'gm')
    s = s.replace(reg, args[i + 1])
  }
  return s
}