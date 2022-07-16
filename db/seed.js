/* 
DO NOT CHANGE THIS FILE
*/
const client = require('./client');
const { rebuildDB } = require('./seedData');
console.log(client)
rebuildDB()
  .catch(console.error)
  .finally(() => client.end());
