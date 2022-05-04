import express from 'express';
import { readAllByIp, create } from '../controller/stopwatch.controller.js';

const router = express.Router();

router.get('/', readAllByIp);
router.post('/', create);

export default router;
