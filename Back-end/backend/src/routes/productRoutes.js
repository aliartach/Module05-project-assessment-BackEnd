import express from "express";
import { getSingleProduct, updateProduct, deleteProduct, getProduct, createProduct } from '../controllers/productController.js'

const router = express.Router()

router.get('/', getProduct)
router.get('/:id', getSingleProduct)
router.post('/', createProduct)
router.delete('/:id', deleteProduct)
router.put('/:id', updateProduct)

export default router;

