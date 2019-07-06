const express = require('express')
const path = require('path');

const app = express()

//declare folder with static content first (scripts, css, etc.)
app.use(express.static(__dirname))

//instruct server to return 'index.html' for all url equests
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, './index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(3000, function() {
	console.log('All requests are being redirected to /index.html')
	console.log('Listening on port 3000...')
})
