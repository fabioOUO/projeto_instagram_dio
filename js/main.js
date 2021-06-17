
function alterarImagem(){
    const element = document.querySelector(".instagram-content-display").querySelector("img");
    let img = 1;
    setInterval(function (){
            element.src = "./img/phone/display/"+img+".jpg";
            img < 3?img++:img = 1;
        },
        5000
    );

}

alterarImagem();