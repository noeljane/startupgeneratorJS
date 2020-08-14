import React, { Component} from 'react'


export default class App extends Component {
  state = {
    text: ''
  }
  componentDidMount() {
    fetch(`http://localhost:3001/`, {
      method: "GET", 
      headers: {
        "Content-Type" : "application/json",
        
      },
    })
    .then(resp => resp.json())
    .then(data => {
       console.log(data)
       this.setState({
         text: data.text
       })
    })
    .catch(error => {
      console.log(error)
    })
  }
   
  render() {
    return (
      <h1>{this.state.text}</h1>
    )
  }
}
