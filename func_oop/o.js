/* 
CLEAN CODE 
    - 6 functions for 6 jobs
    - 1 function for call all functions inside.
*/  

const hello = () => {
    return "Hello"
} 

const my = () => {
    return "My"
}

const nameForMe = () => {
    return "Name"
}

const is = () => {
    return "is"
}

const omer = () => {
    return "Ömer"
}

const faruk = () => {
    return "Faruk"
}

const personSentence = () => {
    return hello() + " " + my() + " " + nameForMe() + " " + is() + " " + omer() + " " + faruk()
}

console.log(personSentence());




/* 
    OOP
        - 3 Object with same calculate.
*/

class Area {
    constructor( height, width ) {
        this.height = height;
        this.width = width;
    }

    /* Getter */
    get area() {
        return this.calcArea();
    }

    /* Methods */
    calcArea() {
        return this.height * this.width;
    }
    
}

const data = [
    new Area(30, 40), //Table
    new Area(10, 10), //Chair
    new Area(1, 2) //Finger
]

for (let i = 0; i < data.length; i++) { 
    console.log(data[i].area)
}
