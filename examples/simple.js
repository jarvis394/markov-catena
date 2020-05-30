import mc from 'markov-catena'
// or const mc = require('markov-catena')

const generator = new mc.StringGenerator(['hello, world', 'world is mine'])

for (let _ in [...Array(5)]) console.log(generator.generateString())
// will generate something like:
//
// 'hello, world'
// 'world'
// 'hello, world is mine'
// 'world'
// 'hello, world'