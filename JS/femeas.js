const typewritter = document.querySelector('.typewritter');


const texts = [
    "SOMOS AS FEMEAS"
]

let currentText = 0;
let writeInterval;

write();

function write() {
    
    let text = "";
    let currentChar = 0;
    writeInterval = setInterval(() => {
      
        if (currentText >= texts.length) currentText = 0;

        text += texts[currentText][currentChar];
        typewritter.innerHTML = text;
        currentChar++;
        if (currentChar >= texts[currentText].length) {
            text = "";
            currentChar = 0;
            currentText++;
            clearInterval(writeInterval);
        }
    }, 100);
}

setInterval(() => {
    write();
  
}, 5000);
