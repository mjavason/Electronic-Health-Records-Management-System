import express from 'express';
const router = express.Router();
import { doctorValidation } from '../../../../validation/doctor.validation';
import { doctorController } from '../../../../controllers/doctor.controller';
import {
  processRequestBody,
  processRequestParams,
  processRequestQuery,
} from 'zod-express-middleware';
import medicalRecordRoute from './medical_record.route';

router.use('/medical-record', medicalRecordRoute);

router.get('/search', [processRequestQuery(doctorValidation.find.query)], doctorController.find);

router.get('/count', [processRequestQuery(doctorValidation.find.query)], doctorController.getCount);

router.get('/', doctorController.getAll);

router.get('/:pagination', doctorController.getAll);

router.post('/', [processRequestBody(doctorValidation.create.body)], doctorController.create);

router.patch(
  '/:id',
  [processRequestBody(doctorValidation.update.body)],
  doctorController.update,
);

router.delete(
  '/:id',
  [processRequestParams(doctorValidation.delete.params)],
  doctorController.delete,
);

export default router;
