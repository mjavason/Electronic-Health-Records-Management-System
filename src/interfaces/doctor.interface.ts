import { ObjectId, Document } from 'mongoose';

// Define the Doctor-specific fields
export default interface IDoctor extends Document {
  id?: string | ObjectId;
  speciality: string;
  license_number: string;
  deleted?: boolean;
}
