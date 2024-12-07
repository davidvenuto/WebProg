const con = require("./db_connect");

async function createToDoTable() {
  const sql = `CREATE TABLE IF NOT EXISTS WP_ToDo (
    ToDoItemID INT NOT NULL AUTO_INCREMENT,
    UserID INT,
    Username VARCHAR(100),
    Title VARCHAR(255) NOT NULL,
    Description TEXT,
    CompletionDate DATE,
    PRIMARY KEY (ToDoItemID),
    FOREIGN KEY (UserID) REFERENCES WP_users(UserID)
  );`;
  await con.query(sql);
}

createToDoTable();

async function addToDo(todo) {
  const { UserID, Username, Title, Description, CompletionDate } = todo;

  const sql = `INSERT INTO WP_ToDo (UserID, Username, Title, Description, CompletionDate)
               VALUES (?, ?, ?, ?, ?)`;
  await con.query(sql, [UserID, Username, Title, Description, CompletionDate]);

  return { message: "To-Do item added successfully." };
}

async function getUserToDos(UserID) {
  const sql = `SELECT * FROM WP_ToDo WHERE UserID = ?`;
  return await con.query(sql, [UserID]);
}

async function updateToDo(todo) {
  const { ToDoItemID, Title, Description, CompletionDate } = todo;

  const sql = `UPDATE WP_ToDo SET 
                 Title = ?, 
                 Description = ?, 
                 CompletionDate = ?
               WHERE ToDoItemID = ?`;
  await con.query(sql, [Title, Description, CompletionDate, ToDoItemID]);

  return { message: "To-Do item updated successfully." };
}

async function deleteToDo(ToDoItemID) {
  const sql = `DELETE FROM WP_ToDo WHERE ToDoItemID = ?`;
  await con.query(sql, [ToDoItemID]);

  return { message: "To-Do item deleted successfully." };
}

module.exports = { addToDo, getUserToDos, updateToDo, deleteToDo };
