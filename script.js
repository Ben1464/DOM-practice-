document.getElementsByClassName("introduction")[0].style.color="red".backgroundColor="green";
document.getElementsByClassName("body")[0].style.backgroundColor="yellow";
document.getElementById("container").style.border="2px solid black";
//additing an elemeentsing DOM
let h4Element = document.createElement('h4');

// Step 2: Set the content
h4Element.textContent = 'Additional Notes';

// Step 3: Append the h4 element to the document body (or any other desired parent element)
document.body.appendChild(h4Element).style.border = "2px solid black".color = "yellow";

let h5Element = document.createElement('h5');
h5Element.textContent = 'Additional Header';
document.body.appendChild(h5Element)

let h6Element = document.createElement("h6");
h6Element.textContent = "I want to be deleted after all";
document.body.appendChild(h6Element).style.backgroundColor = "Blue";

let elementToDelete = document.getElementById("delete");

elementToDelete.remove();

