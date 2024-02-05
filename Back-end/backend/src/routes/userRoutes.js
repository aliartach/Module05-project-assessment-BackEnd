import express from "express";
import {getUser,getAllUsers,createUser,deleteUser,updateUser} from '../controllers/userControllers.js'

const router = express.Router()

router.get('/', getAllUsers)
router.get('/:id', getUser)
router.post('/', createUser)
router.delete('/:id', deleteUser)
router.put('/:id', updateUser)

export default router;