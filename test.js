var fs = require('fs');

var data = {
  one: '1',
  two: '2',
  arr: [
    {
      id: 1,
      val: false
    },
    {
      id: 2,
      val: true
    }
  ]
}

fs.writeFile("input.json", JSON.stringify(data), function (err) {
  if (err) throw err;
  console.log('complete');
}
);