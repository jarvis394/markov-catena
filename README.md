# markov-catena
String generator based on Markov process  
  
## Installation  
```
npm install markov-catena
```
  
## Simple example  
```js  
import mс from 'markov-catena'
// or const mс = require('markov-catena')

const generator = new mс.StringGenerator(['hello, world', 'world is mine'])

for (let _ in [...Array(5)]) console.log(generator.generateString())
// will generate something like:
//
// 'hello, world'
// 'world'
// 'hello, world is mine'
// 'world'
// 'hello, world' 
```  
More examples can be found [here](https://github.com/jarvis394/markov-catena/tree/master/examples)

## Features  
* Easy to use
* Result validating (~~also built-in validators~~ **TODO**).
* Result formatting (also built-in formatters). [Example](https://github.com/jarvis394/markov-catena/blob/master/examples/formatters.js)