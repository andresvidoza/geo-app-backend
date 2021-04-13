import express from 'express';
import { getPins, addPins } from '../controllers/pins.js'

const router = express.Router();

// make to the same URL but you can either do get or post
router.route('/').get(getPins).post(addPins);

export default router;