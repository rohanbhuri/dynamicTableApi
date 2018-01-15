const express = require('express');
var auth = require('./controllers/auth');
var todo = require('./controllers/todo')
var spieler = require('./controllers/spieler')
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/auth/users', (req, res) => { auth.allUsers(req, res) });
router.post('/auth/login', (req, res) => { auth.login(req, res) });
router.post('/auth/signup', (req, res) => { auth.signup(req, res) });
router.put('/auth/update/:id', (req, res) => { auth.updateUser(req, res) });

router.get('/todo/tasks/:id', (req, res) => { todo.getTasks(req, res) });
router.post('/todo/task', (req, res) => { todo.postTask(req, res) });
router.get('/todo/task/:id', (req, res) => { todo.getTask(req, res) });
router.put('/todo/task/:id', (req, res) => { todo.updateTask(req, res) });
router.delete('/todo/task/:id', (req, res) => { todo.deleteTask(req, res) });

router.get('/spielers', (req, res) => { spieler.allSpielers(req, res) });
router.get('/spieler/:id', (req, res) => { spieler.spieler(req, res) });
router.post('/spieler', (req, res) => { spieler.addSpieler(req, res) });
router.post('/Multiple-spieler', (req, res) => { spieler.addMultipleSpieler(req, res) });
router.put('/spieler/:id', (req, res) => { spieler.updateSpieler(req, res) });
router.delete('/spieler/:id', (req, res) => { spieler.deleteSpieler(req, res) });



module.exports = router;





