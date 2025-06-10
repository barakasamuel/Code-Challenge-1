// named my function calculateBodaFare and assigned distanceInKm as an argument 
function calculateBodaFare (distanceInKm) {
    
    // Assigned constant variables(baseFare and chargePerKm are basic prices)
    const baseFare = 50;
    const chargePerKm = 15;
    // My calculations
    const mpaka = chargePerKm * distanceInKm
    const totalFare = baseFare + (chargePerKm * distanceInKm);
    // expected output
    return `Uko Kwote? Io ni ${distanceInKm}:
    Ukikalia pikipiki: ${baseFare}
    Mpaka Uko: ${mpaka}:
    Total: ${totalFare}
    
    
    Panda Pikipiki!`
}

        
    
    const userInput = prompt('Unafika wapi mkubwa? Kilometer ngapi?:');
    const distance = Number(userInput);
    if (!isNaN(distance) && distance > 0) {
        console.log(calculateBodaFare(distance));
    } else {
        console.log('Tafadhali ingiza nambari sahihi ya kilomita.');
    }