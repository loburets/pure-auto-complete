import React from "react";

import retrieveOptions from './data/retrieveOptions';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            options: [],
        };
    }

    handleInputChange = e => {
        const inputValue = e.target.value

        this.setState({inputValue})
        this.setAutocompleteOptions(inputValue);

    }

    setAutocompleteOptions = async (inputValue) => {
        if (!inputValue) {
            this.setState({options: []});
        }

        const options = await retrieveOptions(inputValue);

        // The input value had been changed since the request was created
        if (this.state.inputValue !== inputValue || inputValue === '') {
            return
        }

        this.setState({options});
    }

    render() {
        const {inputValue, options} = this.state

        return (
            <div className="App">
                <input value={inputValue} onChange={this.handleInputChange}/>
                {!!options.length && options.map(option => {
                    return (
                        <div key={option.id}>
                            {option.name}
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default App;
