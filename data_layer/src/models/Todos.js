const mongoose = require("mongoose");

// Create Schema
const TodoSchema = mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
  },
  done: {
      type: Boolean,
      default : false
  }
},
  {
    timestamps: true
});

module.exports = Todo = mongoose.model("Todo", TodoSchema);