const { getCharById } = require('../controllers/getCharById')
const { login } = require('../controllers/login')
const { postFav, deleteFav } = require('../controllers/handleFavorites')

const express = require('express');
const router = express.Router();

router.get('/character/:id', (req, res) => {
    getCharById(req, res)
})

router.get('/login', (req, res) => {
    login(req, res)
})

router.post('/fav', (req, res) => {
    postFav(req, res)
})

router.delete('/fav/:id', (req, res) => {
    deleteFav(req, res)
})

module.exports = router;