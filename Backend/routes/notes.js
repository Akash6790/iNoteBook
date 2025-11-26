// Backend/routes/notes.js
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator');

const Notes = require('../models/Notes');
const fetchuser = require('../middleware/fetchuser');

// Add note - POST /api/notes/addnote
router.post(
  '/addnote',
  fetchuser,
  [
    body('title', 'Title must be at least 3 characters').isLength({ min: 3 }),
    body('description', 'Description must be at least 5 characters').isLength({ min: 5 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
      const { title, description, tag } = req.body;
      const note = await Notes.create({
        user: req.user.id,
        title,
        description,
        tag
      });
      return res.status(201).json({ success: true, note });
    } catch (err) {
      console.error('Add note error:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
);

// Fetch all notes - GET /api/notes/fetchallnotes
router.get('/fetchallnotes', fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id }).select('-__v');
    return res.json({ success: true, notes });
  } catch (err) {
    console.error('Fetch notes error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Update note - PUT /api/notes/updatenote/:id
router.put(
  '/updatenote/:id',
  fetchuser,
  [
    body('title').optional().isLength({ min: 3 }).withMessage('Title must be at least 3 characters'),
    body('description').optional().isLength({ min: 5 }).withMessage('Description must be at least 5 characters')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
      const { title, description, tag } = req.body || {};
      const noteId = req.params.id;

      if (!mongoose.isValidObjectId(noteId)) {
        return res.status(400).json({ error: 'Invalid note id' });
      }

      // Ensure note exists and belongs to user
      const note = await Notes.findOne({ _id: noteId, user: req.user.id });
      if (!note) return res.status(404).json({ error: 'Note not found' });

      const updateFields = {};
      if (title !== undefined) updateFields.title = title;
      if (description !== undefined) updateFields.description = description;
      if (tag !== undefined) updateFields.tag = tag;

      if (Object.keys(updateFields).length === 0) {
        return res.status(400).json({ error: 'No fields to update' });
      }

      const updatedNote = await Notes.findByIdAndUpdate(noteId, { $set: updateFields }, { new: true }).select('-__v');
      return res.json({ success: true, note: updatedNote });
    } catch (err) {
      console.error('Update note error:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
);

// Delete note - DELETE /api/notes/delete/:id
router.delete('/delete/:id', fetchuser, async (req, res) => {
  try {
    const noteId = req.params.id;

    if (!mongoose.isValidObjectId(noteId)) {
      return res.status(400).json({ error: 'Invalid note id' });
    }

    const deletedNote = await Notes.findOneAndDelete({ _id: noteId, user: req.user.id });
    if (!deletedNote) return res.status(404).json({ error: 'Note not found' });

    return res.json({ success: true, note: deletedNote });
  } catch (err) {
    console.error('Delete note error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
