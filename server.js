const 
  express = require('express'), 
  app = express(),
  port = 3000
  homeCtrl = require('./controllers/test.js')


app.get('/', homeCtrl.get)

app.listen(3000, (err) => {
  console.log(err || "Server Running on port 3000")
})