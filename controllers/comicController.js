const Comic = require('../models/comicModel');

// Create a Comic Book
exports.createComic = async (req, res) => {
    try {
        const comic = new Comic(req.body);
        await comic.save();
        res.status(201).json(comic);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update a Comic Book
exports.updateComic = async (req, res) => {
    try {
        const comic = await Comic.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!comic) return res.status(404).json({ error: 'Comic not found' });
        res.status(200).json(comic);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a Comic Book
exports.deleteComic = async (req, res) => {
    try {
        const comic = await Comic.findByIdAndDelete(req.params.id);
        if (!comic) return res.status(404).json({ error: 'Comic not found' });
        res.status(200).json({ message: 'Comic deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Fetch all Comics
exports.getComicList = async (req, res) => {
    try {
        const comics = await Comic.find();
        res.status(200).json(comics);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get a specific Comic Book by ID
exports.getComicDetails = async (req, res) => {
    try {
        const comic = await Comic.findById(req.params.id);
        if (!comic) return res.status(404).json({ error: 'Comic not found' });
        res.status(200).json(comic);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
