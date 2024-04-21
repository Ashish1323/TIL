function chooseFleets(wheels) {
    return wheels.map(w => {
        // If the number of wheels is odd or less than 2, no fleet can be formed.
        if (w % 2 !== 0 || w < 2) return 0;
        
        // Start with one way, which is all two-wheeled vehicles.
        // Then add one for each pair of two-wheeled vehicles replaced by a four-wheeled vehicle.
        return Math.floor(w / 4) + 1;
    });
}



console.log(chooseFleets([6,3,2])) //[2,0,1]
console.log(chooseFleets([4,5,6])) //[2,0,2]
