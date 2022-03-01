const submitBtn = document.querySelector(".submitBtn");

//Array 1
const fruitNames = ["Grapes", "Melon", "Watermelon", "Tangerine", "Lemon", "Banana", "Pineapple", "Mango", "Red Apple"];

//Array 2
const fruits = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎"];

// Fuction that creates a combined map
const makeNewMap = (fruitNames, fruits) => { //Function takes arrays a parameters
    const myMap = new Map(); //Defines a new Map
    for (let i = 0; i < fruitNames.length; i++) {
        myMap.set(fruitNames[i], fruits[i]) ; 
        //Looping through Array 1  and creating a new array from it with Array 1 & Array 2 using only the index of Array 1.
    }

    //Sort the new mapped array by key using the sort method. This will take all values entered in myMap.
    const sortedMap = new Map([...myMap.entries()].sort());

    localStorage.setItem("fruitNames", myMap);

}

// Functuin to add fruits to the array
function addFruits(){
    //Getting values from HTML input boxes
    const addFruit = document.querySelector("#add-fruits").value;
    const addEmoji = document.querySelector("#add-emojis").value;
    const err = document.querySelector(".fail");
    const pass = document.querySelector(".success");

    if (addFruit != "" && addEmoji != "") {
        //inserting values into the designated arrays, if boxes are not empty and displaying a success message.
        fruitNames.push(addFruit);
        fruits.push(addEmoji);
        pass.classList.add("show");
        setTimeout(() => {
            // hides element 
            pass.classList.remove("show");
        }, 5000);
    } else {
        err.classList.add("show");
        setTimeout(() => {
            // hides element 
            err.classList.remove("show");
        }, 5000);
    }

    
}

submitBtn.addEventListener("click", addFruits);