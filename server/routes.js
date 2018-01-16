const express = require('express');
var auth = require('./controllers/auth');
var todo = require('./controllers/todo')
var restaurant = require('./controllers/restaurant')
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

router.get('/restaurants', (req, res) => { restaurant.allRestaurant(req, res) });
router.get('/restaurant/:id', (req, res) => { restaurant.Restaurant(req, res) });
router.post('/restaurant', (req, res) => { restaurant.addRestaurant(req, res) });
router.put('/restaurant/:id', (req, res) => { restaurant.updateRestaurant(req, res) });
router.delete('/restaurant/:id', (req, res) => { restaurant.deleteRestaurant(req, res) });

module.exports = router;





