const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database("./db/database.sqlite");

const getAllProducts = (req, res) => {
  db.all("SELECT * FROM products", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

module.exports = { getAllProducts };
