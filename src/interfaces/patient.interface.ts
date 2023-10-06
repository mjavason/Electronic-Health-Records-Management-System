import { ObjectId, Document } from 'mongoose';

export default interface Patient extends Document {
  id?: string | ObjectId;
  user: string | ObjectId;
  pt_number: string;
  birth_date: Date;
  phone_number: string;
  address: string;
  deleted?: boolean;
}
