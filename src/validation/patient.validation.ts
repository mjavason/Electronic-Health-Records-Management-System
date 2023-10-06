import { z } from 'zod';
import { Types } from 'mongoose';

class PatientValidation {
  // Validation schema for creating a new patient
  create = {
    body: z.object({
      birth_date: z.string(),
      phone_number: z.string(),
      address: z.string(),
      // Add validations for other fields as needed
    }),
  };

  // Validation schema for updating an existing patient
  update = {
    params: z.object({
      id: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid ObjectId format for patient ID',
      }),
    }),
    body: z.object({
      birth_date: z.date().optional(),
      phone_number: z.string().optional(),
      address: z.string().optional(),
      deleted: z.boolean().optional(),
      // Add validations for other fields as needed
    }),
  };

  // Validation schema for deleting a patient
  delete = {
    params: z.object({
      id: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid ObjectId format for patient ID',
      }),
    }),
  };

  // Validation schema for searching for patients with specific criteria
  find = {
    query: z.object({
      _id: z
        .string()
        .refine((value) => Types.ObjectId.isValid(value), {
          message: 'Invalid ObjectId format for patient ID',
        })
        .optional(),
      pt_number: z.number().optional(),
      birth_date: z.string().optional(),
      phone_number: z.string().optional(),
      address: z.string().optional(),
      deleted: z.boolean().optional(),
      // Add validations for other fields as needed
    }),
  };
}

export const patientValidation = new PatientValidation();
