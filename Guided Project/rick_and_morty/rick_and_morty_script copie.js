

const charactersContainer = document.getElementById('characters-container');

data.characters.forEach((character) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <img src="${character.image}" alt="${character.name}" class="character-image">
        <h2>${character.name}</h2>
        <p>Status: ${character.status}</p>
        <p>Species: ${character.species}</p>
    `;
    charactersContainer.appendChild(card);
});


// La solution proposée n'est pas nécessairement "meilleure", mais voici les différences :

// 1. getElementById vs querySelector

// getElementById("characters-container") : plus rapide, mais nécessite un ID dans le HTML
// querySelector(".characters-container") : plus flexible, fonctionne avec n'importe quel sélecteur CSS
// 2. className vs classList.add()

// card.className = "card" : remplace toutes les classes existantes
// card.classList.add("card") : ajoute une classe sans supprimer les autres
// 3. Syntaxe de la fonction fléchée

// character => : plus concis quand il n'y a qu'un seul paramètre
//     (character) => : fonctionne identiquement
// En réalité:

// Si votre HTML utilise une classe(class= "characters-container"), utilisez querySelector
// Si votre HTML utilise un ID(id = "characters-container"), utilisez getElementById
// classList.add() est généralement préférable car elle est plus sûre(ne supprime pas les autres classes)
// Les deux solutions fonctionnent, mais elles ne sont pas interchangeables selon votre HTML!



const charactersContainer = document.getElementById("characters-container");

data.characters.forEach(character => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
            <img src="${character.image}" alt="${character.name}" class="character-image">
            <p class="character-detail"><span class="attribute">Name:</span> ${character.name}</p>
            <p class="character-detail"><span class="attribute">Status:</span> ${character.status}</p>
            <p class="character-detail"><span class="attribute">Species:</span> ${character.species}</p>
        `;
    charactersContainer.appendChild(card);
});