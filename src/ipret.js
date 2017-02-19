/**
 * @title ipret
 * @overview Micro i18n library for node and browser. Translate your app with strings already there.
 * @copyright (c) 2017
 * @license MIT
 * @author İsmail Demirbilek
 * @module ipret
 */
const utils = require('./utils')

var activeLang, translations
var slice = [].slice

translations = {}
activeLang = null

/**
 * Sets translations for a specific langauge.
 * @param {string} lang Language code, e.g. 'tr' or 'en'.
 * @param {Object} str  {'string': 'translation'} translation pairs.
 */
exports.setStrings = function (lang, str) {
  translations[lang] = str
  if ((Object.keys(translations)).length === 1) {
    activeLang = lang
  }
}

/**
 * Updates active language.
 * @param {string} lang Language code, e.g. 'tr' or 'en'.
 */
exports.setLanguage = function (lang) {
  if (translations[lang] == null) {
    throw new Error('There is no translations map for given language code: ' + lang)
  }
  activeLang = lang
}

/**
 * Translates a string to active language.
 * @param  {String} string String to be translated.
 * @return {String}        Translated output.
 */
exports.translate = function () {
  var args, targs
  args = arguments.length >= 1 ? slice.call(arguments, 0) : []
  targs = args.map(function (a) {
    var ref
    return ((ref = translations[activeLang]) != null ? ref[a] : void 0) || a
  })
  return utils.stringFormat.apply(this, targs)
}

/**
 * Active language code.
 * @return {String} Active language.
 */
exports.getLanguage = function () {
  return activeLang
}

/**
 * All languages.
 * @return {Array} Language keys
 */
exports.getLanguages = function () {
  return Object.keys(translations)
}
