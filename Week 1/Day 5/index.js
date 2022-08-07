const characterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '{', '[', '}', ']', ':', ';', '"', '\'', '<', '>', ',', '.', '?', '/', '\\', '|', '~', '`', ' ']

const ranNumber = Math.floor(Math.random() * characterArray.length)

let output = '';
let ranNum;

for (i = 0; i <= ranNumber; i++) {
  ranNum = Math.floor(Math.random() * characterArray.length)
  output += characterArray[ranNum]
}

console.log(output)