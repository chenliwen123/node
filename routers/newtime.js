const express = require('express')
const router = express.Router()

router.get('/newtime', function (req, res) {
    res.send('hello newtime')
})

module.exports = router