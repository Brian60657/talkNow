var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override') //used to manipulate POST

var {getAll, createTask, getTask, updateTask, removeTask} = require('../controllers/tasks')

// http://127.0.0.1:3000/tasks
router.route('/tasks')

  //GET all tasks
  .get(getAll)

  //POST a new task
  .post(createTask)


router.route('/tasks/:id')

  // GET return specific task
  .get(getTask)

  // PATCH update existing task
  .patch(updateTask)

  // DELETE remove specific task from DB
  .delete(removeTask)


module.exports = router
