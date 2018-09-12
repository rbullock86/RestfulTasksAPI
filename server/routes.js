const api = require("./controllers.js");
const bp = require("body-parser");

module.exports = function(app){
    app.use(bp.json());

    app.get("/tasks", api.allTasks);
    app.get("/tasks/:id", api.oneTask);
    app.post("/tasks", api.makeTask);
    app.put("/tasks/:id", api.updateTask);
    app.delete("/tasks/:id", api.deleteTask);

    return app;
}