import express from 'express';
// import { v4 as uuidv4 } from 'uuid';
import { createuser,getUsers,getUserId,deleteUser, updateUser } from '../controllers/users.js';



const router = express.Router();

router.get('/',getUsers)

router.post('/',createuser)

router.get('/:id',getUserId)

router.delete('/:id',deleteUser)

router.patch('/:id',updateUser)


export default router;

