import { Schema, model } from 'mongoose';
import IMedicalRecord, { IMedicalTest } from '../../interfaces/medical_record.interface';
import autopopulate from 'mongoose-autopopulate';
import { DATABASES } from '../../constants';

const medicalTestSchema = new Schema<IMedicalTest>({
  test_name: String,
  test_date: Date,
  results: String,
});

const medicalRecordSchema = new Schema<IMedicalRecord>(
  {
    patient: {
      type: Schema.Types.ObjectId,
      ref: DATABASES.PATIENT,
      autopopulate: true,
    },
    doctor: {
      type: Schema.Types.ObjectId,
      ref: DATABASES.DOCTOR,
      autopopulate: true,
    },
    diagnosis: String,
    medications: [String],
    tests: [medicalTestSchema],
    deleted: {
      type: Schema.Types.Boolean,
      required: true,
      select: false,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

medicalRecordSchema.plugin(autopopulate);

const MedicalRecordModel = model<IMedicalRecord>(DATABASES.MEDICAL_RECORD, medicalRecordSchema);

export default MedicalRecordModel;
