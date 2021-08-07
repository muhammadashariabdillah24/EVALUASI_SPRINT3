class Animal {
    constructor(name, isMammal){
        this.name = name
        this.isMammal = isMammal
    }
}

class Ape extends Animal {

    yell(){
        console.log('Auooo');
    }
}

class Frog extends Animal {

    jump(){
        console.log('hop hop');
    }
}

let APE = new Ape()
let FROG = new Frog()

APE.yell()
FROG.jump()
