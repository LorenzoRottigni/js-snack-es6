/*   DELIVERY
*    Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
*    Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
*/

const squads = [
    {'name' : 'Milan' , 'score': 0 , 'foul' : 0 },
    {'name' : 'Inter' , 'score': 0 , 'foul' : 0 },
    {'name' : 'Juventus' , 'score': 0 , 'foul' : 0 },
    {'name' : 'Atalanta' , 'score': 0 , 'foul' : 0 },
    {'name' : 'Roma' , 'score': 0 , 'foul' : 0 },
];

/*  DELIVERY
*   Generare numeri random al posto degli 0 nelle proprietà:
*   Punti fatti e falli subiti.
*/

for (let i = 0; i < squads.length; i++) {
    const workingObject = squads[i];
    for (const key in workingObject) {
        if (workingObject[key] === 0) {
            workingObject[key] = Math.floor(Math.random() * 6); 
        }
    }
}

/*  DELIVERY
*   Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti 
*/ 

function getSquadsFouls(squads){
    const squadsAndFouls = []
    for (let i = 0; i < squads.length; i++) {
        let objectElement = squads[i];
        const {name} = objectElement;
        const {foul} = objectElement;
        squadsAndFouls.push({'name': name , 'foul': foul })
    }
    return squadsAndFouls
}

const squadsAndFouls = getSquadsFouls(squads)

/*  DELIVERY
    e stampiamo tutto in console.
*/

for (let i = 0; i < squadsAndFouls.length; i++) {
    objectElement = squadsAndFouls[i];
    for (const key in objectElement) {
        objectParam = objectElement[key];    
        console.log(objectParam)
    }
}