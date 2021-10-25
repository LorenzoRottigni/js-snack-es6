const bicycles = [
    {'name' : 'Bianchi' , 'weight': 6.5},
    {'name' : 'Campagnolo' , 'weight' : 6.8},
    {'name' : 'Deda Elementi' , 'weight' : 6.2}
];

const lowestWeightBicycleOutput = document.querySelector('h1');

function getLowest(bicycles){
    var lowestWeightBicycle = {'name' : '' ,'weight': 100}
    for (let i = 0; i < bicycles.length; i++) {
        const bicycle = bicycles[i];
        const {name} = bicycle
        const {weight} = bicycle
        if(weight < lowestWeightBicycle.weight)
            lowestWeightBicycle.name = name;
            lowestWeightBicycle.weight = weight;
    }
    return lowestWeightBicycle;
}

lowestWeightBicycle = getLowest(bicycles);

lowestWeightBicycleOutput.textContent = `The lowest weight bicycle is: ${lowestWeightBicycle.name} with weight: ${lowestWeightBicycle.weight}`