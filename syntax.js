var rando = Math.floor(Math.random() * 8)

  
const energyAnimal = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"]
const fortuneStatus = ["Terrible", "Bad", "Uncertain", "Unpredictable", "Good", "Wonderful"]
const currentAdvice = ["Sleep", "Eat", "Meditate", "Drink", "Relax", "Run", "Go outside", "Pray","Try again tomorrow"]

const getEnergy = () => {
    let animal;
    switch (rando){
        case 0:
        return animal =energyAnimal[0];
        break;
        case 1:
        return animal = energyAnimal[1];
        break;
        case 2:
        return animal = energyAnimal[2];
        break;
        case 3:
        return animal = energyAnimal[3];
        break;
        case 4:
        return animal = energyAnimal[4];
        break;
        case 5:
        return animal = energyAnimal[5];
        break;
        case 6:
        return animal = energyAnimal[6];
        break;
        case 7:
        return animal = energyAnimal[7];
        break;
        case 8:
        return animal = energyAnimal[8];
        break;
        default:
            return ("unknown!!!")
    }
return energyAnimal
}
console.log(rando)
console.log(getEnergy())