'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {

      let rb = req.body
      translator.translate(rb)

      res.send({
        text: rb.text,
        translation: translator.translate(rb)
      })

    });
};
