import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  email: String,
  password: String,
  phone: Number,
  address: String,
  orders: Array,
});

export default mongoose.model('User', userSchema);
