// const arrNotes = [15, 12, 8, 20, 2, 3, 2, 1, 6, 13]; //<10
// const arrNotes2 = [15, 12, 8, 20, 12, 13, 2, 11, 16, 13]; //> 10

// const getMoyenne = arrNotes.reduce((a, b) => a + b, 0) / arrNotes.length;
// console.log("La moyenne est de : " + getMoyenne);
// checkResult(getMoyenne);

// const getMoyenne2 = arrNotes2.reduce((a, b) => a + b, 0) / arrNotes2.length;
// console.log("La moyenne est de : " + getMoyenne2);
// checkResult(getMoyenne2);

// function checkResult(moyenne) {
//     if (moyenne >= 10) {
//         console.log("✅ Bravo, tu passes !");
//     } else {
//         console.log("❌ Désolé, tu redoubles…");
//     }
//     // return moyenne;
// }

//UNE AUTRE SOLUTION  + FACTORISEE//
const arrNotes = [15, 12, 8, 20, 2, 3, 2, 1, 6, 13];
const arrNotes2 = [15, 12, 8, 20, 12, 13, 2, 11, 16, 13];

function getAverage(arr) {
    return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function checkResult(moyenne) {
    if (moyenne >= 10) {
        console.log("✅ Bravo, tu passes !");
    } else {
        console.log("❌ Désolé, tu redoubles…");
    }
}

[arrNotes, arrNotes2].forEach(notes => {
    const moyenne = getAverage(notes);
    console.log("La moyenne est de : " + moyenne);
    checkResult(moyenne);
});
