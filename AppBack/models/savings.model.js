import mongoose from 'mongoose';

const savingsProgressSchema = new mongoose.Schema({
  goal: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'goals',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  amountSaved: {
    type: Number,
    required: true,
  },
});

export default mongoose.model('savingsprogresses', savingsProgressSchema);