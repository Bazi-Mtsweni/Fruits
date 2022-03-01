const searchIcon = document.querySelector(".fa-magnifying-glass");

 function viewFruits(){
     const newFruits = JSON.parse(localStorage.getItem("fruitNames"));
    const list = document.querySelector(".list");

     for (let x = 0; x < newFruits.length; x++) {
    // console.log(newFruits[x]);

    const listItem = document.createElement("li");
    const listValue = document.createTextNode(newFruits[x]);
    listItem.appendChild(listValue);

    list.appendChild(listItem);
    }
}

function search(){
    // Declare variables
    const input = document.getElementById("search"); //Search input
    const filter = input.value.toUpperCase(); //Turns everything to uppercase, to avoid case sensitivity
    const ul = document.querySelector(".list"); //List parent
    const li = ul.getElementsByTagName("li"); //List Items (child of UL)

  // Loop through all list items, and hide those who don't match the search query
  for ( let i = 0; i < li.length; i++) {
    const item = li[i];
    const txtValue = item.textContent || item.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

viewFruits();
 
