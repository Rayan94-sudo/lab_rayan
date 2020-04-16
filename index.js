const fs = require('fs');
const path = require('path');
const neatCsv = require('neat-csv');


  fs.readFile('./Rayan - Sheet1.csv', async (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    console.log( await neatCsv(data));
    fs.writeFile('Rayan - sheet1.json', JSON.stringify(await neatCsv(data)), function (err) {
        if (err) return console.log(err);
    });
  });

  