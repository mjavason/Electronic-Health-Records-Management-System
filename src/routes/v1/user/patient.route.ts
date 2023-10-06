import express from 'express';
const router = express.Router();
import { patientController } from '../../../controllers';

router.get('/', patientController.getProfile);

export default router;
