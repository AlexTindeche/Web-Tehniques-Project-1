

function changeColour(evt){
    evt.currentTarget.style.color = randColors();
    evt.target.style.fontSize = "50px";
    console.log(evt.currentTarget.nodeName + '\n' + evt.target.nodeName);
    document.getElementById("knife").remove();
    evt.stopPropagation();
}

function randColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

var container_menu = document.getElementById("sectiuneBurger");
container_menu.addEventListener('click', changeColour, false);

// funcion randomColours()