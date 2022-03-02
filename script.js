const game = document.querySelector("#game")
const round = document.querySelector("#round")
const evenRound = document.querySelector("#evenRound")
const even = document.querySelector("#even")
const result = document.querySelector("#resultbox")    
const gameResult = document.querySelector("#gameResult") 

const boardP1 = document.querySelector("#scoreboardP1")
const scoreP1 = document.querySelector("#roundP1")
const gameP1 = document.querySelector("#gameP1")
const totalP1 = document.querySelector("#totalRoundP1")
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")

const boardP2 = document.querySelector("#scoreboardP2")
const scoreP2 = document.querySelector("#roundP2")
const gameP2 = document.querySelector("#gameP2")
const totalP2 = document.querySelector("#totalRoundP2")
const options = ["pierre","feuille","ciseaux"]

let theme = "naruto"
let optionTheme = {
    "naruto":{
        "scissors":"<img src='img/katon.png'>",
        "rock":"<img src='img/suiton.png'>",
        "paper":"<img src='img/mokuton.png'>"
    },
    "pokemon":{
        "scissors":"<img src='img/feu.jpg' alt='feu'>",
        "rock":"<img src='img/eau.jpg' alt='eau'>",
        "paper":"<img src='img/plante.png' alt='plante'>"
    }
}

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

