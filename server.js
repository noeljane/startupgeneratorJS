const 
  express = require('express'), 
  path = require('path'),
  app = express(),
  port = process.env.PORT || 8080
  homeCtrl = require('./controllers/test.js')

  // app.use(favicon(__dirname + '/public/favicon.png'))

  //Use the client build folder
  app.use(express.static(__dirname))


  //Wildcard to catch all random routes
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
  })

app.get('/', homeCtrl.get)

app.listen(PORT, (err) => {
  console.log(err || `Server Running on port ${PORT}`)
})