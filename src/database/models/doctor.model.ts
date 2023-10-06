import { Schema, model } from 'mongoose';
import autopopulate from 'mongoose-autopopulate';
import IDoctor from '../../interfaces/doctor.interface';
import { DATABASES } from '../../constants';

// Extend the User schema to include Doctor-specific fields
const doctorSchema = new Schema<IDoctor>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: DATABASES.USER,
      required: true,
      autopopulate: true,
    },
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
      required: false,
      select: false,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

doctorSchema.plugin(autopopulate);

// Create the Doctor model by extending the User model
const DoctorModel = model<IDoctor>(DATABASES.DOCTOR, doctorSchema);

export default DoctorModel;
