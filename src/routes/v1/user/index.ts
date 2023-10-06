import express from 'express';
const router = express.Router();
import patientRoute from './patient.route';
import doctorRoute from './doctor';
import isAuth from '../../../middleware/is_auth.middleware';

router.use(isAuth);
router.use('/patient', patientRoute);
router.use('/doctor', doctorRoute);

export default router;