function ChangeClass(box,newClass) {
    let currentClass = box.className
    box.classList.remove(currentClass)
    box.classList.add(newClass)
}
let katon = optionTheme.naruto.scissors
let suiton = optionTheme.naruto.rock
let mokuton = optionTheme.naruto.paper
function quiGagne(optionP1, optionP2) {
    if (optionP1 == "pierre") {
        if (optionP2 == "feuille") {
            scoreP2.innerText = parseInt(scoreP2.innerText) + 1
            totalP2.innerText = parseInt(totalP2.innerText) + 1
            round.innerText = parseInt(round.innerText) + 1
            ChangeClass(boardP1,"loose")
            ChangeClass(boardP2,"win")
            result.innerHTML = suiton+"<p> PERDU </p>"+mokuton

            if(scoreP1.innerText == (parseInt(nbRound)+1)/2 || scoreP2.innerText == (parseInt(nbRound)+1)/2){
                game.innerText = (parseInt(game.innerText) + 1)
                round.innerText = 1
                scoreP2.innerText = 0
                scoreP1.innerText = 0
                evenRound.innerText = 0
                gameP2.innerText = (parseInt(gameP2.innerText) + 1)
                gameResult.innerHTML = "<p>Le joueur 2 gagne la partie !</p>"
            }
        } else if (optionP2 == "ciseaux"){
            scoreP1.innerText = parseInt(scoreP1.innerText) + 1
            totalP1.innerText = parseInt(totalP1.innerText) + 1
            round.innerText = parseInt(round.innerText) + 1
            ChangeClass(boardP1,"win")
            ChangeClass(boardP2,"loose")
            result.innerHTML = suiton+"<p> GAGNE </p>"+katon

            if(scoreP1.innerText == (parseInt(nbRound)+1)/2 || scoreP2.innerText == (parseInt(nbRound)+1)/2){
                game.innerText = (parseInt(game.innerText) + 1)
                round.innerText = 1
                scoreP2.innerText = 0
                scoreP1.innerText = 0
                evenRound.innerText = 0
                gameP1.innerText = (parseInt(gameP1.innerText) + 1)
                gameResult.innerHTML = "<p>Le joueur 1 gagne la partie !</p>"
            }
        } else {
            ChangeClass(boardP1,"even")
            ChangeClass(boardP2,"even")
            result.innerHTML = suiton+"<p> EGALITE </p>"+suiton
            evenRound.innerText = parseInt(evenRound.innerText) + 1
            even.innerText = parseInt(even.innerText) + 1
        }
    } else if (optionP1 == "feuille") {
        if (optionP2 == "ciseaux") {
            scoreP2.innerText = parseInt(scoreP2.innerText) + 1
            totalP2.innerText = parseInt(totalP2.innerText) + 1
            round.innerText = parseInt(round.innerText) + 1
            ChangeClass(boardP1,"loose")
            ChangeClass(boardP2,"win")
            result.innerHTML = mokuton+"<p> PERDU </p>"+katon

            if(scoreP1.innerText == (parseInt(nbRound)+1)/2 || scoreP2.innerText == (parseInt(nbRound)+1)/2){
                game.innerText = (parseInt(game.innerText) + 1)
                round.innerText = 1
                scoreP2.innerText = 0
                scoreP1.innerText = 0
                evenRound.innerText = 0
                gameP2.innerText = (parseInt(gameP2.innerText) + 1)
                gameResult.innerHTML = "<p>Le joueur 2 gagne la partie !</p>"
            }
        } else if (optionP2 == "pierre") {
            scoreP1.innerText = parseInt(scoreP1.innerText) + 1
            totalP1.innerText = parseInt(totalP1.innerText) + 1
            round.innerText = parseInt(round.innerText) + 1
            ChangeClass(boardP1,"win")
            ChangeClass(boardP2,"loose")
            result.innerHTML = mokuton+"<p> GAGNE </p>"+suiton

            if(scoreP1.innerText == (parseInt(nbRound)+1)/2 || scoreP2.innerText == (parseInt(nbRound)+1)/2){
                game.innerText = (parseInt(game.innerText) + 1)
                round.innerText = 1
                scoreP2.innerText = 0
                scoreP1.innerText = 0
                evenRound.innerText = 0
                gameP1.innerText = (parseInt(gameP1.innerText) + 1)
                gameResult.innerHTML = "<p>Le joueur 1 gagne la partie !</p>"
            }
        } else {
            ChangeClass(boardP1,"even")
            ChangeClass(boardP2,"even")
            result.innerHTML = mokuton+"<p> EGALITE </p>"+mokuton
            evenRound.innerText = parseInt(evenRound.innerText) + 1
            even.innerText = parseInt(even.innerText) + 1
        }
    } else {
        if (optionP2 == "pierre") {
            scoreP2.innerText = parseInt(scoreP2.innerText) + 1
            totalP2.innerText = parseInt(totalP2.innerText) + 1
            round.innerText = parseInt(round.innerText) + 1
            ChangeClass(boardP1,"loose")
            ChangeClass(boardP2,"win")
            result.innerHTML = katon+"<p> PERDU </p>"+suiton

            if(scoreP1.innerText == (parseInt(nbRound)+1)/2 || scoreP2.innerText == (parseInt(nbRound)+1)/2){
                game.innerText = (parseInt(game.innerText) + 1)
                round.innerText = 1
                scoreP2.innerText = 0
                scoreP1.innerText = 0
                evenRound.innerText = 0
                gameP2.innerText = (parseInt(gameP2.innerText) + 1)
                gameResult.innerHTML = "<p>Le joueur 2 gagne la partie !</p>"
            }
        } else if (optionP2 == "feuille") {
            scoreP1.innerText = parseInt(scoreP1.innerText) + 1
            totalP1.innerText = parseInt(totalP1.innerText) + 1
            round.innerText = parseInt(round.innerText) + 1
            ChangeClass(boardP1,"win")
            ChangeClass(boardP2,"loose")
            result.innerHTML = katon+"<p> GAGNE </p>"+mokuton

            if(scoreP1.innerText == (parseInt(nbRound)+1)/2 || scoreP2.innerText == (parseInt(nbRound)+1)/2){
                game.innerText = (parseInt(game.innerText) + 1)
                round.innerText = 1
                scoreP2.innerText = 0
                scoreP1.innerText = 0
                evenRound.innerText = 0
                gameP1.innerText = (parseInt(gameP1.innerText) + 1)
                gameResult.innerHTML = "<p>Le joueur 1 gagne la partie !</p>"
            }
        } else {
            ChangeClass(boardP1,"even")
            ChangeClass(boardP2,"even")
            result.innerHTML = katon+"<p> EGALITE </p>"+katon
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

function gameReset(){
    game.innerText=1
    round.innerText=1
    evenRound.innerText=0
    even.innerText=0
    gameP1.innerText=0
    gameP2.innerText=0
    scoreP1.innerText=0
    scoreP2.innerText=0
    totalP1.innerText=0
    totalP2.innerText=0
    gameResult.innerHTML=""
    result.innerHTML=""
}

document.querySelector("#theme").addEventListener("click",function(){
    if (theme == "naruto"){
        gameReset()
        document.querySelector("#theme").innerText = theme
        theme = "pokemon"
        boardP1.style.backgroundImage = "url(img/P1_pokemon.jpg)"
        boardP2.style.backgroundImage = "url(img/P2_pokemon.png)"
        document.querySelector("#screen").style.backgroundImage = "url(img/stade.jpg)"
        scissors.innerHTML = optionTheme.pokemon.scissors
        rock.innerHTML = optionTheme.pokemon.rock
        paper.innerHTML = optionTheme.pokemon.paper
        document.querySelector("#gameRound").style.backgroundImage = "url(img/pokeball.jpg)"
        document.querySelector("#gameRound").style.color = "white"
        document.querySelector("#gameRound").style.textShadow= "#000000 1px 1px, #000000 -1px 1px, #000000 -1px -1px, #000000 1px -1px"
        document.querySelector("body").style.backgroundImage = "url(img/pkmnback.jpg)"

        katon = optionTheme.pokemon.scissors
        suiton = optionTheme.pokemon.rock
        mokuton = optionTheme.pokemon.paper
    } else {
        gameReset()
        document.querySelector("#theme").innerText = theme
        theme = "naruto"
        boardP1.style.backgroundImage = ""
        boardP2.style.backgroundImage = ""
        document.querySelector("#screen").style.backgroundImage = ""
        scissors.innerHTML = optionTheme.naruto.scissors
        rock.innerHTML = optionTheme.naruto.rock
        document.querySelector("#paper").innerHTML = optionTheme.naruto.paper
        document.querySelector("#gameRound").style.backgroundImage = ""
        document.querySelector("body").style.backgroundImage = ""

        katon = optionTheme.naruto.scissors
        suiton = optionTheme.naruto.rock
        mokuton = optionTheme.naruto.paper
    }
})