const express = require('express');
var table = require('./controllers/table');
var record = require('./controllers/record');
var auth = require('./controllers/auth');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/auth/users', (req, res) => { auth.allUsers(req, res) });
router.post('/auth/login', (req, res) => { auth.login(req, res) });
router.post('/auth/signup', (req, res) => { auth.signup(req, res) });
router.put('/auth/update/:id', (req, res) => { auth.updateUser(req, res) });

router.post('/table/list', (req, res) => { table.listTables(req, res) });
router.post('/table/read', (req, res) => { table.readTable(req, res) });
router.post('/table/create', (req, res) => { table.createTable(req, res) });
router.post('/table/update', (req, res) => { table.updateTable(req, res) });
router.post('/table/delete', (req, res) => { table.deleteTable(req, res) });
router.post('/table/list/download', (req, res) => { table.downloadTableList(req, res) });
// router.post('/table/list/upload', (req, res) => { table.uploadTableList(req, res) });
router.post('/table/schema/download', (req, res) => { table.downloadTableSchema(req, res) });
router.post('/table/schema/upload', (req, res) => { table.uploadTableSchema(req, res) });

router.post('/records/list', (req, res) => { record.listRecords(req, res) });
router.post('/records/read', (req, res) => { record.readRecords(req, res) });
router.post('/records/create', (req, res) => { record.createRecords(req, res) });
router.post('/records/update', (req, res) => { record.updateRecords(req, res) });
router.post('/records/delete', (req, res) => { record.deleteRecords(req, res) });
router.post('/records/download', (req, res) => { record.DownloadRecords(req, res) });


module.exports = router;





