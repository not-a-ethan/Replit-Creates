const nameInput = prompt("What is your name?")
const username = prompt("What is your username")
const text = document.getElementsByClassName('text')

console.log(nameInput)
console.log(username)

text[0].innerHTML = `Hi ${nameInput}. I hope you are having a good day. I bet your user name is ${username}. Did I guess right?`;