const fs = require('fs');
let content = `
============================
^_^
============================`;

fs.writeFileSync('./text-1.txt', content, { flag: 'a' });
