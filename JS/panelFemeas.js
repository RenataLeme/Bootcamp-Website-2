const panelImages1 = document.querySelector(".panel-images1");


const imgs = [
        "/imagens/Kyra/Kyra10.jpg",
        "/imagens/Kyra/Kyra13.jpg",
        "/imagens/Kyra/Kyra3.jpg",
        "/imagens/Kyra/Kyra4.jpg",
        "/imagens/Kyra/Kyra5.jpg",
        "/imagens/Kyra/Kyra6.jpg",
        "/imagens/Kyra/Kyra7.jpg",
        "/imagens/Antonia/ant1.jpg",
        "/imagens/Antonia/ant2.jpg",
        "/imagens/Antonia/ant3.jpg",
        "/imagens/Antonia/ant4.jpg",
        "/imagens/Bonita/bon1.jpg",
        "/imagens/Bonita/bon2.jpg",
        "/imagens/Bonita/bon3.jpg",
        "/imagens/Bonita/bon4.jpg",
        "/imagens/Bonita/bon5.jpg",
        "/imagens/Bonita/bon6.jpg",
        "/imagens/Pituca/Pituca1.jpg",
        "/imagens/Pituca/Pituca2.jpg",
        "/imagens/Pituca/Pituca3.jpg",
        "/imagens/Pituca/Pituca4.jpg",
        "/imagens/Jade/Jade1.jpg",
        "/imagens/Antonia/ant5.jpg",
        "/imagens/Antonia/ant6.jpg",
        "/imagens/Vivi/Vivi1.jpg",
        "/imagens/Vivi/Vivi2.jpg",
        "/imagens/Vivi/Vivi3.jpg",
  
 ];
  

let currentImagea = 1;

setInterval(() =>{
  panelImages1.src = imgs[currentImagea];
  if (currentImagea >= imgs.length-1){
    currentImagea = 0;
    return;
  }
  currentImagea++;
}, 4000)


//começa quadro 2 aqui

const panelImages2 = document.querySelector(".panel-images2");

const imagens = [

        "/imagens/Jade/Jade2.jpg",
        "/imagens/Antonia/ant8.jpg",
        "/imagens/Antonia/ant9.jpg",
        "/imagens/Antonia/ant10.jpg",
        "/imagens/Antonia/ant11.jpg",
        "/imagens/Kyra/Kyra10.jpg",
        "/imagens/Kyra/Kyra11.jpg",
        "/imagens/Kyra/Kyra12.jpg",
        "/imagens/Pituca/Pituca8.jpg",
        "/imagens/Jade/Jade2.jpg",
        "/imagens/Vivi/Vivi4.jpg",
        "/imagens/Vivi/Vivi5.jpg",
        "/imagens/Vivi/Vivi6.jpg",
        "/imagens/Vivi/Vivi7.jpg",
        "/imagens/Kyra/Kyra10.jpg",
        "/imagens/Antonia/ant12.jpg",
        "/imagens/Pituca/Pituca5.jpg",
        "/imagens/Pituca/Pituca6.jpg",
        "/imagens/Pituca/Pituca7.jpg",
        "/imagens/Jade/Jade2.jpg",
        "/imagens/Bonita/bon7.jpg",
        "/imagens/Bonita/bon8.jpg",
        "/imagens/Antonia/ant12.jpg",
        "/imagens/Bonita/bon9.jpg",
        "/imagens/Bonita/bon10.jpg",
        "/imagens/Bonita/bon11.jpg", 
        "/imagens/Kyra/Kyra8.jpg",
        "/imagens/Kyra/Kyra9.jpg",

        
        
      
 ];

let currentImageb = 1;

setInterval(() =>{
  panelImages2.src = imagens[currentImageb];
  if (currentImageb >= imagens.length-1){
    currentImageb = 0;
    return;
  }
  currentImageb++;
}, 7000) 


//começa o quadro 3

const panelImages3 = document.querySelector(".panel-images3");

const imagens3 = [
        
        "/imagens/Pituca/Pituca5.jpg",
        "/imagens/Pituca/Pituca9.jpg",
        "/imagens/Pituca/Pituca7.jpg",
        "/imagens/Pituca/Pituca8.jpg",
        "/imagens/Jade/Jade3.jpg",
        "/imagens/Vivi/Vivi8.jpg",
        "/imagens/Vivi/Vivi9.jpg",
        "/imagens/Vivi/Vivi10.jpg",
        "/imagens/Vivi/Vivi7.jpg",      
        "/imagens/Antonia/ant8.jpg",
        "/imagens/Antonia/ant9.jpg",
        "/imagens/Antonia/ant10.jpg",
        "/imagens/Bonita/bon1.jpg",
        "/imagens/Bonita/bon2.jpg",
        "/imagens/Antonia/ant14.jpg",
        "/imagens/Bonita/bon13.jpg",
        "/imagens/Bonita/bon7.jpg",
        "/imagens/Bonita/bon12.jpg",
        "/imagens/Bonita/bon9.jpg",
        "/imagens/Bonita/bon10.jpg",
        "/imagens/Bonita/bon11.jpg",
        "/imagens/Kyra/Kyra15.jpg",
        "/imagens/Kyra/Kyra16.jpg",
        "/imagens/Kyra/Kyra10.jpg",
        "/imagens/Kyra/Kyra11.jpg",
        "/imagens/Antonia/ant13.jpg",
        "/imagens/Kyra/Kyra12.jpg",
        "/imagens/Kyra/Kyra13.jpg",
        "/imagens/Kyra/Kyra14.jpg",
       
  
 ];

let currentImagec = 1;


setInterval(() =>{
  panelImages3.src = imagens3[currentImagec];
  if (currentImagec >= imagens3.length-1){
    currentImagec = 0;
    return;
  }
  currentImagec++;
}, 4000) 