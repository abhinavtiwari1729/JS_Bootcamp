let country = 'India';
let continent = 'Asia';
let population = '1400 million';

console.log(country);
console.log(continent);
console.log(population);

let isIsland = false;
let language;
console.log(typeof(isIsland));
console.log(typeof(country));
console.log(typeof(continent));
console.log(typeof(population));
console.log(typeof(language));

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92 , heightJohn = 1.95 ;

let BMIMark = massMark / (heightMark * heightMark) ;

let BMIJohn = massJohn / (heightJohn * heightJohn) ;

console.log(BMIMark);
console.log(BMIJohn);

let markHigherBMI = BMIMark > BMIJohn ;

console.log(markHigherBMI);

console.log(`this is 
my first template literal
abhinav`) ;

// let webNumber = prompt('Please enter a number');
// console.log(webNumber);

const bill = 275;

//let bill = Number(prompt("enter bill amount"));
/* Write your code below. Good luck! 🙂 */

let tip = bill > 50 && bill < 300 ? bill*15/100 : bill*20/100 ;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

let calcAverage = (value1 , value2 , value3) => (value1 + value2 + value3)/3 ;



let scoreDolphins = calcAverage(44 , 23 , 71) ;
let scoreKoalas = calcAverage(65 , 54 , 49) ;


let checkWinner = function(avgDolphins , avgKoalas) {
    
    if(avgDolphins > 2*avgKoalas)
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    else if (avgKoalas > 2*avgDolphins)
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    else
        console.log(`No team wins...`);
    
}

checkWinner(scoreDolphins , scoreKoalas);
