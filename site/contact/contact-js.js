window.onload = insertDiv;

function insertDiv() {
    // Creem sectiunea mare in care sa punem casuta de adaugat review
    var sec = document.createElement("section");
    sec.style.margin = "100px";
    sec.style.marginBottom = "20px";
    sec.style.fontFamily = "'Raleway', sans-serif";
    sec.style.border = "1px solid white";

    // Titlu
    var titlu = document.createElement("h1");
    titlu.innerHTML = "No of stars:";

    // Input pt titlu
    var inputTitlu = document.createElement("input");
    inputTitlu.style.margin = "10px";
    inputTitlu.style.marginBottom = "20px";

    // Titlu pt casuta text review
    var review = document.createElement("h1");
    review.innerHTML = "Write your review here:";
    titlu.style.margin = review.style.margin = "10px";

    // Zona de text pt review
    var input = document.createElement("textarea");
    input.style.width = "calc(100% - 20px)";
    input.style.height = "100px";
    input.style.margin = "10px";
    input.style.padding = "0";
    input.style.border = "0";

    // Crearea butonului pt postare
    var buton = document.createElement("button");
    buton.id = "buton";
    buton.innerHTML = "Post review";
    buton.style.margin = "10px";

    // Adaugare de taguri
    inputTitlu.id = "titlu";
    inputTitlu.type = "text";
    input.id = "post";
    input.type = "text";

    // Adaugarea elementelor
    sec.appendChild(titlu);
    sec.appendChild(inputTitlu);
    sec.appendChild(review);
    sec.appendChild(input);
    sec.appendChild(buton);
    document.querySelector("body").appendChild(sec);

    // Crearea sectiunii unde vor fi afisare reviewrile
    var sec1 = document.createElement("section");
    sec1.id = "postari";
    sec1.style.margin = "100px";
    sec1.style.marginTop = "0";
    sec1.style.fontFamily = "'Raleway', sans-serif";
    var storage = localStorage.getItem('content');
    if (storage) {
        sec1.innerHTML = storage;
    }
    document.querySelector("body").appendChild(sec1);

    document.querySelector("button").onclick = function () {
        var art = document.createElement("article");
        var tit = document.createElement("h3");
        var par = document.createElement("p");
        var data = document.createElement("p");
        tit.innerHTML = document.getElementById("titlu").value;
        var date = new Date();
        par.innerHTML = document.getElementById("post").value;
        data.innerHTML = "Posted on " + date.getDate() + " " + date.getMonth() + " " + date.getFullYear();
        data.style.borderBottom = "1px solid grey";
        if (/^[0-5][ ][s][t][a][r][s]$/.test(tit.innerHTML)) {
            art.appendChild(tit);
            art.appendChild(par);
            art.appendChild(data);
            document.querySelector("#postari").appendChild(art);
            art.classList.add("post");
            localStorage.setItem('content', sec1.innerHTML);
        } else {
            alert("No of stars should be like 0 stars")
        }
    }
    //localStorage.removeItem('content');
}

setTimeout( function() {
    var x = document.getElementById("telefon");
    var comp = window.getComputedStyle(x);

    document.getElementById("nr_tel").style.fontSize = comp.fontSize;
}, 2000)
