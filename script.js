'use strict';

// const firstName = 'Adeoti'
// calcAge(1996);

// function calcAge (birthYear){
//     const age = 2037 - birthYear;
//     console.log(this);
//     console.log(age);

//     function printAge(){
//         const output = `${firstName}, you are the ${age}, born in ${birthYear}`;
//         console.log(output);

//         if (birthYear>=1981 && birthYear<=1996){
//             const str = `Oh, and you're a millenial, ${firstName}`
//             console.log(str);
//         }
//     }
//         // printAge();

//         return age;
//     }

// const calcEarnings = function(salary){
//     const tax = 0.075 * salary;
//     const net = salary - tax;
//     const output = `${firstName} you earn ${net} every month`
//     // console.log([salary, tax, net]);
//     const breakdown = {
//         salary,tax, net
//     }

//     console.log(output, breakdown);
// }

// //   calcEarnings(500000)

//   console.log(this);
//  const calcGrade = function(cgpa){
//     console.log(cgpa / 3);
//     console.log(this);
//  }
//  calcGrade(15.73)

//  const calcGradeArr = cgpa =>{
//     console.log(cgpa / 3);
//     console.log(this);
//  }
//  calcGradeArr(15.73)

//  const adeoti = {
//     firstName: 'Adeoti',
//     birthYear: 1998,
//     calcAge : function(){
//         const age = 2018 - this.birthYear;
//         console.log(age);
//         console.log(this);
//     }
//  }

//  adeoti.calcAge();

//  const khalid = {
//     birthYear: 1992
//  }

//  khalid.calcAge = adeoti.calcAge

//  khalid.calcAge()

// const adeoti = {
//   firstName: 'Adeoti',
//   birthYear: 1998,
//   calcAge: function () {
//     const age = 2018 - this.birthYear;
//     console.log(age);
//     console.log(this);

//     //     solution 1
//     //     const self = this
//     //     const isMillenial = function(){
//     //         console.log(self.birthYear >=1981 && self.birthYear <= 1996)
//     //     }
//     //     isMillenial()
//     // },

    const isMillenial = () => {
      console.log(this.birthYear >= 1981 && this.birthYear <= 1996);
    };
    isMillenial();
  
  // greet: () => console.log(`Hey ${this.firstName}`)


//  adeoti.greet()
adeoti.calcAge();


let age = 30;
let oldAge = age;
age = 31;

console.log(age, oldAge);

const me = {
  name: 'Adeoti',
  age: 30
}

const friend = me;
friend.age = 27;

console.log(me);
console.log(friend);

//Primitive tyoes
let lastName = 'Williams'
let oldLastName = lastName;
lastName = 'Jones'

console.log(lastName, oldLastName);

//Reference Types
const jessica ={
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27
}

const marriedJessica = jessica;
marriedJessica.lastName = 'Jones'

console.log(`Before marriage:`, jessica);

const jessica2 ={
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27
}

const jessicaCopy = Object.assign({}, jessica2); //create a new object that copies the properties from the second argument
jessicaCopy.lastName ='Jones'

console.log(`Before marriage:`, jessica2);
console.log(`After marriage:`, jessicaCopy);


