import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import adminRoutes from './routes/adminRoutes.js'
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import authenticateUser from './middleware/authMiddleweare.js'
const app = express();
dotenv.config()

app.use(cors()); 
app.use(helmet()); 
app.use(morgan('dev')); 
app.use(express.json()); 

app.use('/api/admin',authenticateUser, adminRoutes)
app.use('/api/user', userRoutes)
app.use('/api/product',authenticateUser, productRoutes)

connectDB(process.env.MONGO_URI).then(() => {
  console.log('Connected to MongoDB');
});

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
