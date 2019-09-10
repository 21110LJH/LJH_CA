const body = document.querySelector("body");
const ImgNumber = 3;

function paintImage(Img_Number){
    const image = new Image();
    image.src = 'images/'+ (Img_Number+1) +'.jpg';
    image.classList.add("image");
    body.appendChild(image);
}

function genRandom(){
    const number = Math.floor(Math.random() * ImgNumber);
    return number;
}

const randomNumber = genRandom();
paintImage(randomNumber);