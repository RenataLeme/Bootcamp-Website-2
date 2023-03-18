const panelImages1 = document.querySelector(".panel-images1");


const imgs = [
    "/imagens/ImagensPanelFilhotes/filhot1.jpg",
    "/imagens/ImagensPanelFilhotes/filhot2.jpg",
    "/imagens/ImagensPanelFilhotes/filhot3.jpg",
    "/imagens/ImagensPanelFilhotes/filhot4.jpg",
    "/imagens/ImagensPanelFilhotes/filhot5.jpg",
    "/imagens/ImagensPanelFilhotes/filhot6.jpg",
    "/imagens/ImagensPanelFilhotes/filhot7.jpg",
    "/imagens/ImagensPanelFilhotes/filhot8.jpg",
    "/imagens/ImagensPanelFilhotes/filhot9.jpg",
    "/imagens/ImagensPanelFilhotes/filhot10.jpg",
    "/imagens/ImagensPanelFilhotes/filhot11.jpg",
    "/imagens/ImagensPanelFilhotes/filhot12.jpg",
    "/imagens/ImagensPanelFilhotes/filhot13.jpg",
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
    "/imagens/ImagensPanelFilhotes/filhot14.jpg",
    "/imagens/ImagensPanelFilhotes/filhot15.jpg",
    "/imagens/ImagensPanelFilhotes/filhot16.jpg",
    "/imagens/ImagensPanelFilhotes/filhot17.jpg",
    "/imagens/ImagensPanelFilhotes/filhot18.jpg",
    "/imagens/ImagensPanelFilhotes/filhot19.jpg",
    "/imagens/ImagensPanelFilhotes/filhot20.jpg",
    "/imagens/ImagensPanelFilhotes/filhot21.jpg",
    "/imagens/ImagensPanelFilhotes/filhot22.jpg",
    "/imagens/ImagensPanelFilhotes/filhot23.jpg",
    "/imagens/ImagensPanelFilhotes/filhot24.jpg",
    "/imagens/ImagensPanelFilhotes/filhot25.jpg",
    "/imagens/ImagensPanelFilhotes/filhot26.jpg",
  
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
    "/imagens/ImagensPanelFilhotes/filhot27.jpg",
    "/imagens/ImagensPanelFilhotes/filhot28.jpg",
    "/imagens/ImagensPanelFilhotes/filhot29.jpg",
    "/imagens/ImagensPanelFilhotes/filhot30.jpg",
    "/imagens/ImagensPanelFilhotes/filhot31.jpg",
    "/imagens/ImagensPanelFilhotes/filhot32.jpg",
    "/imagens/ImagensPanelFilhotes/filhot33.jpg",
    "/imagens/ImagensPanelFilhotes/filhot34.jpg",
    "/imagens/ImagensPanelFilhotes/filhot35.jpg",
    "/imagens/ImagensPanelFilhotes/filhot36.jpg",
    "/imagens/ImagensPanelFilhotes/filhot37.jpg",
    "/imagens/ImagensPanelFilhotes/filhot38.jpg",
    "/imagens/ImagensPanelFilhotes/filhot39.jpg",
  
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