var popup;

function afisare(){
    alert("Would you like to leave a review?");
}

function review(){
    popup = setInterval(afisare, 20000);
}

function stop(){
    clearInterval(popup);
}

review();
setTimeout(stop, 120000);