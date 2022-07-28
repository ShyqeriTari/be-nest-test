import * as mongoose from 'mongoose';

export const ClubSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
});
