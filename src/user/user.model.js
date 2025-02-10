import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        maxLength: [25, "Name cannot exceed 25 characters"]
    },
    surname: {
        type: String,
        required: [true, "Surname is required"],
        maxLength: [25, "Surname cannot exceed 25 characters"]
    },
    profilePicture: {
        type: String
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    identification: {
        type: String,
        minLength: 8,
        maxLength: 8,
        unique: true,
        sparse: true  
    },
    phone: {
        type: String,
        minLength: 8,
        maxLength: 8,
        required: true,
    },
    subjects: {
        type: [Schema.Types.ObjectId], 
        ref: "Subjects",
        default: null
    },
    role: {
        type: String,
        enum: ["STUDENT_ROLE", "TEACHER_ROLE"],
        default: "STUDENT_ROLE"
    },
    status: {
        type: Boolean,
        default: true,
    }
}, 
{
    versionKey: false,
    timestamps: true
});

userSchema.methods.toJSON = function(){
    const {_v, password, _id, ...user} = this.toObject()
    user.uid = _id;
    return user;
};

export default model("User", userSchema);