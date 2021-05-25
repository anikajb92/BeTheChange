import React, {Component} from 'react'
import './App.css';
import Form from './components/Form'
import Quote from './components/Quote'

class App extends Component {

  state = {
    userQuote: "",
    returnQuote: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    this.setState({userQuote: formData.get('changeInput')})
  }

  handleChange = (event) => {
    this.setState({userQuote: event.target.value})
  }

  render() {
    return (
    <div className="App">
      <Form 
        handleSubmit={this.handleSubmit} 
        userQuote={this.state.userQuote}
        handleChange={this.handleChange}
      />
      <Quote userQuote={this.state.userQuote}/>
    </div>
    )
  }
}  
export default App;
