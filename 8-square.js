#!/usr/bin/env node

// Get the size from command line arguments
const size = process.argv[2];

// Check if the size can be converted to an integer
const intSize = parseInt(size, 10);

if (isNaN(intSize) || intSize <= 0) {
    console.log("Missing size");
} else {
    // Loop to create the square
    for (let i = 0; i < intSize; i++) {
        let row = '';
        for (let j = 0; j < intSize; j++) {
            row += 'X';
        }
        console.log(row);
    }
}
