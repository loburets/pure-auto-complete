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
    const optionsToShow = allPossibleOptions
        // todo replace by Regexp to be faster
        .filter(option => option.name.toLowerCase().includes(inputValue.toLowerCase()))
        .slice(0, optionsLimit)

    setOptions(optionsToShow)
  }, [inputValue]);

  return (
    <div>
      <input value={inputValue} onChange={handleInputChange}/>
      { !!options.length && options.map(option => {
        return (
          <div>
            { option.name }
          </div>
        )
      })}
    </div>
  );
}

export default App;
