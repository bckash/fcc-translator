const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

let americanOnlyKeys = Object.keys(americanOnly)
let americanToBritishSpellingKeys = Object.keys(americanToBritishSpelling)
let americanToBritishTitlesKeys = Object.keys(americanToBritishTitles)
let britishOnlyKeys = Object.keys(britishOnly)

class Translator {

    translate(rb) {
        
        let translated= rb;

        britishOnlyKeys.map( key => {
            let rgx = new RegExp(`${key}`)
            if (rgx.test(rb)){
                translated = translated.replace(key, britishOnly[key])
            }     
        })

        console.log(translated)
    }

}

module.exports = Translator;