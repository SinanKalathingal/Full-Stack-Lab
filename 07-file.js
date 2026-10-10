// Requirement 1: Module Import
const os = require('os');
const fs = require('fs');

// Requirement 2: Get System Data
const platform = os.platform();
const homeDir = os.homedir();

// Requirement 3: Write to File
const infoMessage = `My OS is: ${platform} and my home folder is: ${homeDir}`;
fs.writeFileSync('info.txt', infoMessage);

// Requirement 4: Print to Terminal
console.log("File created successfully!");