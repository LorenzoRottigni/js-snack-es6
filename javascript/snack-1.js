const bicycles = [
    {'name' : 'Bianchi' , 'weight': 6.5},
    {'name' : 'Campagnolo' , 'weight' : 6.8},
    {'name' : 'Deda Elementi' , 'weight' : 6.2}
];


function getLowest(bicycles){
    var minWeight = 100;
    for (let i = 0; i < bicycles.length; i++) {
        const bicycleWeight = bicycles[i].weight;
        if(bicycleWeight < minWeight)
            minWeight = bicycleWeight;
    }
    return minWeight;
}


document.write(getLowest(bicycles));