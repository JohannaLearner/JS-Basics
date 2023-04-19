
//coding on 18April2023
//Dan's work

let myVar = "Bananas"

const myAge = 12
if (myAge >= 18) {console.log('You are old enough to vote')}
else {console.log('You are not old enough to vote')}



if (!(myAge <= 0)) {
    if (myAge >= 18) {
        console.log('you are old enough to vote!')
    } else {
        console.log('You are not old enough to vote!')
    }
} else {
    console.log('Pick a real age!')
}

const myName = 'Jerry'

if (myName === 'Dan') {
    console.log(`Hello, ${myName}`)
} else {
    console.log(`I don't know of any "${myName}"`)
}

const user = {
    username: 'mowglixx',
    loggedIn: true,
    email: 'daniel_m@purplebeard.co.uk',
}

if (user.loggedIn) {
    console.log(`Hello, ${user.username}`)
}

// Falsy Values
// let x = ''
// let x = 0
// let x = false
// let x = null
// let x = NaN

// truthy values
// let x = ' '
// let x = 1
// let x = true

let xY = false

if (xY == 0 ) {
    console.log("well obviously")
} else {
    console.log('really')
}

console.log(5 < 6)

// Modulus Operator

const modDemo = 3 % 2

console.log(modDemo)


//w3c else example

let time = 10

if (time != 10) {
console.log ("You are doomed")
} else 
console.log ("The world is saved")
 

//if (time < 10) {
  //  console.log("Good morning")
 // } else if (time < 20) {
 //   console.log("Good day")
 // } else {
 //   console.log("Good evening")
 // }
 let x = "hello"

 console.log(x != "hello")

