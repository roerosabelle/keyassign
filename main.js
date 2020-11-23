const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
 
let randomLetter = alphabet[Math.floor(Math.random() * 26)];
console.log(randomLetter);
 
const body = document.querySelector('body');
document.body.addEventListener('keyup',function(event) {
        if(randomLetter === event.key) {
            randomLetter = alphabet[Math.floor(Math.random() * 26)];
            const appendKey= document.createElement('h3');
            appendKey.textContent = "SECRET KEY PRESSED";
            body.appendChild(appendKey);
            console.log(randomLetter);
        };
});

