const sqlite3 = require('sqlite3').verbose()

const dbSource = './db/jobseekerpro.sqlite'

// create database connection
let db = new sqlite3.Database(dbSource, (err) => {
  if (err) {
    console.error(err.message)
    throw err
  } else {
    console.log('Connected to the SQLite database.')
  }
})

// get user by username
function getUserByUsername(username, callback) {
  const query = "SELECT * FROM users WHERE username = ?";
  db.get(query, [username], (err, row) => {
    if (err) {
      callback(err);
    } else {
      callback(null, row);
    }
  });
}
module.exports = db
