const field = Array.from(document.querySelectorAll(".field"));

for (let i of field) {
    i.addEventListener("click", logIndex)
}

function logIndex(e) {
    console.log(e.target.dataset['index'])
}







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
        } else {
            console.log("Match!")
        }
    }
    
    return {
        checker: checker
    }
    
})()















// const test1 = []                //false
// const test2 = [0,1,2, 3]        //true
// const test3 = [0,1,3]           //false
// const test4 = [0,1,3,6,7,8]     //true
// const test5 = [0,3,6,4,1,5]     //true



// checkModule.checker(test1);
// checkModule.checker(test2);
// checkModule.checker(test3);
// checkModule.checker(test4);
// checkModule.checker(test5);


