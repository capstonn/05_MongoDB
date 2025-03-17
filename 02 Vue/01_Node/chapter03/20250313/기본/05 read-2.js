const fs = require('fs');

fs.readFile('./20250313/기본/example.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});
