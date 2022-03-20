const { Schema, model, Types } = require("mongoose");


const ReactionSchema = new Schema({
  // set custom id to avoid confusion with parent comment _id
  ReactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  ReactionBody: {
    type: String,
    required: true,
    length: 1-280
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => dateFormat(createdAtVal),
  },
},
{
  toJSON: {
    getters: true
  }
}
);

const Reaction = model('Reaction', ReactionSchema);

module.exports = Reaction;