const express = require('express');
var table = require('./controllers/table')
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.post('/table/list', (req, res) => { table.listTables(req, res) });
router.post('/table/read', (req, res) => { table.readTable(req, res) });
router.post('/table/create', (req, res) => { table.createTable(req, res) });
router.post('/table/update', (req, res) => { table.updateTable(req, res) });
router.post('/table/delete', (req, res) => { table.deleteTable(req, res) });
router.post('/table/list/download', (req, res) => { table.downloadTableList(req, res) });
router.post('/table/list/upload', (req, res) => { table.uploadTableList(req, res) });
router.post('/table/schema/download', (req, res) => { table.downloadTableSchema(req, res) });
router.post('/table/schema/upload', (req, res) => { table.uploadTableSchema(req, res) });


router.post('/insert', (req, res) => { table.insert(req, res) });

module.exports = router;





