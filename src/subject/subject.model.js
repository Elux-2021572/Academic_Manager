import {Schema, model} from "mongoose";

const subjectsSchema = Schema({
    name: {
        type: String,
        required: [true, "Name is requiered"],
        maxLength: [25, "Name cannot exceed 25 characteres"],
        unique: true
    },
    inscribed: {
        type: Array,
        default: []
    },
    description:{
        type: String,
        required: true,
        maxLength: [64, "description cannot exceed 64 characteres"]
    },
    status: {
        type: Boolean,
        default: true,
    },
},
{
    versionKey: false,
    timeStamps: true
});

subjectsSchema.methods.toJSON = function(){
    const {_v, _id, ...subjects} = this.toObject()
    subjects.uid = _id;
    return subjects;
};

export default model("Subjects", subjectsSchema);
