// Define the add function
function add(a, b) {
    // Using a while loop to ensure we handle inputs correctly
    let sum = 0;
    let count = 0;
    
    // Validate and add numbers
    while (count < 2) {
        if (count === 0) {
            if (a === undefined) {
                console.log('Missing size');
                return;
            } else {
                sum += parseInt(a);
            }
        } else {
            if (b === undefined) {
                console.log('Missing size');
                return;
            } else {
                sum += parseInt(b);
            }
        }
        count++;
    }
    
    // Output the result
    console.log(sum);
}

// Get command line arguments
const args = process.argv.slice(2);

// Call add function with the provided arguments
add(args[0], args[1]);
