const input = prompt('Ask me if this is Replit')
const regex1 = 'Repl[i|1]t/i'
const regex2 = 'replt.[i|1]t/i'
  
if (input.match(regex1) || input.match(regex2)){
  console.log('This is regex')
}