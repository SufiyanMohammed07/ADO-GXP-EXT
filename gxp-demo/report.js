const fs = require('fs');

const log = fs.readFileSync('execution-log.txt', 'utf-8');

const report = `
==== Execution Report ====
${log}
==========================
`;

fs.writeFileSync('report.txt', report);

console.log("Report Generated");