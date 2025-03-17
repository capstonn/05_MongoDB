const fs = require('fs');

fs.readFile('./20250313/기본/example.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  }
  fs.writeFile('./20250313/기본/text-2.txt', data, (err) => {
    if (err) {
      console.log(err);
    }
    console.log('작성 성공');
  });
});
