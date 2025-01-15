#!/usr/bin/node
/*
    Print a square with the character #
    
    The size of the square must be the first argument 
    of the program.
*/

if (process.argv.length <= 2) {
    process.stderr.write("Missing argument\n");
    process.stderr.write("Usage: ./1-print_square.js <size>\n");
    process.stderr.write("Example: ./1-print_square.js 8\n");
    process.exit(1);
}

// Parse the size argument as an integer in base 10
const size = parseInt(process.argv[2], 10);

// Check if the argument is a valid number
if (isNaN(size) || size <= 0) {
    process.stderr.write("Invalid size. Please provide a positive integer.\n");
    process.exit(1);
}

// Print the square of size "size"
for (let i = 0; i < size; i++) {
    console.log("#".repeat(size)); // Simplified way to repeat a character
}
