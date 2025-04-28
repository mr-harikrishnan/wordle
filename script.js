const inputContainer = document.createElement("div");
inputContainer.style.width = "100%";
inputContainer.style.display = "flex";
inputContainer.style.flexDirection = "column";
inputContainer.style.alignItems = "center";
document.body.appendChild(inputContainer);

const headLine = document.createElement("h1");
headLine.innerText = "WORDLE";
inputContainer.appendChild(headLine);

for (let i = 0; i < 6; i++) {
    const inputRow = document.createElement("div");
    inputRow.style.display = "flex";
    inputContainer.appendChild(inputRow);

    for (let j = 0; j < 5; j++) {
        const inputBox = document.createElement("div");
        inputBox.style.height = "70px";
        inputBox.style.width = "70px";
        inputBox.style.border = "0.5px solid black";
        inputBox.style.margin = "4px";
        inputBox.style.borderRadius = "10px";
        inputBox.style.fontSize = "55px"
        inputBox.style.textAlign = "center"
        inputBox.setAttribute('id', i + "" + j);
        inputRow.appendChild(inputBox);
    }
}



// -----------------------------------------------------------------------------------------

const wordsDatas = [
    "PLANT", "CRANE", "BLUSH", "JUMPY", "SWORD", "BRICK", "FROST", "CLAMP", "VIXEN", "GHOST",
    "FLAME", "QUICK", "ZEBRA", "POUND", "WRIST", "GLEAM", "CHART", "BOUND", "CRAZY", "SPINE",
    "DRINK", "VITAL", "QUACK", "STORM", "FRESH", "GRIND", "TULIP", "MOVER", "PRIDE", "KNELT",
    "SLING", "HOVER", "FLOCK", "BRAVE", "CROWN", "SKATE", "LATCH", "FABLE", "GLIDE", "THUMP",
    "PRAWN", "TIGER", "SWORN", "MIRTH", "CABLE", "JOINT", "REIGN", "BADGE", "CLERK", "TREND",
    "FROWN", "SPEND", "MARCH", "WOKEN", "LIVER", "PASTE", "TRICK", "SNORE", "MEDAL", "VAPOR",
    "BLAZE", "GRACE", "JEWEL", "NIFTY", "OXIDE", "CHEAT", "SPEAR", "LOFTY", "QUIET", "NOBLE",
    "GRASP", "WALTZ", "LUCKY", "KNEEL", "CHARM", "PINTO", "QUART", "FIELD", "BROTH", "MANGO",
    "CAPER", "FIEND", "HURRY", "ELOPE", "CRISP", "THREW", "PLUME", "SQUAD", "TONIC", "ADORE",
    "FETCH", "UNITY", "GLOVE", "RANCH", "SIREN", "PLANK", "WREAK"
]

var resultCount=0

const randomWord = wordsDatas[Math.floor(Math.random() * wordsDatas.length)].split('')
console.log(randomWord)


let currentRow = 0;
let currentBox = 0;
let guesses = Array(6).fill(null).map(() => Array(5).fill(""));

var alp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
document.addEventListener("keydown", () => {

    if (currentRow < 6 && currentBox < 5) {
        var currentBoxValue = document.getElementById(`${currentRow}${currentBox}`)



        let eventKey = event.key
        if (alp.includes(eventKey.toUpperCase())) {
            guesses[currentRow][currentBox] = eventKey.toUpperCase()
            currentBoxValue.innerText = eventKey.toUpperCase()
            currentBox++
        }

    }


    if (event.key === "Enter") {
        if (currentBox === 5) {
resultCount++

            let checkArray = guesses[currentRow]

            for (let i = 0; i < checkArray.length; i++) {

                let isValue = false
                for (let j = 0; j < randomWord.length; j++) {
                    if (checkArray[i] == randomWord[j]) {
                        isValue = true
                    }
                }

                if (isValue) {
                    if (checkArray.indexOf(checkArray[i]) === randomWord.indexOf(checkArray[i])) {
                       //console.log(checkArray[i] + "" + "Green")

                        var changingDiv = document.getElementById(`${currentRow}${checkArray.indexOf(checkArray[i])}`).style.background = "green"
                        
                        

                    }
                    else {
                        //console.log(checkArray[i] + "" + "yellow")
                        var changingDiv = document.getElementById(`${currentRow}${checkArray.indexOf(checkArray[i])}`).style.background = "Yellow"
                        checkArray[i]="";
                        
                    }

                }
                else {
                    //console.log(checkArray[i] + "" + "grey")
                    var changingDiv = document.getElementById(`${currentRow}${checkArray.indexOf(checkArray[i])}`).style.background = "grey"
                   // console.log(currentRow,checkArray.indexOf(checkArray[i]))
                    checkArray[i]="";
                    
                    
                }

            }

            currentBox = 0
            currentRow++
        }
    }

    if(event.key==="Backspace" && currentBox > 0){
        currentBox--
        guesses[currentRow][currentBox]=null
        document.getElementById(`${currentRow}${currentBox}`).innerText=""
        
       
    }
   
    if(resultCount===6){
        const headLine = document.createElement("h1");
headLine.innerText = randomWord.join("")
inputContainer.appendChild(headLine);
    }
}
)









