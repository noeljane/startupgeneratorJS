helloObject = {
  title: "bananas", 
  text: "hello"
}
module.exports = {

  get: (request, response) => {
    response.send(helloObject)
  }
}