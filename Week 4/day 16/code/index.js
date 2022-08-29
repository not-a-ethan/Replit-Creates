const vars = {}

const keywords = {
  // Every keyword is it's binary counterpart, without the 0s. I've rushed this obviously - so expect more keywords to come never!
  '111111111111111': (args) => {
    // PRINT
    console.log(args.join(' '))
  },
  '1111111111': (args) => {
    // ASK
    let v = args.shift();

    vars[v] = prompt(args.length ? args.join(' ') + ' ' : '')
  },
  '111111111111111111111111': (args) => {
    // PRINTVAR
    console.log(vars[args[0]])
  }
}

const fs = require('fs')
const lines = fs.readFileSync('./one.one').toString().split('\n')

for (let line of lines) {
  let args = line.split(' ')
  let cmd = args.shift();

  if (keywords[cmd]) keywords[cmd](args)
}