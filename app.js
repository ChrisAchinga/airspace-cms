const express = require('express')
const sqlite3 = require('sqlite3').verbose()
const db = require('./db.js');
const app = express()

// Initialize database connection
db.serialize(() => {
  // Run schema script
  db.run(require('fs').readFileSync('./schema.sql', 'utf8'), (err) => {
    if (err) {
      console.error(err.message)
      throw err
    } else {
      console.log('Schema created successfully.')
    }
  })

  // Run seed script
  // db.run(require('fs').readFileSync('./seed.sql', 'utf8'), (err) => {
  //   if (err) {
  //     console.error(err.message)
  //     throw err
  //   } else {
  //     console.log('Seed data inserted successfully.')
  //   }
  // })
})

app.get('/', (req, res) => {
  res.send('Server running')
})

app.listen(3000, () => {
  console.log('JobSeekerPro server running on port 3000')
})
