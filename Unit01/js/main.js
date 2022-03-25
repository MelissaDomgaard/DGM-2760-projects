/* old school style */
// document.getElementById('company').innerHTML = "Sally's Bed and Breakfast"


/* adding text to headers (modern approach) */
document.querySelector('#company').innerText = "Molly's Bed and Breakfast"

document.querySelector('header > h2').innerText = "More than meets the eye"


/* adding date */
/* let today = new Date ()
document.write(today.toLocaleDateString())

document.querySelector('#date').innerText = today */

// Note: not sure how to limit the format


/* addding greeting */


let userName = prompt('What is your name?')

/* old style */
// let message = "Hello " + userName + ", welcome to the best lodging in Utah!"

let message = `Hello ${userName}, welcome to the finest lodging in Utah county!`

document.querySelector('#greeting').innerText = message

// modern style




