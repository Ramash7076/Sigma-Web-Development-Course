// let obj ={
//     a: 1,
//     b: "Harry"
// }

// console.log(obj)

// let animal = {
//     eats: true
// }

// let rabbit = {
//     jumps: true
// }

// rabbit.__proto__ = animal   // sets rabbit.[[Prototype]] = animal

class Animal{
    constructor(name){
        this.name = name
        console.log("Object is created...")
    }

    eats(){
        console.log('kha raha hoon');
        
    }

    jumps(){
        console.log('kood raha hoon');
        
    }
}

class Lion extends Animal {
    constructor(name){
        super(name)
        
        console.log("Object is created and this is the shera's roar...")

    }
    eats(){
        super.eats()
        console.log('kha raha hoon ad roaring..');
        
    }

}

let a = new Animal("Bunny")
console.log(a);

let l = new Lion("Shera")
console.log(l);
