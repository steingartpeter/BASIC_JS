import Person from './oopJS/person.js';
console.log('JS WORKS');

let p = new Person();
console.log("P: "+p);
p.name = "Csalló Maló";
p.setAge(35);
console.log(`A személyünk tulajdonságai:\n Neve: ${p.name},\n kora: ${p.age}.`);
console.log('ID:');
console.log(p.idCard);
console.log('Show ID:'+p.idCard.show());

// GENERAL:
// - let, const
// - function, method

// Data types:
// NUMBER
// BOOLEAN
// NULL
// UNDEFINED
// STRING
// - string template HTML ``!!
// ARRAYS (indexOf,length,join,split,splice,push,pop ...)
// OBJECTS

// Control flow:
// - BRANCHING
// - - IF
// - - SWIITCH
// - CYCLES/ITERATIONS
// - - FOR
// - - WHILE

// Functions
// - FUNCTION DECLARATION
// - FUNCTION EXPRESSION
// - - parameters,params+def.values
// - - return values
// - ARROW FUNCTION
// - - const greet = () => 'Hello WOrld!';
// - - const bill = (products, tax) => {
// - -     let total = 0;
// - -     for(let i=0; i<produts.length;i++){
// - -          total += products[i] + products[i]*tax;
// - -     }
// - - }
// - CALLBACKS/FOREACH

