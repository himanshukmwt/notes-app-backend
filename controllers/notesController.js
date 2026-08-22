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

export const getNotes = async (req, res) => {
    try {
        const notes = await Note.find().sort({ createdAt: -1 });

        return res.status(200).json(notes);

    } catch (err) {
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
};

export const getNote = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);

        if (!note) {
            return res.status(404).json({
                message: "Note not found"
            });
        }

        return res.status(200).json(note);

    } catch (err) {
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
};

export const updateNote = async (req, res) => {
    try {
        const { title, content, category } = req.body;

        const note = await Note.findByIdAndUpdate(
            req.params.id,
            {
                title,
                content,
                category
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!note) {
            return res.status(404).json({
                message: "Note not found"
            });
        }

        return res.status(200).json({
            message: "Note updated successfully",
            note
        });

    } catch (err) {
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
};


export const patchNote = async (req, res) => {
    try {
        const note = await Note.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            {
                new: true,
                runValidators: true
            }
        );

        if (!note) {
            return res.status(404).json({
                message: "Note not found"
            });
        }

        return res.status(200).json({
            message: "Note updated successfully",
            note
        });

    } catch (err) {
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
};

export const deleteNote = async (req, res) => {
    try {
        const note = await Note.findByIdAndDelete(req.params.id);

        if (!note) {
            return res.status(404).json({
                message: "Note not found"
            });
        }

        return res.status(200).json({
            message: "Note deleted successfully"
        });

    } catch (err) {
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
};