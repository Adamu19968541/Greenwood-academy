const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema(
  {
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    term: { type: String, required: true },
    grades: [
      {
        subject: String,
        score: Number
      }
    ],
    remarks: String
  },
  { timestamps: true }
);

module.exports = mongoose.model('Report', ReportSchema);