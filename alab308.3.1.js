let num = 1;
while (num <= 100) {
    if (num % 3 ==0 && num % 5 ==0) {
        console.log("fizzbuzz");
    } else if (num % 3 == 0) {
        console.log("fizz");
    } else if (num % 5 == 0){
        console.log("buzz");
    } else {
        console.log(num);
    }
    num++;
} 

    let n = 41;
    switch(n) {
        case 1:
            console.log("next prime is 2");
            break;
        case 2:
            console.log("The next prime is 3");
            break;
        case 3: case 4:
            console.log(" The next prime will be 5");
            break; 
        case 5: case 6:
            console.log("The next prime will be 7");
            break; 
        case 7: case 8: case 9:  case 10:
            console.log("The next prime will be 11");
            break;
        case 11: case 12:
             console.log("The next prime will be 13");
            break;
        case 13: case 14: case 15: case 16:
             console.log("The next prime will be 17");
            break;
    
        case 17: case 18:
            console.log("The next prime will be 19");
            break; 
        case 19: case 20: case 21: case 22:
            console.log(" The next prime will be 23");
            break; 
        case 24: case 25: case 26: case 27: case 28:
            console.log("The next prime will be 29");
            break; 
        case 29: case 30:
            console.log("The next prime will be 31");
            break;
        case 31: case 32: case 33: case 34: case 35: case 36:
             console.log("The next prime will be 37");
            break;
        case 37: case 38: case 39: case 40:
            console.log("The next prime will be 41");
            break; 
        case 41: case 42:
            console.log("The next prime will be 43");
            break; 
        case 43: case 44: case 45: case 46: 
            console.log("The next prime will be 47");
            break;
    }


    let csvData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// Initialize variables
let cell = '';
let row = '';

// Loop through each character in the CSV string
for (let i = 0; i < csvData.length; i++) {
    switch (csvData[i]) {
        case ',': // When a comma is encountered
            row += cell + ' '; // Add the current cell to the row with a space
            cell = ''; // Reset the cell variable for the next value
            break;
        case '\n': // When a new line is encountered
            row += cell; // Add the last cell to the row
            console.log(row.trim()); // Log the entire row, trimming any trailing spaces
            cell = ''; // Reset the cell variable for the next row
            row = ''; // Reset the row variable for the next row
            break;
        default:
            cell += csvData[i]; // Append the current character to the cell
            break;
    }
}

// Handle the last row if it doesn't end with a newline
if (cell) {
    row += cell;
    console.log(row.trim());
}