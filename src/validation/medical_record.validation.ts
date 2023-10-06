import { z } from 'zod';
import { Types } from 'mongoose';

class Validation {
  // Validation schema for creating a new medical record
  create = {
    body: z.object({
      patient: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid ObjectId format for patient',
      }),
      doctor: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid ObjectId format for doctor',
      }),
      diagnosis: z.string(),
      medications: z.array(z.string()),
      tests: z.array(
        z.object({
          test_name: z.string(),
          test_date: z.string(),
          results: z.string(),
        }),
      ),
      deleted: z.boolean().optional(),
      // Add validations for other fields as needed
    }),
  };

  // Validation schema for updating an existing medical record
  update = {
    params: z.object({
      id: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid ObjectId format for medical record ID',
      }),
    }),
    body: z.object({
      patient: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid ObjectId format for patient',
      }),
      doctor: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid ObjectId format for doctor',
      }),
      diagnosis: z.string().optional(),
      medications: z.array(z.string()).optional(),
      tests: z
        .array(
          z.object({
            test_name: z.string(),
            test_string: z.string(),
            results: z.string(),
          }),
        )
        .optional(),
      deleted: z.boolean().optional(),
      // Add validations for other fields as needed
    }),
  };

  // Validation schema for deleting a medical record
  delete = {
    params: z.object({
      id: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid ObjectId format for medical record ID',
      }),
    }),
  };

  // Validation schema for searching for medical records with specific criteria
  find = {
    query: z.object({
      _id: z
        .string()
        .refine((value) => Types.ObjectId.isValid(value), {
          message: 'Invalid ObjectId format for medical record ID',
        })
        .optional(),
      patient: z
        .string()
        .refine((value) => Types.ObjectId.isValid(value), {
          message: 'Invalid ObjectId format for patient',
        })
        .optional(),
      doctor: z
        .string()
        .refine((value) => Types.ObjectId.isValid(value), {
          message: 'Invalid ObjectId format for doctor',
        })
        .optional(),
      diagnosis: z.string().optional(),
      // Add validations for other fields as needed
    }),
  };
}

export const medicalRecordValidation = new Validation();
