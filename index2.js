const brain = require("brain.js");
const data = require("./data.json");

const network = new brain.recurrent.LSTM();

const trainingData = data.map(item => ({
  input: item.text,
  output: item.category
}));

network.train(trainingData, {
  iterations: 2000
});

// Should output "hardware"
// const output = network.run("I fixed the power supply");

// Should output "software"
// const output = network.run("The code has some bugs");

console.log(`Category: ${output}`);