const express = require('express')
const router = express.Router()

router.get('/newtime', function (req, res) {
   res.render('newtime')
})

module.exports = router