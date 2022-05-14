// Special: hameye mohtavahaye tamame Arayeharo beriz to yek araye be esme specialArray

let xArray0 = [1, 5, [10, 2, "Amir", 4, 5], [100, 3, "Ali" ]]

//Define specialArray 
let specialArray = [];

// Define a for loop for xArray0

for (let i = 0; i < xArray0.length; i++) {

    // push xArray0 values to specialArray

    specialArray.push(xArray0[i])

    // Define a for loop for level2 values 

    for (let j = 0; j < xArray0[i].length; j++){

        // push level2 values  to specialArray
        
        specialArray.push(xArray0[i][j])
    }
}

console.log(specialArray);

for (let i = 0; i < specialArray.length; i++){
    console.log(specialArray[i]);
}
