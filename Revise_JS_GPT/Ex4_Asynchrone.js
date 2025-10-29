async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
}
getUsers();

/*
Tâches :

Explique dans quel ordre les logs suivants s’affichent :

console.log("Start");
getUsers();
console.log("End");


Modifie getUsers pour qu’elle affiche seulement les noms des utilisateurs (clé name).*/

console.log("Start");// 1er
getUsers();
console.log("End");
/*Start
End
... (après un petit délai réseau)
Anna (ou autres noms des users)
*/

async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    data.forEach(user => console.log(user.name)); // Affiche seulement les noms des utilisateurs
}

//Version avec map (retourne un tableau de noms)//

async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    const names = data.map(user => user.name);
    console.log(names);
}
