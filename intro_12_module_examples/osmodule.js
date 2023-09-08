const os = require("os")

console.log(os.freemem())
console.log(os.homedir())
console.log(os.hostname())
console.log(os.platform(),os.release())
console.log(os.uptime())

// CPU Information
console.log("CPU architecture:", os.arch());
console.log("Number of CPU cores:", os.cpus().length);
console.log("CPU model:", os.cpus()[0].model);

// Network Interfaces
const networkInterfaces = os.networkInterfaces();
console.log("Network Interfaces:");
console.log(networkInterfaces);

// Memory Information
console.log("Total system memory (bytes):", os.totalmem());
console.log("Free system memory (bytes):", os.freemem());

// Load Averages
const loadAvg = os.loadavg();
console.log("1-minute load average:", loadAvg[0]);
console.log("5-minute load average:", loadAvg[1]);
console.log("15-minute load average:", loadAvg[2]);

// Endianness
console.log("Endianness:", os.endianness());

// User Information
console.log("User info:", os.userInfo());