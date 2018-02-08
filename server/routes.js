const express = require('express');
var table = require('./controllers/table')
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.post('/tables', (req, res) => { table.allTables(req, res) });
router.post('/createTable', (req, res) => { table.createTable(req, res) });
router.post('/insert', (req, res) => { table.insert(req, res) });

module.exports = router;





