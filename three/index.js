const quotes = ["To know sorrow is not terrifying. What is terrifying is to know you can't go back to the happiness you could have. "
    , "If you don’t like your destiny, don’t accept it. Instead, have the courage to change it the way you want it to be."
    , "I’ll leave tomorrow’s problems to tomorrow’s me."
    ,"Simplicity is the easiest path to true beauty."
    ,"A dropout will beat a genius through hard work."
    , "Knowing what it feels to be in pain, is exactly why we try to be kind to others."
    , "If you don’t share someone’s pain, you can never understand them."
    , "Power comes in response to a need, not a desire. You have to create that need."
    , "Sometimes I do feel like I’m a failure. Like there’s no hope for me. But even so, I’m not gonna give up. Ever!"
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote(){
    if(usedIndexes.size >= quotes.length){
        usedIndexes.clear()
    }

    while(true){
    const randomIdx = Math.floor(Math.random() * quotes.length)

    if(usedIndexes.has(randomIdx)) continue

    quoteElement.innerHTML = quotes[randomIdx]
    usedIndexes.add(randomIdx)
    break
    }
}
