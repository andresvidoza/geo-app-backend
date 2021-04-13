import express from 'express';
import { postUser, updateUser } from '../controllers/user.js'

const router = express.Router();

// make to the same URL but you can either do get or post
router.route('/').post(postUser).put(updateUser);

export default router;