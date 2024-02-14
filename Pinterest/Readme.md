=>  Change karna ke poora process main
// selection
// css change
-> var home = document.querySelector("#home").innerHTML = "Home";
// home.style.color = "red";

// html change
-> var home = document.querySelector("#home").style.color = "#000";

// home.innerHTML = "Welcome";

// text change
// home.textContent = "<i>Welcomes<i/>";
// home.innerText = "Welcomes";


// Adding listener


function listenersevent(){

    home.addEventListener("mousemove", function(e) {
        home.style.color = "red";
    });
    
    home.addEventListener("mouseleave", function(e) {
        home.style.color = "#000";
    });
}

listenersevent();



<!-- Array filter -->