const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {
    suite('translate to British English', function(){
        test("Mangoes are my favorite fruit.", (done) => {
            let input = {
                locale: "american-to-british",
                text : 'Mangoes are my favorite fruit.'
            }
            assert.equal(translator.translate(input), 'Mangoes are my <span class="highlight">favourite</span> fruit.')
            done()
        })
        test("I ate yogurt for breakfast.", (done) => {
            let input = {
                locale: "american-to-british",
                text : 'I ate yogurt for breakfast.'
            }
            assert.equal(translator.translate(input), 'I ate <span class="highlight">yoghurt</span> for <span class="highlight">brekkie</span>.')
            done()
        })
        test("We had a party at my friend's condo.", (done) => {
            let input = {
                locale: "american-to-british",
                text : "We had a party at my friend's condo."
            }
            assert.equal(translator.translate(input), 'We had a party at my friend\'s <span class="highlight">flat</span>.')
            done()
        })
        test("Can you toss this in the trashcan for me?", (done) => {
            let input = {
                locale: "american-to-british",
                text : "Can you toss this in the trashcan for me?"
            }
            assert.equal(translator.translate(input), 'Can you toss this in the <span class="highlight">bin</span> for me?')
            done()
        })
        test("The parking lot was full.", (done) => {
            let input = {
                locale: "american-to-british",
                text : "The parking lot was full."
            }
            assert.equal(translator.translate(input), 'The <span class="highlight">car park</span> was full.')
            done()
        })
        test("Like a high tech Rube Goldberg machine.", (done) => {
            let input = {
                locale: "american-to-british",
                text : "Like a high tech Rube Goldberg machine."
            }
            assert.equal(translator.translate(input), 'Like a high tech <span class="highlight">Heath Robinson device</span>.')
            done()
        })
        test("To play hooky means to skip class or work.", (done) => {
            let input = {
                locale: "american-to-british",
                text : "To play hooky means to skip class or work."
            }
            assert.equal(translator.translate(input), 'To <span class="highlight">bunk off</span> means to skip class or work.')
            done()
        })
        test("No Mr. Bond, I expect you to die.", (done) => {
            let input = {
                locale: "american-to-british",
                text : "No Mr. Bond, I expect you to die."
            }
            assert.equal(translator.translate(input), 'No <span class="highlight">Mr</span> Bond, I expect you to die.')
            done()
        })
        test("Dr. Grosh will see you now.", (done) => {
            let input = {
                locale: "american-to-british",
                text : "Dr. Grosh will see you now."
            }
            assert.equal(translator.translate(input), '<span class="highlight">Dr</span> Grosh will see you now.')
            done()
        })
        test("Lunch is at 12:15 today.", (done) => {
            let input = {
                locale: "american-to-british",
                text : "Lunch is at 12:15 today."
            }
            assert.equal(translator.translate(input), 'Lunch is at <span class="highlight">12.15</span> today.')
            done()
        })
    })
    suite('translate to American English', function(){
        test("We watched the footie match for a while.", (done) => {
            let input = {
                locale: "british-to-american",
                text : 'We watched the footie match for a while.'
            }
            assert.equal(translator.translate(input), 'We watched the <span class="highlight">soccer</span> match for a while.')
            done()
        })
        test("Paracetamol takes up to an hour to work.", (done) => {
            let input = {
                locale: "british-to-american",
                text : 'Paracetamol takes up to an hour to work.'
            }
            assert.equal(translator.translate(input), '<span class="highlight">Tylenol</span> takes up to an hour to work.')
            done()
        })
        test("First, caramelise the onions.", (done) => {
            let input = {
                locale: "british-to-american",
                text : 'First, caramelise the onions.'
            }
            assert.equal(translator.translate(input), 'First, <span class="highlight">caramelize</span> the onions.')
            done()
        })
        test("I spent the bank holiday at the funfair.", (done) => {
            let input = {
                locale: "british-to-american",
                text : 'I spent the bank holiday at the funfair.'
            }
            assert.equal(translator.translate(input), 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.')
            done()
        })
        test("I had a bicky then went to the chippy.", (done) => {
            let input = {
                locale: "british-to-american",
                text : 'I had a bicky then went to the chippy.'
            }
            assert.equal(translator.translate(input), 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.')
            done()
        })
        test("I've just got bits and bobs in my bum bag.", (done) => {
            let input = {
                locale: "british-to-american",
                text : "I've just got bits and bobs in my bum bag."
            }
            assert.equal(translator.translate(input), 'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.')
            done()
        })
        test("The car boot sale at Boxted Airfield was called off.", (done) => {
            let input = {
                locale: "british-to-american",
                text : "The car boot sale at Boxted Airfield was called off."
            }
            assert.equal(translator.translate(input), 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.')
            done()
        })
        test("Have you met Mrs Kalyani?", (done) => {
            let input = {
                locale: "british-to-american",
                text : "Have you met Mrs Kalyani?"
            }
            assert.equal(translator.translate(input), 'Have you met <span class="highlight">Mrs.</span> Kalyani?')
            done()
        })
        test("Prof Joyner of King's College, London.", (done) => {
            let input = {
                locale: "british-to-american",
                text : "Prof Joyner of King's College, London."
            }
            assert.equal(translator.translate(input), '<span class="highlight">Prof.</span> Joyner of King\'s College, London.')
            done()
        })
        test("Tea time is usually around 4 or 4.30.", (done) => {
            let input = {
                locale: "british-to-american",
                text : "Tea time is usually around 4 or 4.30."
            }
            assert.equal(translator.translate(input), 'Tea time is usually around 4 or <span class="highlight">4:30.</span>')
            done()
        })
    })
    suite('Highlighted translation', function(){
        test("Mangoes are my favorite fruit.", (done) => {
            let input = {
                locale: "american-to-british",
                text : 'Mangoes are my favorite fruit.'
            }
            assert.strictEqual(translator.translate(input), 'Mangoes are my <span class="highlight">favourite</span> fruit.')
            done()
        })
        test("I ate yogurt for breakfast.", (done) => {
            let input = {
                locale: "american-to-british",
                text : 'I ate yogurt for breakfast.'
            }
            assert.strictEqual(translator.translate(input), 'I ate <span class="highlight">yoghurt</span> for <span class="highlight">brekkie</span>.')
            done()
        })
        test("We watched the footie match for a while.", (done) => {
            let input = {
                locale: "british-to-american",
                text : 'We watched the footie match for a while.'
            }
            assert.strictEqual(translator.translate(input), 'We watched the <span class="highlight">soccer</span> match for a while.')
            done()
        })
        test("Paracetamol takes up to an hour to work.", (done) => {
            let input = {
                locale: "british-to-american",
                text : 'Paracetamol takes up to an hour to work.'
            }
            assert.strictEqual(translator.translate(input), '<span class="highlight">Tylenol</span> takes up to an hour to work.')
            done()
        })
    })
});
