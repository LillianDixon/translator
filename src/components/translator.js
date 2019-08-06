import React, {Component} from 'react';

export default class Translator extends Component {
    constructor(props){
        super(props)

        this.state = {
            text: "",
            language: "pirate",
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state.language)
    }

    handleSubmit(event){
        event.preventDefault();

        let text = this.state.text
        let language = this.state.language

        if(language === "pirate"){
            fetch('https://api.funtranslations.com/translate/pirate',{
                method: 'post',
                headers: {
                    "Content-Type" : "application/json"
                }, body: JSON.stringify({text, language})
            })
            .then(response => {return response.json();})
            .then(responseData=>{console.log(responseData)
                return responseData})
            .catch(err => {
                console.log("Retch error on Pirate language" + err)
            })
        } else {console.log("different language chosen")}
    }

    render() {
      return (
        <div className='app'>
          <h1>Translate Something!</h1>
          <h2>What would you like to translate?</h2>
          <form onSubmit={this.handleSubmit}>
          <input
                        className="upload-element"
                        type="text"
                        name="text"
                        placeholder="Type Text Here"
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
            <h2>into...</h2>

            <select 
                className="language-select"
                name="language"
                value={this.state.language}
                onChange={this.handleChange}
            >
                <option
                    value="pirate">Pirate</option>
            </select>
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    }
  }
  