const { startTimer } = require('./timer');

console.log("Starting Execution...");

const endStep1 = startTimer("Step 1: Init");
for (let i = 0; i < 100000000; i++) {}
endStep1();

const endStep2 = startTimer("Step 2: Process");
for (let i = 0; i < 50000000; i++) {}
endStep2();

console.log("Execution Completed");