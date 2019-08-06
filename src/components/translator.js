import React, {Component} from 'react';

export default class Translator extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: "",
            language: "",
        }

        
    }

    render() {
      return (
        <div className='app'>
          <h1>Translate Something!</h1>
          <h2>What would you like to translate?</h2>
          <form>
          <input
                        className="upload-element"
                        type="text"
                        name="text"
                        placeholder="Type Text Here"
                        value={this.state.title}
                        // onChange={this.handleChange}
                    />
            <h2>into...</h2>

            <select 
                className="language-select"
                name="language"
                value={this.state.language}
                // onChange={this.handleChange}
            >
                <option
                    value="language 1">Language 1</option>
            </select>
          </form>
        </div>
      );
    }
  }
  