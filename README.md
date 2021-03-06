<div align="center">
  <h1>ipret :earth_africa:</h1>
  <!-- Build Status -->
  <a href="https://travis-ci.org/dbtek/ipret">
    <img src="https://img.shields.io/travis/dbtek/ipret/master.svg?style=flat-square"
      alt="Build Status" />
  </a>
  <!-- Test Coverage -->
  <a href="https://codecov.io/github/dbtek/ipret">
    <img src="https://img.shields.io/codecov/c/github/dbtek/ipret/master.svg?style=flat-square"
      alt="Test Coverage" />
  </a>
  <!-- Standard -->
  <a href="https://codecov.io/github/dbtek/ipret">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square"
      alt="Standard" />
  </a>
</div>

Micro i18n library for node and browser. Ugly name comes from **i**nter**pret**. Use it to translate your app with strings already there.

### Install
```bash
$ npm install ipret -S
```

### Usage
Below example can be used in node / browserify transform. For standalone usage include `dist/ipret.js`.
```js
const ipret = require('ipret')

// add some translations
ipret.setStrings('tr', {
  'Current password': 'Şimdiki şifre',
  'New password': 'Yeni şifre',
  'Change Password': 'Şifreyi Değiştir',
  'Updated {0}': '{0} güncellendi',
  'password': 'şifre'
})

// set active lang
ipret.setLanguage('tr')

_ = ipret.translate

// translate
_('Current password')         // Şimdiki şifre
_('New password')             // Yeni şifre
_('Updated {0}', 'password')  // şifre güncellendi
_('New email address')        // [Not translated string] New email address
```

### API

#### setStrings(lang, strings)
Adds new language with translations. `lang` is language identifier (e.g. language code). `strings` is key-value translations.

#### setLanguage(lang)
Activates a language to use in translations. `lang` is language identifier used before in `setStrings`.

#### translate(str)
Translates given string if a translation for it is defined.

#### getLanguage()
Returns active language identifier.

#### getLanguages()
Returns all languages that are being used.

### License
MIT

### Author
İsmail Demirbilek - [@dbtek](https://twitter.com/dbtek)
