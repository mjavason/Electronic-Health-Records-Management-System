import { z } from 'zod';
import { Types } from 'mongoose';

class DoctorValidation {
  // Validation schema for creating a new doctor
  create = {
    body: z.object({
      speciality: z.string().min(3),
      license_number: z.string().min(6),
    }),
  };

  // Validation schema for updating an existing doctor
  update = {
    params: z.object({
      id: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid ObjectId format for doctor ID',
      }),
    }),
    body: z.object({
      speciality: z.string().min(3).optional(),
      license_number: z.string().min(6).optional(),
    }),
  };

  // Validation schema for deleting a doctor
  delete = {
    params: z.object({
      id: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid ObjectId format for doctor ID',
      }),
    }),
  };

  // Validation schema for searching for doctors with specific criteria
  find = {
    query: z.object({
      _id: z
        .string()
        .refine((value) => Types.ObjectId.isValid(value), {
          message: 'Invalid ObjectId format for doctor ID',
        })
        .optional(),
      speciality: z.string().min(3).optional(),
      license_number: z.string().min(6).optional(),
      deleted: z.string().optional(),
    }),
  };
}

export const doctorValidation = new DoctorValidation();
