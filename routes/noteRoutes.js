import express from "express";

import {
    createNote,
    getNotes,
    getNote,
    updateNote,
    patchNote,
    deleteNote
} from "../controllers/noteController.js";

const router = express.Router();

router.post("/", createNote);

router.get("/", getNotes);

router.get("/:id", getNote);

router.put("/:id", updateNote);

router.patch("/:id", patchNote);

router.delete("/:id", deleteNote);

export default router;