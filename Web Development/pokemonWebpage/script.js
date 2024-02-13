for (let i = 1; i < 252; i++){
    let newImg = document.createElement('img')
newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
newImg.setAttribute('class', 'sprite')
let body = document.querySelector('body')
body.appendChild(newImg)

}

