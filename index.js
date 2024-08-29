let player = {
    name: "Derick",
    cash: 200
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.cash

function getRandomCard(){
    let randNum = Math.floor(Math.random()*13) +1
    if (randNum>10){
        return 10
    } else if(randNum === 1){
        return 11
    } else{
        return randNum
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    player.cash-=50
    playerEl.textContent = player.name + ": $" + player.cash
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for (let i = 0; i<cards.length; i++){
        cardsEl.textContent+=cards[i] + " "
    }
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        player.cash+=100
        playerEl.textContent = player.name + ": $" + player.cash
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum 
}

function newCard(){
    if (isAlive === true && hasBlackJack === false && player.cash >=50){
        let card = getRandomCard()
        sum += card
        player.cash-=50
        playerEl.textContent = player.name + ": $" + player.cash
        cards.push(card)
        renderGame()
    }
    if(player.cash < 50){
        playerEl.textContent = "Not enough cash to play!"
    }
}