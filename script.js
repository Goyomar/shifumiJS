const game = document.querySelector("#game")
const round = document.querySelector("#round")
const evenRound = document.querySelector("#evenRound")
const even = document.querySelector("#even")
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const result = document.querySelector("#resultbox")        
const options = ["pierre","feuille","ciseaux"]


const scoreP1 = document.querySelector("#roundP1")
const gameP1 = document.querySelector("#gameP1")
const totalP1 = document.querySelector("#totalRoundP1")

const scoreP2 = document.querySelector("#roundP2")
const gameP2 = document.querySelector("#gameP2")
const totalP2 = document.querySelector("#totalRoundP2")



let nbRound = 3
nbRound = prompt("Combien de manches voulez-vous dans votre partie ?", "3")

rock.addEventListener("click",function(){
    quiGagne("pierre", randomizer(options))
})

paper.addEventListener("click",function(){
    quiGagne("feuille", randomizer(options))
})

scissors.addEventListener("click",function(){
    quiGagne("ciseaux", randomizer(options))
})

function resultChangeClass(newClass) {
    let currentClass = result.className
    result.classList.remove(currentClass)
    result.classList.add(newClass)
}

function quiGagne(optionP1, optionP2) {
    if (optionP1 == "pierre") {
        if (optionP2 == "feuille") {
            scoreP2.innerText = parseInt(scoreP2.innerText) + 1
            totalP2.innerText = parseInt(totalP2.innerText) + 1
            round.innerText = parseInt(round.innerText) + 1
            resultChangeClass("loose")
            result.innerText = "vous avez perdu :("

            if(scoreP1.innerText == (parseInt(nbRound)+1)/2 || scoreP2.innerText == (parseInt(nbRound)+1)/2){
                game.innerText = (parseInt(game.innerText) + 1)
                round.innerText = 1
                scoreP2.innerText = 0
                scoreP1.innerText = 0
                evenRound.innerText = 0
                gameP2.innerText = (parseInt(gameP2.innerText) + 1)
            }
        } else if (optionP2 == "ciseaux"){
            scoreP1.innerText = parseInt(scoreP1.innerText) + 1
            totalP1.innerText = parseInt(totalP1.innerText) + 1
            round.innerText = parseInt(round.innerText) + 1
            resultChangeClass("win")
            result.innerText = "vous avez gagné :)"

            if(scoreP1.innerText == (parseInt(nbRound)+1)/2 || scoreP2.innerText == (parseInt(nbRound)+1)/2){
                game.innerText = (parseInt(game.innerText) + 1)
                round.innerText = 1
                scoreP2.innerText = 0
                scoreP1.innerText = 0
                evenRound.innerText = 0
                gameP1.innerText = (parseInt(gameP1.innerText) + 1)
            }
        } else {
            resultChangeClass("even")
            result.innerText = "Egalité parfaite !"
            evenRound.innerText = parseInt(evenRound.innerText) + 1
            even.innerText = parseInt(even.innerText) + 1
        }
    } else if (optionP1 == "feuille") {
        if (optionP2 == "ciseaux") {
            scoreP2.innerText = parseInt(scoreP2.innerText) + 1
            totalP2.innerText = parseInt(totalP2.innerText) + 1
            round.innerText = parseInt(round.innerText) + 1
            resultChangeClass("loose")
            result.innerText = "vous avez perdu :("

            if(scoreP1.innerText == (parseInt(nbRound)+1)/2 || scoreP2.innerText == (parseInt(nbRound)+1)/2){
                game.innerText = (parseInt(game.innerText) + 1)
                round.innerText = 1
                scoreP2.innerText = 0
                scoreP1.innerText = 0
                evenRound.innerText = 0
                gameP2.innerText = (parseInt(gameP2.innerText) + 1)
            }
        } else if (optionP2 == "pierre") {
            scoreP1.innerText = parseInt(scoreP1.innerText) + 1
            totalP1.innerText = parseInt(totalP1.innerText) + 1
            round.innerText = parseInt(round.innerText) + 1
            resultChangeClass("win")
            result.innerText = "vous avez gagné :)"

            if(scoreP1.innerText == (parseInt(nbRound)+1)/2 || scoreP2.innerText == (parseInt(nbRound)+1)/2){
                game.innerText = (parseInt(game.innerText) + 1)
                round.innerText = 1
                scoreP2.innerText = 0
                scoreP1.innerText = 0
                evenRound.innerText = 0
                gameP1.innerText = (parseInt(gameP1.innerText) + 1)
            }
        } else {
            resultChangeClass("even")
            result.innerText = "Egalité parfaite !"
            evenRound.innerText = parseInt(evenRound.innerText) + 1
            even.innerText = parseInt(even.innerText) + 1
        }
    } else {
        if (optionP2 == "pierre") {
            scoreP2.innerText = parseInt(scoreP2.innerText) + 1
            totalP2.innerText = parseInt(totalP2.innerText) + 1
            round.innerText = parseInt(round.innerText) + 1
            resultChangeClass("loose")
            result.innerText = "vous avez perdu :("

            if(scoreP1.innerText == (parseInt(nbRound)+1)/2 || scoreP2.innerText == (parseInt(nbRound)+1)/2){
                game.innerText = (parseInt(game.innerText) + 1)
                round.innerText = 1
                scoreP2.innerText = 0
                scoreP1.innerText = 0
                evenRound.innerText = 0
                gameP2.innerText = (parseInt(gameP2.innerText) + 1)
            }
        } else if (optionP2 == "feuille") {
            scoreP1.innerText = parseInt(scoreP1.innerText) + 1
            totalP1.innerText = parseInt(totalP1.innerText) + 1
            round.innerText = parseInt(round.innerText) + 1
            resultChangeClass("win")
            result.innerText = "vous avez gagné :)"

            if(scoreP1.innerText == (parseInt(nbRound)+1)/2 || scoreP2.innerText == (parseInt(nbRound)+1)/2){
                game.innerText = (parseInt(game.innerText) + 1)
                round.innerText = 1
                scoreP2.innerText = 0
                scoreP1.innerText = 0
                evenRound.innerText = 0
                gameP1.innerText = (parseInt(gameP1.innerText) + 1)
            }
        } else {
            resultChangeClass("even")
            result.innerText = "Egalité parfaite !"
            evenRound.innerText = parseInt(evenRound.innerText) + 1
            even.innerText = parseInt(even.innerText) + 1
        }
    }
}

function randomizer(tab) {
    let temp
    for (let i = tab.length-1; i >= 1; i--) {
        j = Math.floor(Math.random()*(i+1))
            temp = tab[i]
            tab[i] = tab[j]
            tab[j] = temp
    }           
    return tab[0];
}

function test(n) {
    let p = 0, f = 0, c = 0
    for (let i = 0; i < n; i++) {
        switch (randomizer(options)) {
            case "pierre":
                p ++
                break;
            case "feuille":
                f ++
                break;
            case "ciseaux":
                c ++
                break;
            default:
                break;
        }
    }
    return "pierre : "+p*100/n+" %, feuille : "+f*100/n+" % ciseaux : "+c*100/n+" %"
}