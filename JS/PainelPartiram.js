const panelImages1 = document.querySelector(".panel-images1");


const imgs = [
    "/imagens/partiram/part1.jpg",
    "/imagens/partiram/part2.jpg",
    "/imagens/partiram/part3.jpg",
    "/imagens/partiram/part4.jpg",
    "/imagens/partiram/part5.jpg",
    "/imagens/partiram/part6.jpg",
    "/imagens/partiram/part7.jpg",
    "/imagens/partiram/part8.jpg",
    "/imagens/partiram/part9.jpg",
    ]
  

let currentImage1 = 1;

setInterval(() =>{
  panelImages1.src = imgs[currentImage1];
  if (currentImage1 >= imgs.length-1){
    currentImage1 = 0;
    return;
  }
  currentImage1++;
}, 3000)


//começa quadro 2 aqui

const panelImages2 = document.querySelector(".panel-images2");

const imagens = [
    "/imagens/partiram/part10.jpg",
   "/imagens/partiram/part11.jpg",
    "/imagens/partiram/part12.jpg",
    "/imagens/partiram/part13.jpg",
    "/imagens/partiram/part14.jpg",
    "/imagens/partiram/part15.jpg",
    "/imagens/partiram/part16.jpg",
    "/imagens/partiram/part17.jpg",
    "/imagens/partiram/part18.jpg",
      
 ];

let currentImage2 = 1;

setInterval(() =>{
  panelImages2.src = imagens[currentImage2];
  if (currentImage2 >= imagens.length-1){
    currentImage2 = 0;
    return;
  }
  currentImage2++;
}, 7000) 


//começa o quadro 3

const panelImages3 = document.querySelector(".panel-images3");

const imagens3 = [
    "/imagens/partiram/part19.jpg",
    "/imagens/partiram/part20.jpg",
    "/imagens/partiram/part21.jpg",
    "/imagens/partiram/part22.jpg",
    "/imagens/partiram/part23.jpg",
    "/imagens/partiram/part24.jpg",
    "/imagens/partiram/part25.jpg",
    "/imagens/partiram/part27.jpg",
    "/imagens/partiram/part28.jpg",
 ];

let currentImage3 = 1;


setInterval(() =>{
  panelImages3.src = imagens3[currentImage3];
  if (currentImage3 >= imagens3.length-1){
    currentImage3 = 0;
    return;
  }
  currentImage3++;
}, 4000) 