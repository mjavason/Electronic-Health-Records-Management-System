import express from 'express';
const router = express.Router();
import { medicalRecordValidation } from '../../../../validation/medical_record.validation';
import { medicalRecordController } from '../../../../controllers/medical_record.controller';
import {
  processRequestBody,
  processRequestParams,
  processRequestQuery,
} from 'zod-express-middleware';

router.get(
  '/search',
  [processRequestQuery(medicalRecordValidation.find.query)],
  medicalRecordController.find,
);

router.get(
  '/count',
  [processRequestQuery(medicalRecordValidation.find.query)],
  medicalRecordController.getCount,
);

router.get('/', medicalRecordController.getAll);

router.get('/:pagination', medicalRecordController.getAll);

router.post(
  '/',
  [processRequestBody(medicalRecordValidation.create.body)],
  medicalRecordController.create,
);

router.patch(
  '/:id',
  [processRequestBody(medicalRecordValidation.update.body)],
  medicalRecordController.update,
);

router.delete(
  '/:id',
  [processRequestParams(medicalRecordValidation.delete.params)],
  medicalRecordController.delete,
);

export default router;
