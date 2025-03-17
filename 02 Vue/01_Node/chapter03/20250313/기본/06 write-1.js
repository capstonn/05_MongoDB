const fs = require('fs');

const data = fs.readFileSync('./20250313/기본/example.txt', 'utf8');
fs.writeFileSync('./20250313/기본/text-1.txt', data);
