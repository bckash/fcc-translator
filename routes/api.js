'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {

      let rb = req.body
      console.log(req.body)

      if (rb.text && rb.locale) {
        if (rb.locale === "american-to-british" || rb.locale === "british-to-american") {
          res.send({
            text: rb.text,
            translation: translator.translate(rb) === rb.text
              ? "Everything looks good to me!"
              : translator.translate(rb)
          })
        } else {
          res.json({ error: 'Invalid value for locale field' })
        }

      } else {
        if (rb.text === "") res.send({ error: 'No text to translate' })
        else res.send({ error: 'Required field(s) missing' })
      }

    });
};
