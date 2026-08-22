import Note from "../models/notes.js";

export const createNote = async (req, res,next) => {
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
        next(err);
    }
};

export const getNotes = async (req, res, next) => {
    try {
        const notes = await Note.find().sort({ createdAt: -1 });

        return res.status(200).json(notes);

    } catch (err) {
        next(err);
    }
};

export const getNote = async (req, res, next) => {
    try {
        const note = await Note.findById(req.params.id);

        if (!note) {
            return res.status(404).json({
                message: "Note not found"
            });
        }

        return res.status(200).json(note);

    } catch (err) {
        next(err);
    }
};

export const updateNote = async (req, res, next) => {
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
                returnDocument: "after",
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
        next(err);
    }
};


export const patchNote = async (req, res, next) => {
    try {
        const note = await Note.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            {
                returnDocument: "after",
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
        next(err);
    }
};

export const deleteNote = async (req, res, next) => {
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
        next(err);
    }
};