// const arrNombre = [84, 56, 44, 47, 95, 91, 25, 73, 65, 52];

// function countEvenOdd(arrNombre) {
//     let pair = [];
//     let impair = [];
//     arrNombre.forEach(function (nombre) {
//         if (nombre % 2 === 0) {
//             pair.push(nombre);
//             console.log("Le nombre " + nombre + " est pair");
//         } else {
//             impair.push(nombre);
//             console.log("Le nombre " + nombre + " est impair");
//         }
//     });
//     return { pair, impair };
// };

// const result = countEvenOdd(arrNombre);
// console.log("Il y a " + result.pair.length + " nombres pairs dans le tableau");
// console.log("Il y a " + result.impair.length + " nombres impairs dans le tableau");

//UNE AUTRE SOLUTION  + COMPTEUR A LA PLACE D'UN TABLEAU _ si pas utilisation des donnees ulterieurement//

const arrNombre = [84, 56, 44, 47, 95, 91, 25, 73, 65, 52];

function countEvenOdd(arr) {
    let countEven = 0;
    let countOdd = 0;

    arr.forEach(nombre => {
        if (nombre % 2 === 0) {
            console.log("Le nombre " + nombre + " est pair");
            countEven++;
        } else {
            console.log("Le nombre " + nombre + " est impair");
            countOdd++;
        }
    });

    console.log("Il y a " + countEven + " nombres pairs dans le tableau");
    console.log("Il y a " + countOdd + " nombres impairs dans le tableau");
}

countEvenOdd(arrNombre);