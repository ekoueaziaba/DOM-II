/* eslint-disable no-unused-vars */
import './less/index.less'

// Your code goes here!

//#1 mouseover
const logoHeader = document.querySelector('.logo-heading')
logoHeader.addEventListener('mouseover', e =>{
    e.target.textContent = 'Get Yo Ass On The Bus'
})
logoHeader.addEventListener('mouseout', e =>{
    e.target.textContent = 'Fun Bus'
})

//#2 loadup
window.addEventListener('load', event =>{
    alert("All aboard Ekoue's Fun bus. Click OK to continue")
})

//#3 transform via 2x Click
/////////////////////////////////////////////
const bus = document.querySelector('.intro img')
bus.addEventListener('dblclick', event =>{
    bus.style.transform = 'scaleX(-1)'
    bus.style.transition = '1s'
})
///////////////////////////////////////////////

//#4 scale via wheel
const map = document.querySelector(".img-content img")
let mapScale = 1
map.addEventListener('wheel', event=>{
    event.preventDefault();
    mapScale += event.deltaY * -0.01
    mapScale = Math.min(Math.max(.5, mapScale),1.5)
    map.style.transform = `scale(${mapScale},${mapScale})`
    map.style.transition = '.1s'
})

//#5 focus via click
const navA = document.querySelectorAll('nav a')
navA.forEach(a => a.addEventListener("click", event => {
    logoHeader.focus()
    logoHeader.textContent = 'Refresh the page...'
}))

//#6 keypress via ESC
window.addEventListener('keydown', event=>{
    if(event.key === 'Escape'){
        alert('Sorry You can\'t escape, Refresh The Page...')
    }
})

//#7 Select via inputbox, create inputbox element, append to content box
const text = document.querySelector('.text-content')
const box = document.createElement('input')
const inputBox = document.createElement('p')
inputBox.textContent = 'Testing'
box.value = 'Send us a message'
text.appendChild(box)
text.appendChild(inputBox)
text.addEventListener('select', e=>{
    const selection = e.target.value.substring(e.target.selectionStart, e.target.selectionEnd)
    inputBox.textContent = `You have selected ${selection}`
})


//#8 Scroll Fun Bus to limit
document.addEventListener('scroll', e=>{
    let y = window.scrollY *.25
    y = Math.min(Math.max(0,y),300)
    logoHeader.style.transform = `translateX(${y}px)`
})

//#9 Resize, console.log
window.onresize = event => {
    console.log(window.innerHeight, window.innerWidth)
}

//#10 Mouse click x1
const introP = document.querySelector('.intro p')
const press = document.createElement('button')
press.textContent = 'Click Here To Win $1000 Amazon Gift Card'
introP.appendChild(press)
press.addEventListener('click', e=>{
    const home = document.querySelector('.home')
    home.style.backgroundColor = 'green'
    home.style.transition = '.5s'
})

const revert = document.createElement('button')
revert.textContent = 'TRY AGAIN'
introP.appendChild(revert)
revert.addEventListener('click', e=>{
    const home = document.querySelector('.home')
    home.style.backgroundColor = 'white'
    home.style.transition = '.5s'
})