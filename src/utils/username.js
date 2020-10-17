const ADJECTIVES = [
    'untimely', 'worthless', 'unselfish', 'critical', 'obscene', 'hot', 'worried', 'alcoholic', 'imperfect', 'scientific'
]

const OBJECTS = [
    'blouse', 'shampoo', 'bottle', 'toilet', 'keyboard', 'piano', 'teddies', 'pillow', 'peanuts', 'candle'
]

const genRandomUsername = () => {
    let adj = ADJECTIVES[Math.floor(Math.random()*10)]
    let obj = OBJECTS[Math.floor(Math.random()*10)]
    return adj + '-' + obj
}

module.exports = {
    genRandomUsername
}