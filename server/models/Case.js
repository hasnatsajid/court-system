const { Schema, model } = require('mongoose');

const caseSchema = new Schema({
  nature: {
    type: String,
    enum: ['criminal', 'civil', 'administrative'],
  },
  court: String,
  title: String,
  clients: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Client',
    },
  ],
  caseNumber: String,
  for: String,
  assistedBy: String,
});

module.exports = model('Case', caseSchema);
