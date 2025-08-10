const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
    applicationDate: { type: Date, default: Date.now }
  }
);

module.exports = mongoose.model('Candidate', CandidateSchema);