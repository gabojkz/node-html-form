'use strict';

const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

/**
 * @return {Promise}
*/
function getDB() {
  return new Promise((resolve, reject) => {
    try {
      const data = readFile('./db.json', 'utf8');

      console.log('server delay ...');

      setTimeout(() => resolve(data), 2000);
    } catch (e) {
      console.log(e);
      reject(e.message);
    }
  });
}
/**
 * @param {object} data
 * @return {boolean} result
*/
function saveDB(data) {
  return new Promise((resolve) => {
    try {
      // override the user
      const newData = JSON.stringify({
        'users': [data],
        'countries': [
          {
            'USA': {
              'cities': [
                {'name': 'New York'},
                {'name': 'Los Angeles'},
                {'name': 'Chicago'},
                {'name': 'Illinois'},
              ],
            },
          },
        ],
        'cars': [
          {'id': 1, 'brand': 'Toyota'},
          {'id': 2, 'brand': 'Ferrari'},
          {'id': 4, 'brand': 'Nissan'},
        ],
      });

      fs.writeFileSync('./db.json', newData);
      resolve(true);
    } catch (e) {
      console.log(e);
      resolve(false);
    }
  });
}

module.exports = {get: getDB, save: saveDB};
