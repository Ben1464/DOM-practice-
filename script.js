document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM content loaded");
    // Changing style properties using JavaScript
    document.getElementsByClassName("introduction")[0].style.color = "red";
    document.getElementsByClassName("introduction")[0].style.backgroundColor = "green";
    document.getElementsByClassName("body")[0].style.backgroundColor = "yellow";
    document.getElementById("container").style.border = "2px solid black";

    // Adding elements using DOM
    let h4Element = document.createElement('h4');
    h4Element.textContent = 'Additional Notes';
    h4Element.style.border = "2px solid black";
    h4Element.style.color = "yellow";
    document.body.appendChild(h4Element);

    let h5Element = document.createElement('h5');
    h5Element.textContent = 'Additional Header';
    document.body.appendChild(h5Element);

    let h6Element = document.createElement("h6");
    h6Element.textContent = "I want to be deleted after all";
    h6Element.style.backgroundColor = "blue";
    document.body.appendChild(h6Element);

    // Removing an element using its ID
    let elementToDelete = document.getElementById("delete");
    elementToDelete.remove();

    // Adding event listener to the button
    let button = document.getElementById('btn');
    console.log("Button found:", button); // Check if button exists
    function handleClick() {
        console.log("Button clicked");
        alert("It's working all fine");
    }
    button.addEventListener('click', handleClick);
});
