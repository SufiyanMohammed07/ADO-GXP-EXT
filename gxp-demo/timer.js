const fs = require('fs');

function startTimer(step) {
    const start = Date.now();
    return () => {
        const end = Date.now();
        const duration = end - start;

        const log = `${step}: ${duration} ms\n`;
        fs.appendFileSync('execution-log.txt', log);

        return duration;
    };
}

module.exports = { startTimer };