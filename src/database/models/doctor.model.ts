import { Schema, model, Document } from 'mongoose';
import IDoctor from '../../interfaces/doctor.interface';

// Extend the User schema to include Doctor-specific fields
const doctorSchema = new Schema<IDoctor>(
  {
    speciality: {
      type: String,
      required: true,
    },
    license_number: {
      type: String,
      required: true,
    },
    deleted: {
      type: Boolean,
      required: true,
      select: false,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

// Create the Doctor model by extending the User model
const DoctorModel = model<IDoctor>('Doctor', doctorSchema, 'users');

export default DoctorModel;
