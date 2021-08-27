const router = require('express').Router();
const controllers = require('../controllers/todosController');

router.post('/', controllers.addTodo);
router.get('/days/:date', controllers.getAllTodosForDay);
router.get('/days', controllers.getAllDays);

// router.get('/:id', controllers.getTodo);

module.exports = router;
