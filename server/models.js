const mongoose = require("mongoose");

// make modelschema
const TaskSchema = new mongoose.Schema({
    title:  {
        type: String,
        required: true,
        minlength: 2
    },
    description: {
        type: String,
        default: ""
    },
    completed: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

// connect
mongoose.connect("mongodb://localhost:27017/taskapi_db", {useNewUrlParser: true}, (errs)=>console.log(errs?errs:"db connected"));

// export
module.exports = mongoose.model("Task", TaskSchema)