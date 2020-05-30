import mc from 'markov-catena'
// or const mc = require('markov-catena')

const generator = new mc.StringGenerator(['hello, world', 'world is mine'])

for (let _ in [...Array(5)]) console.log(generator.generateString({ formatter: mc.formatters.usualSyntax }))
// will generate something like:
//
// 'Hello, world.'
// 'World.'
// 'Hello, world is mine.'
// 'World.'
// 'Hello, world.'