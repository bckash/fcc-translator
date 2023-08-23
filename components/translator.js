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

        let translated;

        // - - - - - - - - - 
        // replace key4value -> k4v = true
        // replace value4key -> k4v = false
        function wordReplace (object, keysArr, sentence, k4v) {
          
            let replaced = sentence

            // first letter to small case
            let firstLetter  = replaced.charAt(0).toLowerCase()
            let otherLetters = replaced.slice(1)
            let replacedCap  = firstLetter+otherLetters

            let reLiteral
            let dotRgx = /\./
            let rgx

            keysArr.map( key => {
                k4v 
                    ? reLiteral = key
                    : reLiteral = object[key]

                if (dotRgx.test(reLiteral)){
                    let rlArray = reLiteral.split("")
                    let dotIndex = rlArray.indexOf(".")
                    rlArray.splice(dotIndex, 0, "\\")
                    reLiteral = rlArray.join("")
                    rgx = new RegExp(reLiteral, "i")
                } else {
                    rgx = new RegExp("\\b"+reLiteral+"\\b", "i")
                }

                if (rgx.test(sentence)){
                    k4v
                        ? replaced = replacedCap.replace(key, object[key])
                        : replaced = replacedCap.replace(object[key], key)
                }     
            })
            // capitalize first letter
            firstLetter  = replaced.charAt(0).toUpperCase()
            otherLetters = replaced.slice(1)
            replacedCap  = firstLetter+otherLetters

            return replacedCap
        }
        // - - - - - - - - - 

        // british -> american
        if (rb.locale==="british-to-american") {

            translated =  wordReplace(
                britishOnly, britishOnlyKeys, rb.text, true)

            translated =  wordReplace(
                americanToBritishTitles, americanToBritishTitlesKeys, translated, false)

            translated =  wordReplace(
                americanToBritishSpelling, americanToBritishSpellingKeys, translated, false)
            
            translated =  wordReplace(
                americanOnly, americanOnlyKeys, translated, false)    

        // american -> british
        } else if (rb.locale==="american-to-british") {
            
            translated =  wordReplace(
                americanOnly, americanOnlyKeys, rb.text, true)

            translated =  wordReplace(
                americanToBritishTitles, americanToBritishTitlesKeys, translated, true)

            translated =  wordReplace(
                americanToBritishSpelling, americanToBritishSpellingKeys, translated, true)
            
            translated =  wordReplace(
                britishOnly, britishOnlyKeys, translated, false)           
        } 
       
        return translated
    }

}

module.exports = Translator;