//EXO 1

// A l'aide de ce tableau :

// Afficher dans la console Tracer
// Afficher dans la console Mei
// Changer le nom McCree en "Cole Cassidy"
// Faite une recherche sur comment ajouter un élément dans un tableau et ajouter "Ramattra"
// Ajouter une chaine de caractère "nop", pour simuler l'ajout d'une erreur
// Faire une recherche pour savoir comment supprimer un élément dans un tableau et supprimer "nop"

let championOverwatch = ['Ashe', 'Echo', 'Tracer', 'Reaper', 'Phara', 'McCree', 'Soldier:76', 'Genji', 'Sombra', 'Doomfist', 'Widowmaker', 'Torbjorn', 'Hanzo', 'Bastion', 'Junkrat', 'Mei', 'Symmetra'];

console.log(championOverwatch[2])

console.log(championOverwatch[15])

console.log(championOverwatch[5] = "cole cassidy")

championOverwatch.push("Ramatra")
 console.log(championOverwatch)

 championOverwatch.push("Nop")
 console.log(championOverwatch)
 //  console.log(championOverwatch.toString());


//  EXO2 
//  Convertir le tableau en chaine de caractère
// Afficher une copie du tableau qui va de Genji à Hanzo (faite une recherche sur slice)
// Ajouter "champion : 0" au début du tableau (faite une recherche sur unshift)
// Mettre le champion "Bastion" tout en majuscule (faite une recherche sur toUpperCase)
// Compter le nombre de personnage dans le tableau (lenght)
//  championOverwatch.pop()
//  console.log(championOverwatch)

//  let ChaineDeCaractère = championOverwatch.join("")
//  console.log(ChaineDeCaractère)



console.log(championOverwatch.slice(7,12))

championOverwatch.unshift("Champion:0")
console.log(championOverwatch)

console.log(championOverwatch[14].toUpperCase())

console.log(championOverwatch.length)

// EXO3 

let message = "Les héros d'Overwatch sont : [";
championOverwatch.forEach(heros => {
    message += heros + ", ";
});
message = message.slice(0, -2);
message += "]";
console.log(message);

