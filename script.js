const btnRandomColor = document.querySelectorAll('button')[0];
btnRandomColor.addEventListener('click', () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

const newButton = document.createElement('button'); 
const textBtn = document.createTextNode('Random Color');
newButton.appendChild(textBtn);
newButton.setAttribute('id', 'btnRandomColor2');
document.body.appendChild(newButton);

newButton.addEventListener('click', () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16); 
    document.body.style.backgroundColor = '#' + randomColor;
});

const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');

red.value;
green.value;
blue.value;

red.addEventListener('input', () => {
    document.body.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
})

green.addEventListener('input', () => {
    document.body.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
});

blue.addEventListener('input', () => {
    document.body.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
});

document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
}, false);


    