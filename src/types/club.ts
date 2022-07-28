import { Document } from 'mongoose';

export interface Club extends Document {
  name: string;
  image: string;
}
