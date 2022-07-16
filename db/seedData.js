

const client = require('./client');
const {createUser, getUser, getUserById, getUserByUserName}= require('./users');

async function createTables() {
  // create all tables, in the correct order
  try{
    console.log("Starting to build tables...");
  await client.query(`
  CREATE TABLE users(
    id	SERIAL	PRIMARY KEY,
    username	VARCHAR(255)	UNIQUE NOT NULL,
    password	VARCHAR(255)	NOT NULL
    );
  `);
    console.log("Finished Building Tables!")
  } catch (error){
    console.log('Error Creating Tables!')
    throw(error)
  }};

async function dropTables() {
  console.log("Dropping All Tables...")
  // drop all tables, in the correct order
  await client.query(`
  DROP TABLE IF EXISTS users CASCADE;
  
  `)};

//DO NOT CHANGE ANYTHING BELOW. This is default seed data, and will help you start testing, before getting to the tests. 

async function createInitialUsers() {
  console.log("Starting to create users...")
  try {
    const usersToCreate = [
      { username: "albert", password: "bertie99" },
      { username: "sandra", password: "sandra123" },
      { username: "glamgal", password: "glamgal123" },
    ]
    const users = await Promise.all(usersToCreate.map(createUser));

    console.log("Users created:");
    console.log(users);
    console.log("Finished creating users!");
  } catch (error) {
    console.error("Error creating users!");
    throw error
  }
};



async function rebuildDB() {
  try {

    client.connect();
    console.log("client has been contected")
    await dropTables();
    await createTables();
    await createInitialUsers();

  } catch (error) {
    console.log("Error during rebuildDB")
    throw error;
  }
};

module.exports = {
  rebuildDB,
  dropTables,
  createTables,
}
