import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-async-await';

const { Schema } = mongoose;

const schema = new Schema(
  {
    ip: {
      type: String,
      required: true,
    },
    buttonType: {
      type: String,
      required: true,
    },
    log: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

schema.plugin(mongoosePaginate);

export default mongoose.model('StopWatch', schema);
