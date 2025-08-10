const mongoose = require('mongoose');

const AssignmentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    dueDate: Date,
    subject: { type: String, required: true },
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    assignedTo: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Assignment', AssignmentSchema);