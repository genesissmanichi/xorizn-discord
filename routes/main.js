__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.redirect('https://github.com/Xorizn/xorizn-downloads#readme')
})
router.get('/invite', (req, res) => {
    res.redirect('https://discord.gg/XsFYKRZTqA')
})
module.exports = router
