import Subject from "../subject/subject.model.js";
import User from "../User/user.model.js";

export const createSubject = async (req, res) => {
    try {
        const data = req.body;
        const subject = await Subject.create(data);

        return res.status(201).json({
            message: "Subject successfully created",
            subject
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error creating the subject",
            error: error.message
        });
    }
};

export const addUserToSubject = async (req, res) => {
    try {
        const { uid } = req.params;
        const { userUid } = req.body;
        const addUser = await Subject.findByIdAndUpdate(uid, { $push: { inscribed: userUid } }, { new: true });
        return res.status(201).json({
            message: "User successfully added to the subject",
            addUser
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error adding user to the subject",
            error: error.message
        });
    }
};

export const updateInfoSubject = async (req, res) => {
    try {
        const { uid } = req.params;
        const { KeyUserUid, newName, newDescription } = req.body;
        const user = await User.findById(KeyUserUid);
        const subject = await Subject.findById(uid);
        if (user.role !== "TEACHER_ROLE") {
            return res.status(403).json({
                success: false,
                message: "Permission denied: Only teachers can update this subject.",
                error: "Permission denied",
                permissions: user.role
            });
        }
        if (!subject.inscribed.includes(KeyUserUid)) {
            return res.status(403).json({
                success: false,
                message: "Permission denied: You are not enrolled in this subject."
            });
        }
        const updateFields = {};
        if (newName) {
            updateFields.name = newName;
        }
        if (newDescription) {
            updateFields.description = newDescription;
        }
        const updateSubject = await Subject.findByIdAndUpdate(uid, updateFields, { new: true });
        return res.status(200).json({
            success: true,
            message: "Subject information updated successfully",
            updateSubject
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error updating the subject information",
            error: error.message
        });
    }
};
