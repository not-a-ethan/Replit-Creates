const animalsC = ['human', 'creature', 'dragon']
const animalsV = ['insect']
const activities = ['programming', 'sports', 'video games', 'dancing']
const times = ['30 min', ' 1 hour', '2 hours', '5 hours', '12 hours', '1 full day']

function story() {
  let sentence

  if (Math.random() > .5) {
    sentence = 'Once apon a time ther was a ' + animalsC[Math.floor(Math.random() * 3)]
  } else {
    sentence = 'Once apon a time ther was an ' + animalsV[Math.floor(Math.random())]
  }

  sentence += ' And they loved ' + activities[Math.floor(Math.random() * 4)] + '.'

  sentence += ' They spent a whole ' + times[Math.floor(Math.random() * 6)] + ' on it.'

  sentence += '\n The end'
  return sentence
}

console.log(story())