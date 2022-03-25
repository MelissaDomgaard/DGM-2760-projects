document.querySelector('header > h1').innerText = "Inspector Clouseau"
document.querySelector('header > h2').innerText = "I arrest you all in the name of the leahw!"


function reDisplay() {

let windowSizes = `Window size is ${window.innerWidth} pixels wide by ${window.innerHeight} pixels tall`

let offset = `Window offset is ${window.screenX} pixels from the left edge and ${window.screenY} pixels from the top of the display`

let myWindow = document.querySelector('#myWindow').innerText = `${windowSizes} \n ${offset}`
}

reDisplay()

let docTitle = document.title

let docUpdate = document.lastModified

let myDocument = document.querySelector('#myDocument').innerText = `The title of this page is "${docTitle}" \n Las update of this document was ${docUpdate}`




