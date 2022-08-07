let confermation;

if (localStorage.getItem('cookies') == 0) {
  alert('It looks like you have accepted cookies in the past. Good job! You can use the site!')
} else if (localStorage.getItem('cookies') == 1) {
  alert("Looks like you have not accepted cookies the past. Now accept them!")
  const cookies = confirm('Do you accept cookies By accepting these cookies we will use them to take all your info like meta and say we keep it privet when we relly sell it to advertisers. You also grant us the right to take your cycles. We will also use cookies not to feed you and out family but sell them on the blackmarket for $9999999999 and give you nothing')

if (cookies) {
  confermation = confirm("Are you sure you want to accept all the cookies?")
} else {
  confermation = confirm("Are you sure do dont want to accept the cookies?")
}

let aBoolean;

if (confermation == true) {
    confirm(`Are you sure you want to accept`)
    aBoolean = true

  localStorage.setItem('cookies', 0)
} else {
    confirm(`Are you sure you dont want to accept`)
    aBoolean = false
  
  localStorage.setItem('cookies', 1)
}
for (i = 1; i <= 100; i++) {
  if (aBoolean == true) {
    confirm(`Are you sure you want to accept ${i}x. (This does end at ~100)`)
  } else {
    confirm(`Are you sure you dont want to accept ${i}x. (This does end at ~100)`)
  }
  
}

if (!aBoolean) {
  alert(`It looks like you did not want to accept the cookies. No cycles for you then.`)
} else {
  alert(`It looks like you accepted it and now I own your cycles`)
}
} else {
  const cookies = confirm('Do you accept cookies By accepting these cookies we will use them to take all your info like meta and say we keep it privet when we relly sell it to advertisers. You also grant us the right to take your cycles. We will also use cookies not to feed you and out family but sell them on the blackmarket for $9999999999 and give you nothing')

if (cookies) {
  confermation = confirm("Are you sure you want to accept all the cookies?")
} else {
  confermation = confirm("Are you sure do dont want to accept the cookies?")
}

let aBoolean;

if (confermation == true) {
    confirm(`Are you sure you want to accept`)
    aBoolean = true

  localStorage.setItem('cookies', 0)
} else {
    confirm(`Are you sure you dont want to accept`)
    aBoolean = false
  
  localStorage.setItem('cookies', 1)
}
for (i = 1; i <= 100; i++) {
  if (aBoolean == true) {
    confirm(`Are you sure you want to accept ${i}x. (This does end at ~100)`)
  } else {
    confirm(`Are you sure you dont want to accept ${i}x. (This does end at ~100)`)
  }
  
}

if (!aBoolean) {
  alert(`It looks like you did not want to accept the cookies. No cycles for you then.`)
} else {
  alert(`It looks like you accepted it and now I own your cycles`)
}
}