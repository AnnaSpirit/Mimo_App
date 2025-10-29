// Question 1
// console.log(0 == false); // true

/*JavaScript essaie de convertir les deux valeurs pour les comparer. Ici false est converti en 0. Donc 0 == 0 → true*/

// console.log(0 === false); //false

/*Pas de conversion de type : il compare à la fois la valeur et le type. Ici 0 est un number et false est un boolean → donc false.*/

// Question 2
// console.log(null == undefined); //true
/* null == undefined → true car l’opérateur == considère null et undefined égaux (c’est une règle spéciale dans JS).*/


// console.log(null === undefined); //false

// Question 3
// console.log(typeof null); //object
// console.log(typeof []); //object

/* Les tableaux en JS sont des objets spéciaux.
Ils héritent du prototype Array.
Mais pour JS, ce sont quand même des objets → donc "object".*/
