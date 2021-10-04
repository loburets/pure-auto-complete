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
import allPossibleOptions from './options.json';

const retrieveOptions = (value, limit = 15) => {
    return new Promise(resolve => {
        setTimeout(_ => {
            const optionsToShow = allPossibleOptions
                // todo replace by Regexp to be faster
                .filter(option => option.name.toLowerCase().includes(value.toLowerCase()))
                .slice(0, limit);

            resolve(optionsToShow)
        }, 1000);
    })
}

export default retrieveOptions
