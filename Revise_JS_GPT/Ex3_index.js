// Exo 3 - Objects + JSON - AnnaSpirit
// FR: Objectif -> manipuler objets, this, JSON.stringify/parse, filtrer
// EN: Goal -> practice objects, this, JSON stringify/parse, filtering

// 1) Create an "employee" object with a method               (FR: créer un objet + méthode)
const employee = {
    name: "Jim Halpert",
    title: "Salesman",
    // FR: retourne le nom en utilisant this
    // EN: return the name using this
    displayName: function () {
        return this.name;
    },
    // FR: retourne une phrase simple
    // EN: return a simple sentence
    sellPaper: function () {
        return "Would you like to buy some paper?";
    }
};

console.log("1) displayName:", employee.displayName()); // Jim Halpert
console.log("1) sellPaper:", employee.sellPaper());     // Would you like...

// 2) Make an array of employees                              (FR: tableau d'objets)
const team = [
    employee,
    { name: "Pam Beesly", title: "Receptionist", displayName: function () { return this.name; } },
    { name: "Dwight Schrute", title: "Assistant to the Regional Manager", displayName: function () { return this.name; } }
];

console.log("\n2) Team size:", team.length); // 3

// 3) Convert to JSON string                                  (FR: convertir en JSON (string))
const teamJson = JSON.stringify(team);
// FR: afficher le JSON compact + un extrait joli
// EN: show compact JSON + a pretty slice
console.log("\n3) team JSON (compact):", teamJson);
console.log("3) team JSON (pretty):\n", JSON.stringify(team, null, 4)); // pretty print

// 4) Parse back from JSON to JS objects                       (FR: re-convertir vers objets)
const parsedTeam = JSON.parse(teamJson);
console.log("\n4) First parsed name:", parsedTeam[0].name); // Jim Halpert

// ⚠️ Note: methods are lost after JSON round-trip             (FR: les méthodes disparaissent en JSON)
// EN: JSON keeps data only; functions are not preserved.
console.log("4) Has displayName after parse?", typeof parsedTeam[0].displayName); // undefined

// 5) Re-attach a method if needed                             (FR: rebrancher une méthode)
parsedTeam.forEach(function (member) {
    member.displayName = function () { return this.name; };
});
console.log("5) Reattached method works:", parsedTeam[1].displayName()); // Pam Beesly

// 6) Small utility: filter by title                           (FR: petit filtre par titre)
function filterByTitle(list, wantedTitle) {
    // FR: retourne les noms dont le titre correspond (insensible à la casse)
    // EN: return names whose title matches (case-insensitive)
    const lower = wantedTitle.toLowerCase();
    return list
        .filter(function (m) { return (m.title || "").toLowerCase().includes(lower); })
        .map(function (m) { return m.name; });
}

console.log("\n6) Filter 'Sales':", filterByTitle(parsedTeam, "sales")); // ["Jim Halpert"]

// 7) Mini-asserts (quick checks)                              (FR: mini vérifs)
console.log("\n7) Checks:",
    employee.displayName() === "Jim Halpert" &&
        Array.isArray(team) &&
        typeof teamJson === "string" &&
        parsedTeam.length === team.length
        ? "✅ All good, Captain!"
        : "❌ Something is off… check steps."
);
