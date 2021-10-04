import { useState, useEffect } from "react";

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

function App() {
  const optionsLimit = 10
  const [inputValue, setInputValue] = useState('')
  const [options, setOptions] = useState([])
  const handleInputChange = e => {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    // todo Do something with the delayed response which can be returned later after previous autocompletes and replace this one
    if (!inputValue) {
      setOptions([])
      return
    }

    // delay imitation
    setTimeout(_ => {
      const optionsToShow = allPossibleOptions
          // todo replace by Regexp to be faster
          .filter(option => option.name.toLowerCase().includes(inputValue.toLowerCase()))
          .slice(0, optionsLimit)

      setOptions(optionsToShow)
    }, 1000)
  }, [inputValue]);

  return (
    <div>
      <input value={inputValue} onChange={handleInputChange}/>
      { !!options.length && options.map(option => {
        return (
          <div key={option.id}>
            { option.name }
          </div>
        )
      })}
    </div>
  );
}

export default App;
