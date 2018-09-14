const Task = require("./models.js");

module.exports = {
    allTasks : (req,res) => Task.find({})
                                .then(data => console.log("getting all tasks", data) || res.json(data))
                                .catch(errs => console.log("something went wrong in allTasks", errs) || res.json(errs)),
    oneTask : (req,res) => Task.findById(req.params.id)
                               .then(tasks => console.log("getting task by ID", tasks) || res.json(tasks))
                               .catch(errs => console.log("something went wrong in oneTask", errs) || res.json(errs)),
    makeTask : (req,res) => Task.create(req.body)
                                .then(data => console.log("creating a new task", data) || res.json(data))
                                .catch(errs => console.log("something went wrong in makeTask", errs) || res.json(errs)),
    updateTask : (req,res) => Task.findByIdAndUpdate(req.params.id, req.body, {runValidators: true, new: true})
                                  .then(tasks => console.log("updating task by ID", tasks) || res.json(tasks))
                                  .catch(errs => console.log("something went wrong in updateTask", errs) || res.json(errs)),
    deleteTask : (req,res) => Task.findByIdAndRemove(req.params.id)
                                  .then(tasks => console.log("removing taskby id", tasks) || res.json(tasks))
                                  .catch(errs => console.log("something went wrong in deleteTask", errs) || res.json(errs))
}