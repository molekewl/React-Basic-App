import React, { Component } from 'react'
import TextDisplay from './TextDisplay'

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: 'inputText'
    }
  }

  deleteLetter() {
    // take current this.state.inputText
    // delete letter => update State
    // 0 is the beginnig of the string & length - 1 is end
    this.setState({
      inputText: this.state.inputText.substring(0, this.state.inputText.length - 1)
    })
  }

  handleChange(event) {
    // Every component has a setState function
    // you pass in an object that you want to be updated
    this.setState({
      inputText: event.target.value
    })
    // console.log(event.target.value)
  }
  
  render () {
    return (
      <div>
      <input 
      // we dont want to be updating the Dom
      // we want to make changes to the state and have that update state
        type='text'
        placeholder='This is going to be text'
        // we are binding this.state.inputText
        value={this.state.inputText}
        onChange={this.handleChange.bind(this)}
      />
      {/* we need to pass down state for the input to update */}
      <TextDisplay text={this.state.inputText} deleteLetter={this.deleteLetter.bind(this)}/>
      </div>
    )
  }
}

export default TextInput