const fs = require('fs')

fs.writeFile('test.txt', 'Olá NodeJS', err => console.log(err)) // Sobrescreve o arquivo

fs.writeFile('test2.txt', 'Segundo arquivo', err => console.log(err))

fs.appendFile('test.txt', '\nAdicionando texto', err => console.log(err)) // Adiciona ao arquivo

fs.rename('test.txt', 'test3.txt', err => console.log(err)) // Renomeia o arquivo

fs.unlink('test2.txt', err => console.log(err)) // Deleta o arquivo

console.log(__dirname)