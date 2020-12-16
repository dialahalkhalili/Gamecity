import mongoose from "mongoose";

const gameSchema = mongoose.Schema({
  id: Number,
  firstName: String,
  lastName: String,
  email: String,
  city: String,
  phoneNo: Number,
  birthday: Date,
  password: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  joinCount: {
    type: Number,
    id: [Number],
    default: 0,
  }
});

const GameSchema = mongoose.model('GameSchema', gameSchema);

export default GameSchema;
