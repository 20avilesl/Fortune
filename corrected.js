function numberGenerator(num) {
   return Math.floor(Math.random() * num)
}

const wisdom = {
    energyAnimal: ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"],
    fortuneStatus: ["Terrible", "Bad", "Uncertain", "Unpredictable", "Good", "Wonderful"],
    currentAdvice: ["Sleep", "Eat", "Meditate", "Drink", "Relax", "Run", "Go outside", "Pray", "Try again tomorrow"]
}
let yourWisdom = []

for(let property in wisdom) {
    let optionNumber = numberGenerator(wisdom[property].length)

    switch(property) {
        case 'energyAnimal':
            yourWisdom.push(`your current energy is is like that of the Great ${wisdom[property][optionNumber]}`)
            break
        case 'fortuneStatus':
            yourWisdom.push(`your current fortune is ${wisdom[property][optionNumber]}`)
            break
        case 'currentAdvice':
            yourWisdom.push(`we advice that you ${wisdom[property][optionNumber]}`)
            break
            default:
                yourWisdom.push('not enough info!')
    }

}
function fortmater(info) {
    const fortmatted = info.join('\n')
    console.log(fortmatted)
}

fortmater(yourWisdom)