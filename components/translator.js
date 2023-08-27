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
        let timeRgx 

        // - - - - - - - - - 
        /*
            If we searching the sentence for the "key", to be replaced by "value" (components objects) : k4v = true. 

            if we searching the sentence for the "value", to be replaced by "key" : k4v = false.
        */

        function wordReplace (object, keysArr, sentence, k4v) {
          
            let replaced = sentence // for map, first iteration
            let firstLetter 
            let otherLetters 
            let replacedCap 

            let rgx
            let reLiteral
            let dotRgx = /\./
            let rgxSpan = /^<span class="highlight">/
            let spanString = '<span class="highlight">'

            keysArr.map( key => {
                k4v 
                    ? reLiteral = key
                    : reLiteral = object[key]

                if (dotRgx.test(reLiteral)){ // for titles
                    let rlArray = reLiteral.split("")
                    let dotIndex = rlArray.indexOf(".")
                    rlArray.splice(dotIndex, 0, "\\")
                    reLiteral = rlArray.join("")
                    rgx = new RegExp(reLiteral, "i")

                } else {
                    rgx = new RegExp("\\b"+reLiteral+"\\b", "i")
                }
                
                if (rgx.test(sentence)){
                    let replacementWord
                    k4v
                        ? replacementWord = object[key]
                        : replacementWord = key
                   
                    replaced = replaced.replace(
                        rgx, spanString + replacementWord + '</span>')
                }     
            })
            
            // capitalize first letter
            if (rgxSpan.test(replaced)) { // <span> at begginig
                firstLetter  = replaced.charAt(spanString.length).toUpperCase()
                otherLetters = replaced.slice(spanString.length+1)
                replacedCap  = spanString+firstLetter+otherLetters

            } else {
                firstLetter  = replaced.charAt(0).toUpperCase()
                otherLetters = replaced.slice(1)
                replacedCap  = firstLetter+otherLetters
            }

            translated =  replacedCap
        }
        // - - - - - - - - - 

        function hourMinuteSeperatorSwapper(txt, rgx, replace, replacement){

            let spanString = '<span class="highlight">'

            if (rgx.test(txt)) {
                let translatedArray =  txt.split(" ")
                let hourSwap = translatedArray.map( word => {
                    return (rgx.test(word))
                        ? spanString + word.replace(replace, replacement)+'</span>'
                        : word
                })

                return hourSwap.join(" ")

            } else {
                return txt
            }
        }

        // british -> american
        if (rb.locale==="british-to-american") {

            wordReplace(
                britishOnly, britishOnlyKeys, rb.text, true)

            wordReplace(
                americanToBritishTitles, americanToBritishTitlesKeys, translated, false)

            wordReplace(
                americanToBritishSpelling, americanToBritishSpellingKeys, translated, false)
            
            wordReplace(
                americanOnly, americanOnlyKeys, translated, false)
            
            timeRgx = /\b(?:[01]?[0-9]|2[0-3])\.[0-5][0-9]\b/    
            translated = hourMinuteSeperatorSwapper(
                translated, timeRgx, ".", ":")

        // american -> british
        } else if (rb.locale==="american-to-british") {
            
             wordReplace(
                americanOnly, americanOnlyKeys, rb.text, true)

            wordReplace(
                americanToBritishTitles, americanToBritishTitlesKeys, translated, true)

            wordReplace(
                americanToBritishSpelling, americanToBritishSpellingKeys, translated, true)
            
            wordReplace(
                britishOnly, britishOnlyKeys, translated, false)
                
            timeRgx = /\b(?:[01]?[0-9]|2[0-3])\:[0-5][0-9]\b/    
            translated = hourMinuteSeperatorSwapper(
                translated, timeRgx, ":", ".")
        } 
       
        return translated
    }

}

module.exports = Translator;