const process = require('process')

console.log('Digite seu texto: ')
process.stdin.on('data', (keyboard) => {
    process.stdout.write(`Texto do usuário: ${keyboard}`)
    process.exit()
})