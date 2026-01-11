import mongoose, { Schema, models } from "mongoose";

/**
 * Each column inside a retro
 */
const ColumnSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      required: true,
    },
    order: {
      type: Number,
      required: true,
    },

    cards: [
      {
        text: String,
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { _id: false }
);

const RetroSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    // // Which template user started from
    // templateId: {
    //   type: Schema.Types.ObjectId, // e.g. "DAKI", "START_STOP_CONTINUE"
    //   required: true,
    // },

    // Owner of this retro
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    columns: {
      type: [ColumnSchema],
      default: [],
    },
  },
  {
    timestamps: true, // creates createdAt & updatedAt
  }
);

export default models.Retro || mongoose.model("Retro", RetroSchema);
// The mongoose.models.User || mongoose.model('User', UserSchema) pattern prevents model recompilation errors during hot reloading in development.