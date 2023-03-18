const panelImages1 = document.querySelector(".panel-images1");


const imgs = [
    "/imagens/Athos/athos1.jpg",
    "/imagens/Lion/lion12.jpg",
   "/imagens/Lion/lion13.jpg",
   "/imagens/Duan/Duan14.jpg",
    "/imagens/Athos/athos5.jpg",
   "/imagens/Lion/lion22.jpg",
   "/imagens/Duan/Duan13.jpg",
    "/imagens/Athos/athos7.jpg",
   "/imagens/Athos/athos8.jpg",
    "/imagens/Athos/athos9.jpg",
    "/imagens/Lion/lion10.jpg",
   "/imagens/Lion/lion11.jpg",
   "/imagens/Lion/lion18.jpg",
    "/imagens/Athos/athos1.jpg",
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
    "/imagens/Lion/lion1.jpg",
    "/imagens/Duan/Duan1.jpg",
    "/imagens/Duan/Duan12.jpg",
    "/imagens/Lion/lion2.jpg",
    "/imagens/Athos/athos4.jpg",
    "/imagens/Duan/Duan2.jpg",
    "/imagens/Duan/Duan11.jpg",
   "/imagens/Lion/lion3.jpg",
    "/imagens/Duan/Duan3.jpg",
   "/imagens/Lion/lion4.jpg",
    "/imagens/Duan/Duan4.jpg",
    "/imagens/Lion/lion5.jpg",
    "/imagens/Duan/Duan5.jpg",
    "/imagens/Lion/lion6.jpg",
  
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
    "/imagens/Lion/lion7.jpg",
    "/imagens/Lion/lion8.jpg",
    "/imagens/Lion/lion9.jpg",
   "/imagens/Duan/Duan10.jpg",
   "/imagens/Duan/Duan6.jpg",
    "/imagens/Athos/athos5.jpg",
    "/imagens/Duan/Duan7.jpg",
   "/imagens/Lion/lion14.jpg",
   "/imagens/Lion/lion15.jpg",
   "/imagens/Lion/lion16.jpg",
     "/imagens/Lion/lion23.jpg",
    "/imagens/Duan/Duan8.jpg",
    "/imagens/Duan/Duan9.jpg",
  
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