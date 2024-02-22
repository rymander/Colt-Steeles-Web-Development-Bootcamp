const form = document.querySelector('form')
const winningScore = document.querySelector('#winningScore')
const currentScore = document.querySelector('#score')
const leftSide = document.querySelector('#lSide')
const rightSide = document.querySelector('#rSide')
const reset = document.querySelector('#reset')
const firstTo =document.querySelector('#firstTo')


let lSideScore = 0
let rSideScore = 0

form.addEventListener('submit', function(e){
    e.preventDefault()
})
winningScore.addEventListener('submit', function(e){
    e.preventDefault()
})

leftSide.addEventListener('click', function(){
    if (winningScore.value === ''){
        alert('Please set a winning score')
    } else{
    lSideScore += 1
    currentScore.innerText = `Score: Left Side: ${lSideScore} Right Side: ${rSideScore}`
    gameOver(lSideScore, rSideScore)}
})

rightSide.addEventListener('click', function(){
    if (winningScore.value === ''){
        alert('Please set a winning score')
    } else{
    rSideScore += 1
    currentScore.innerText = `Score: Left Side: ${lSideScore} Right Side: ${rSideScore}`
    gameOver(lSideScore, rSideScore)}
})



reset.addEventListener('click', function(e){

    currentScore.innerText = 'Score: 0 to 0'
    lSideScore = 0
    rSideScore = 0
    leftSide.disabled = false
    rightSide.disabled = false
})

function gameOver(lSideScore, rSideScore){
    if (lSideScore == parseInt(winningScore.value) || rSideScore == parseInt(winningScore.value) ){
       
        if(lSideScore > rSideScore){
            currentScore.innerText = `Left side wins with ${lSideScore} points to ${rSideScore}!`
            alert('game over!')
        } else if (rSideScore > lSideScore){
            currentScore.innerText = `Right side wins with ${rSideScore} points to ${lSideScore}`
            alert('game over!')
        } leftSide.disabled = true
        rightSide.disabled = true
    } 
}

