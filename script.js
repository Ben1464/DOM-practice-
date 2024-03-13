document.getElementsByClassName("introduction")[0].style.color="red".backgroundColor="green";
document.getElementsByClassName("body")[0].style.backgroundColor="yellow";
document.getElementById("container").style.border="2px solid black";
//additing an elemeentsing DOM
let h4Element = document.createElement('h4');

// Step 2: Set the content
h4Element.textContent = 'Additional Notes';

// Step 3: Append the h4 element to the document body (or any other desired parent element)
document.body.appendChild(h4Element).style.border = "2px solid black".color = "yellow";

