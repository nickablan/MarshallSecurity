const client = require("./client");
const bcrypt = require("bcrypt");

async function createUser({ username, password }) {
  try {
    const saltRounds = 10;
    const hashedPwd = await bcrypt.hash(password, saltRounds);

    const {
      rows: [user],
    } = await client.query(
      `

        INSERT INTO users(
            username,
            password
        ) VALUES ($1, $2)
        ON CONFLICT (username) DO NOTHING
        RETURNING *;

        `,
      [username, hashedPwd]
    );
    //console.log(user);
    delete user.password;
    return user;
  } catch (error) {
    console.error("Error!");

    throw error;
  }
}

async function getUser({ username, password }) {
  try {
    const user = await getUserByUserName(username);
    const hashedPassword = user.password;
    const passwordsMatch = await bcrypt.compare(password, hashedPassword);
    if (!passwordsMatch) {
      return;
    }
    delete user.password;

    return user;
  } catch (error) {
    throw error;
  }
}

async function getUserById(userId) {
  try {
    const {
      rows: [user],
    } = await client.query(`
            SELECT id, username
            FROM users
            WHERE id=${userId};
        `);
    //console.log("These are the users we are grabbing by the id: ",user);

    if (!user) {
      return null;
    }
    return user;
  } catch (error) {
    throw error;
  }
}

async function getUserByUserName(userName) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
            SELECT *
            FROM users
            WHERE username = $1;
        `,
      [userName]
    );

    if (!user) {
      return null;
    }
    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createUser,
  getUser,
  getUserById,
  getUserByUserName,
};
