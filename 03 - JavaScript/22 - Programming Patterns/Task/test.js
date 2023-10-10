// index.js

// Uvoz modula
var StepCounter = require("./scripts");
// Koristite funkcije iz modula
StepCounter.walk(10); // Hodali ste 10 koraka.
StepCounter.walk(5); // Hodali ste 5 koraka.
console.log("Ukupno koraka: " + StepCounter.getTotalSteps()); // Ukupno koraka: 15
