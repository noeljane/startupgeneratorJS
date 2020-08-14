const 
  express = require('express'), 
  cors = require('cors')
  path = require('path'),
  app = express(),
  PORT = process.env.PORT || 3001
  homeCtrl = require('./controllers/test.js')

  //Middleware
  app.use(cors())

  //Use the client build folder
  //TODO: Decide if you need this or not
  // app.use(express.static(__dirname))

  app.get('/', homeCtrl.get)

  //Wildcard to catch all random routes
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
  })


app.listen(PORT, (err) => {
  console.log(err || `Server Running on port ${PORT}`)
})