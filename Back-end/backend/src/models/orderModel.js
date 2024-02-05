import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    ProdcutID: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    quantity:{ type: String, required: true },
   unitprice: { type: String, required: true },
   totalprice: { type: String, required: true },
  });

  const Order = mongoose.model('Order', orderSchema);


export default Order;