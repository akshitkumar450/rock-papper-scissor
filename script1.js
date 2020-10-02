let userscore = 0
let compscore = 0
let maxscore = 10;

let socre1 = document.querySelector('#score1')
let socre2 = document.querySelector('#score2')
let h1 = document.querySelector('h1')
let h2 = document.querySelector('h2')

let rockBtn = document.querySelector('#r')
let paperBtn = document.querySelector('#p')
let scissorsBtn = document.querySelector('#s')
let resetBtn = document.querySelector('#reset')
let playBtn = document.querySelector('#play')

function computerRandom() {
    const emojis = ['r', 'p', 's']
    return emojis[Math.floor(Math.random() * 3)]
}

function compWin(){
    if (compscore !== maxscore) {
        compscore++;
        socre2.textContent = compscore
        if(compscore===maxscore){
            // alert(`game end . comp wins`)
            h2.innerText='GAME END'
            setTimeout(()=>{
                alert('game ends computer wins')
                reset()
            },500)
        } 
    }
}

function userWin(){
    if (userscore !== maxscore) {
        userscore++
        socre1.textContent = userscore
        if(userscore===maxscore) {
            // alert(`game end . user win`)
            h2.innerText='GAME END'
            setTimeout(()=>{
                alert('game ends User wins')
                reset()
            },500)
        }
        h1.textContent=`saddsdas`
    }
}

function game(userchoice) {
    var compChoice = computerRandom()
    if (userchoice == 'r' && compChoice == 'p') {
        compWin()
        h1.innerHTML='Rock 🥊<sub><small> User</small></sub> Paper 📄<sub> <small>comp</small></sub>'
    }
    else if (userchoice == 'r' && compChoice == 's') {
        userWin()
        h1.innerHTML='Rock 🥊<sub><small> User</small></sub> scissors ✂<sub> <small>comp</small></sub>'

    }
    else if (userchoice == 'p' && compChoice == 's') {
        compWin()
        h1.innerHTML='paper 📄 <sub> <small>User </small></sub> scissors ✂ <sub><small>comp</small></sub>'
    } 
    else if (userchoice == 'p' && compChoice == 'r') {
        userWin()
        h1.innerHTML='paper 📄<sub> <small>User </small></sub> Rock 🥊 <sub><small>comp</small></sub>'

    }
    else if (userchoice == 's' && compChoice == 'p') {
        userWin()
        h1.innerHTML='scissors ✂ <sub> <small>User </small></sub>  paper 📄<sub><small>comp</small></sub>'
    }
    else if (userchoice == 's' && compChoice == 'r') {
        compWin()
        h1.innerHTML='scissors ✂ <sub> <small>User </small></sub>  rock 🥊<sub><small>comp</small></sub>'

    }
    else h1.innerHTML=`it's a drawww`
}

function play() {
    rockBtn.addEventListener('click', () => {
        game('r')
    })
    paperBtn.addEventListener('click', () => {
        game('p')
    })
    scissorsBtn.addEventListener('click', () => {
        game('s')
    })
}


function reset(){
    compscore=0;
    userscore=0;
    socre1.textContent=0
    socre2.textContent=0
    console.log('rese clickd')
}

playBtn.onclick=function(){
        play()
}

resetBtn.onclick=function(){
    reset()
    h1.textContent='paper covers rock you wins';
}