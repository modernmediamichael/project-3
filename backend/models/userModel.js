import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String },
  email: { type: String, required: true,unique:true },
  body: String,
  password: { type: String, required: true },
  body: String,
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

export default User;