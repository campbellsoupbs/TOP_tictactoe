// function returnIndex(){
//     const field = Array.from(document.querySelectorAll(".field"));

//     for (let i of field) {
//         i.addEventListener("click", logIndex)
//     }
    
//     function logIndex(e) {
//         let index = e.target.dataset['index']
//         console.log(index)
//         return index
//     }

//     return index

// }


const createPlayers = (function(){
    
    function playerFactory(name, symbol) {
        return {
            name: name,
            symbol: symbol,
            moves: []
        }
    }

    const Player1 = playerFactory("Player1", "x")
    const Player2 = playerFactory("Player2", "o")

    return {
        Player1: Player1,
        Player2: Player2
    }

})()


const checkModule = (function(){
    
    const winCombos = [
        [0,1,2],
        [2,5,8],
        [6,7,8],
        [0,3,6],
        [3,4,5],
        [1,4,7],
        [0,4,8],
        [2,4,6],
    ]
    
    let check = (array, target) => target.every(v => array.includes(v));   //Checks if one array contains every element of anotbher array
    
    function checker(innerTest){
        let match = 0
        for (let i of winCombos) {                  //Loops through each array in WinCombos array, runs check on each array
            if (check(innerTest, i)) {
                match++
            }
        }
        
        if (match === 0) {
            console.log("No match")
            return false
        } else {
            console.log("Match!")
            return true
        }
    }
    
    return {
        checker: checker
    }
    
})()


const controller = (function(){
    let round = 0
    let winners = 0
    let winner = ""
    let tie = 0

    const field = Array.from(document.querySelectorAll(".field"));

    for (let i of field) {
        i.addEventListener("click", click)
    }
    
    function click(e) {
        let index = Number(e.target.dataset['index'])
        let field = e.target
        console.log(index)
        game(index, field) 
    }

    function game(index, field) {
        if (winners === 1) {
            //declare winners
            console.log("winner!")
        } else if (tie === 1) {
            //declare tie
            console.log("Tie!")
        } else {
            if (round === 9) {
                tie++
            } else if (round%2 === 0) {
                console.log("Player1")
                createPlayers.Player1.moves.push(index)
                showSymbol(field, createPlayers.Player1.symbol)  
                if (checkModule.checker(createPlayers.Player1.moves)) { 
                    winners++
                    winner = "Player 1 wins"
                    console.log(winner)
                } else {
                    round++
                }
            } else {
                console.log("Player2")
                createPlayers.Player2.moves.push(index) 
                showSymbol(field, createPlayers.Player2.symbol)  
                if (checkModule.checker(createPlayers.Player2.moves)) {
                    winners++
                    winner = "Player 2 wins"
                    console.log(winner)
                } else {
                    round++
                }
            }
        }
    }

    function showSymbol(field, symbol){
        field.innerText = symbol
    }

    return {
        round: round,
        tie: tie,
        winner: winner,
        winners: winners
    }

})()


const reset = (function(){
    const reset_btn = document.querySelector('.reset')

    reset_btn.addEventListener('click', resetGrid)

    function resetGrid(){
        const field = Array.from(document.querySelectorAll(".field"));

        for (let i of field) {
            i.innerText = ""
        }

        createPlayers.Player1.moves = []
        createPlayers.Player2.moves = []
        controller.round = 0
        controller.tie = 0
        controller.winners = 0
        controller.winner = ""
        

    }
})()