import express from 'express';
import medicalRecordRoute from './medical_record.route';
const router = express.Router();

router.use('/medical-record', medicalRecordRoute);
// router.post('/register', processRequestBody(authValidation.register.body), userController.register);

export default router;
