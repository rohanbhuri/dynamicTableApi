const express = require('express');
var table = require('./controllers/table')
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('tables', (req, res) => { table.allTables(req, res) });
router.post('create-table', (req, res) => { table.allTables(req, res) });

module.exports = router;





