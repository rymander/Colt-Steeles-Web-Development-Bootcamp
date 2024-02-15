const container = document.querySelector('#container')

for (let i = 1; i < 252; i++){
    let newImg = document.createElement('img')
    const newDiv = document.createElement('div')
    const pokenum = document.createElement('span')
    pokenum.innerText = `#${i}`
newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
newDiv.classList.add('pokemon')
newImg.classList.add('sprite')
newDiv.appendChild(newImg)
newDiv.appendChild(pokenum)
container.appendChild(newDiv)
}

