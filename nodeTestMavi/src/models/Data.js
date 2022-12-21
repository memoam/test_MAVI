import { Schema, model } from 'mongoose';

const dataSchema = new Schema(
  {
    names: String,
    lastNameFirst: String,
    lastNameSecond: String,
    addres: String,
    email: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model('Data', dataSchema);
