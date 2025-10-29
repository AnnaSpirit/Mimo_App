const numbers = [1, 2, 3, 4, 5, 6];

//Crée un nouveau tableau avec chaque nombre doublé.
const doubled = numbers.map(num
 return num * 2;);
console.log(doubled);

//OU
const doubled2 = numbers.map(num => num * 2);
console.log(doubled2);

//Garde seulement les nombres pairs.

const evens = numbers.filter(function (num) {
    return num % 2 === 0;
});
console.log(evens);

//OU

const evens2 = numbers.filter(num => num % 2 === 0);
console.log(evens2);


//Calcule la somme totale du tableau original.

const sum = numbers.reduce((total, num) => {
    return total + num;
}, 0);
console.log(sum);

//OU

const sum2 = numbers.reduce((total, num) => total + num, 0);
console.log(sum2);

/*const evens2 = numbers.filter(num => num % 2 === 0);
console.log(evens2);
*/
