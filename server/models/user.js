const con = require("./db_connect");

async function createUsersTable() {
  const sql = `CREATE TABLE IF NOT EXISTS WP_users (
    UserID INT NOT NULL AUTO_INCREMENT,
    FullName VARCHAR(255) NOT NULL,
    Username VARCHAR(100) NOT NULL UNIQUE,
    Email VARCHAR(255) NOT NULL UNIQUE,
    Password VARCHAR(255) NOT NULL,
    PRIMARY KEY (UserID)
  );`;
  await con.query(sql);
}

createUsersTable();

async function userExists(username) {
  const sql = `SELECT * FROM WP_users WHERE Username = ?`;
  const result = await con.query(sql, [username]);
  return result;
}

async function deleteUser(UserID) {
  const sql = `DELETE FROM WP_users WHERE UserID = ?`;
  await con.query(sql, [UserID]);
  return { message: "User deleted successfully." };
}

async function updateUser(user) {
  const { UserID, FullName, Username, Email, Password } = user;
  const sql = `UPDATE WP_users SET FullName=?, Username=?, Email=?, Password=? WHERE UserID=?`;
  await con.query(sql, [FullName, Username, Email, Password, UserID]);
  return { message: "User updated successfully." };
}

async function register(user) {
  const { FullName, Username, Email, Password } = user;

  const existingUser = await userExists(Username);
  if (existingUser.length > 0) throw Error("Username already in use.");

  const sql = `INSERT INTO WP_users (FullName, Username, Email, Password) VALUES (?, ?, ?, ?)`;
  await con.query(sql, [FullName, Username, Email, Password]);

  return await userExists(Username);
}

async function login(user) {
  const { Username, Password } = user;

  const existingUser = await userExists(Username);
  if (!existingUser.length) throw Error("Username does not exist!");

  if (existingUser[0].Password !== Password) throw Error("Password incorrect!");

  return existingUser[0];
}

async function getAllUsers() {
  const sql = `SELECT * FROM WP_users`;
  return await con.query(sql);
}

module.exports = { register, login, getAllUsers, userExists, deleteUser, updateUser };
