import Note from "../models/notes.js";

export const createNote = async (req, res) => {
    try {
        const { title, content, category } = req.body;

        if (!title || !content) {
            return res.status(400).json({
                message: "Title and content are required"
            });
        }

        const note = await Note.create({
            title,
            content,
            category
        });

        return res.status(201).json({
            message: "Note created successfully",
            note
        });

    } catch (err) {
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
};