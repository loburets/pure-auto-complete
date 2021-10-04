import React, {useState, useEffect} from "react";

/**
 * Generated at https://www.json-generator.com/# as
 *
 *  [
 *    '{{repeat(1000, 1000)}}',
 *    {
 *       id: '{{objectId()}}',
 *       name: '{{company()}} {{company()}}'
 *    }
 *  ]
 */
import allPossibleOptions from './data/options.json';
import './App.css';

const optionsLimit = 10

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

    setAutocompleteOptions = (inputValue) => {
        // todo Do something with the delayed response which can be returned later - after previous autocompletes and replace this one
        if (!inputValue) {
            this.setState({options: []});
        }

        // delay imitation
        setTimeout(_ => {
            const optionsToShow = allPossibleOptions
                // todo replace by Regexp to be faster
                .filter(option => option.name.toLowerCase().includes(inputValue.toLowerCase()))
                .slice(0, optionsLimit);

            this.setState({options: optionsToShow});
        }, 1000);
    }

    render() {
        const {inputValue, options} = this.state

        return (
            <div>
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
