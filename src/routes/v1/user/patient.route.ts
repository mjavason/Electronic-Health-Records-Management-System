import express from 'express';
const router = express.Router();
import { patientController } from '../../../controllers';
import { patientValidation } from '../../../validation/patient.validation';
import {
  processRequestBody,
  processRequestParams,
  processRequestQuery,
} from 'zod-express-middleware';

router.get(
  '/search',
  [processRequestQuery(patientValidation.find.query)],
  patientController.find,
);

router.get(
  '/count',
  [processRequestQuery(patientValidation.find.query)],
  patientController.getCount,
);

router.get('/', patientController.getProfile);

// router.get('/', patientController.getAll);

router.get('/:pagination', patientController.getAll);

router.post(
  '/',
  [processRequestBody(patientValidation.create.body)],
  patientController.create,
);

router.patch(
  '/:id',
  [processRequestBody(patientValidation.update.body)],
  patientController.update,
);

router.delete(
  '/:id',
  [processRequestParams(patientValidation.delete.params)],
  patientController.delete,
);

export default router;
