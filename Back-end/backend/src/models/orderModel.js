import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
    ProdcutID: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    quantity:{ type: String, required: true },
   unitprice: { type: String, required: true },
   totalprice: { type: String, required: true },
  });

  const order = mongoose.model('Admin', adminSchema);


export default Order;