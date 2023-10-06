import { Document, ObjectId } from 'mongoose';

export interface IMedicalTest {
  test_name: string;
  test_date: Date;
  results: string;
}

export default interface IMedicalRecord extends Document {
  _id?: string | ObjectId;
  patient: string | ObjectId;
  visit_date: Date;
  doctor: string | ObjectId;
  diagnosis: string;
  medications: string[];
  tests: IMedicalTest[];
  deleted?: boolean;
}
