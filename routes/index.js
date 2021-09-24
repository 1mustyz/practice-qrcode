var express = require('express');
var router = express.Router();
const QRCode = require('qrcode')

const opts = {
  errorCorrectionLevel: 'H',
  type: 'terminal',
  quality: 0.95,
  margin: 1,
  color: {
   dark: '#208698',
   light: '#FFF',
  },
 }
 
 /* GET home page. */
 router.get('/', async function(req, res, next) {
  const qrImage = await QRCode.toString('google.com', opts)
  console.log(qrImage)
  res.json("hekko");
});

module.exports = router;
