var Task = require('../models/task')

// GET
function getAll(request, response) {
  Task.find(function(error, tasks) {
    if(error) response.json({message: 'Could not find any task'})

    response.json({tasks: tasks})
  })
}

// POST
function createTask(request, response) {
  console.log('in POST')
  console.log('body:',request.body)

  var task = new Task(request.body)

  task.save(function(error) {
    if(error) response.json({messsage: 'Could not ceate task b/c:' + error})

    response.json({task: task})
  })
}

// GET
function getTask(request, response) {
  var id = request.params.id

  Task.findById({_id: id}, function(error, task) {
    if(error) response.json({message: 'Could not find task b/c:' + error})

    response.json({task: task})
  })
}

function updateTask(request, response) {
  var id = request.params.id

  Task.findById({_id: id}, function(error, task) {
    if(error) response.json({message: 'Could not find task b/c:' + error})

    if(request.body.category) task.category = request.body.category
    if(request.body.task) task.task = request.body.task
    if(request.body.image_url) task.image_url = request.body.image_url

    task.save(function(error) {
      if(error) response.json({messsage: 'Could not update task b/c:' + error})

      response.json({message: 'Task successfully updated', task: task})
    })
  })
}

function removeTask(request, response) {
  var id = request.params.id

  Task.remove({_id: id}, function(error) {
    if(error) response.json({message: 'Could not delete task b/c:' + error})

    response.json({message: 'Task successfully deleted'})
  })
}

module.exports = {
  getAll: getAll,
  createTask: createTask,
  getTask: getTask,
  updateTask: updateTask,
  removeTask: removeTask
}
