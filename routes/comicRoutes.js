const express = require('express');
const {
    createComic,
    updateComic,
    deleteComic,
    getComicList,
    getComicDetails
} = require('../controllers/comicController');

const router = express.Router();

router.post('/comics', createComic);       // Create a new comic
router.put('/comics/:id', updateComic);    // Edit an existing comic
router.delete('/comics/:id', deleteComic); // Delete a comic
router.get('/comics', getComicList);       // Get list of all comics
router.get('/comics/:id', getComicDetails);// Get details of a specific comic

module.exports = router;
