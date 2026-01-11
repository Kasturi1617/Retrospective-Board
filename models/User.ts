import mongoose, {Schema, models} from "mongoose";

const UserSchema = new Schema(
    {
        email: {type: String, required: true, unique: true},
        name: String,
        image: String,
    },
    {timestamps: true}
);

export default models.User || mongoose.model("User", UserSchema);