let userscore = 0
let compscore = 0

let score1 = document.querySelector('#score1')
let score2 = document.querySelector('#score2')
let h1 = document.querySelector('h1')
let rockBtn = document.querySelector('#r')
let paperBtn = document.querySelector('#p')
let scissorsBtn = document.querySelector('#s')
let resetBtn = document.querySelector('#reset')
let playBtn = document.querySelector('#play')

function computerRandom() {
    const emojis = ['r', 'p', 's']
    return emojis[Math.floor(Math.random() * 3)]
}

function convert_to_word(choice) {
    if (choice === 'r') {
        return 'Rock'
    }
    else if (choice === 's') {
        return 'scissors'
    }
    else return 'paper'
}

function wins(userchoice, compChoice) {
    console.log(userchoice,compChoice)
    userscore++;
    let smallUser = 'user'.fontsize(3).sub()
    let smallComp = 'comp'.fontsize(3).sub()
    score1.textContent = userscore;
    h1.innerHTML = ` ${convert_to_word(userchoice)}  ${smallUser}beats ${convert_to_word(compChoice)} ${smallComp}. you win🏆 `
    let color1 = document.getElementById(userchoice)
    color1.classList.add('green')
    setTimeout(() => {
        color1.classList.remove('green')
    })
}

function lose(userchoice, compChoice) {
    compscore++;
    let smallUser = 'user'.fontsize(3).sub()
    let smallComp = 'comp'.fontsize(3).sub()
    score2.textContent = compscore;
    h1.innerHTML = ` ${convert_to_word(userchoice)} ${smallUser} loses by ${convert_to_word(compChoice)} ${smallComp}. you win💩 `
    // let color2 = document.getElementById(userchoice)
    // color2.classList.add('red')
    // setTimeout(() => {
    //     color2.classList.remove('red')
    // })
}

function draw(userchoice, compChoice) {
    let smallUser = 'user'.fontsize(3).sub()
    let smallComp = 'comp'.fontsize(3).sub()
    h1.innerHTML = ` ${convert_to_word(userchoice)} ${smallUser} equals to ${convert_to_word(compChoice)} ${smallComp}. it's a draw `
    // let color3 = document.getElementById(userchoice)
    // color3.classList.add('gray')
    // setTimeout(() => {
    //     color3.classList.remove('gray')
    // })
}

function game(userchoice) {
    var compChoice = computerRandom()
    switch (userchoice + compChoice) {
        //user wins
        case 'rs':
        case 'sp':
        case 'pr':
            wins(userchoice, compChoice)
            console.log(userchoice, compChoice)
            break;
        //comp wins
        case 'sr':
        case 'ps':
        case 'rp':
            lose(userchoice, compChoice)
            console.log(userchoice, compChoice)
            break;
        case 'rr':
        case 'ss':
        case 'pp':
            draw(userchoice, compChoice)
            console.log(userchoice, compChoice)
            break;
    }
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

function reset() {
    compscore = 0;
    userscore = 0;
    score1.textContent = 0
    score2.textContent = 0
    console.log('rese clickd')
}

playBtn.onclick = function () {
    play()
}

resetBtn.onclick = function () {
    reset()
    h1.textContent = 'paper covers rock you wins';
}