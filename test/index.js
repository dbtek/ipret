const test = require('tape')
const ipret = require('../src/ipret')

const strings = {
  'Current password': 'Şimdiki şifre',
  'New password': 'Yeni şifre',
  'Change Password': 'Şifreyi Değiştir',
  'Updated {0}': '{0} güncellendi',
  'password': 'şifre'
}

test('setLanguage throws language not defined error', t => {
  t.plan(1)
  t.throws(() => {
    ipret.setLanguage('tr')
  }, /Error/, 'Language should be defined before set')
})

test('setStrings is there and sets default language', t => {
  t.plan(3)
  t.equal(typeof ipret.setStrings, 'function', 'setStrings function should be defined')
  ipret.setStrings('tr', strings)
  t.equal(typeof ipret.getLanguage, 'function', 'getLanguage function should be defined')
  t.equal(ipret.getLanguage(), 'tr', 'Default language is set for first setStrings call')
})

test('getLanguages', t => {
  t.plan(2)
  t.equal(typeof ipret.getLanguages, 'function', 'getLanguages function should be defined')
  t.equal(ipret.getLanguages()[0], 'tr', 'Returns all languages')
})

test('translate', t => {
  t.plan(2)
  t.equal(typeof ipret.translate, 'function', 'translate function should be defined')
  t.equal(ipret.translate('Updated {0}', 'password'), 'şifre güncellendi', 'Translation with string format should be supported')
})