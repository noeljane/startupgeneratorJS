const 
  express = require('express'), 
  path = require('path')
  app = express(),
  port = process.env.PORT || 8080
  homeCtrl = require('./controllers/test.js')

  app.use(favicon(__dirname + '/public/favicon.png'))

  app.use(express.static(__dirname))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
  })

// app.get('/', homeCtrl.get)

// app.listen(3000, (err) => {
//   console.log(err || "Server Running on port 3000")
// })