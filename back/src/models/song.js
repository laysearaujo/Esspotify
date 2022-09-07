import mongoose from 'mongoose';

const SongSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    unique: true,
    required: true,
  },
  participations: {
    data: String,
  },
  explicit: {
    type: Boolean
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

export const Song = mongoose.model('Song', SongSchema);