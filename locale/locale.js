/**
 * Find the messages for the translations
 */
const path = require('path')
const translationsPath = path.join(process.cwd(), process.env.FORM_ERROR_PATH || '../locale/translation_en')
const translationFile = require(translationsPath)

module.exports = function(label) {
  if(!translationFile.form_errors) throw new Error('invalid translation object missing form_errors label')

  console.log('label', label)
  return translationFile.form_errors[label] || "Error for %name%:" + " " + label
}


