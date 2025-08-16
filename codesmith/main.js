document.addEventListener('DOMContentLoaded', async () => {

// init
const body = document.querySelector('body');
const newH1 = document.createElement('h1');
newH1.textContent = 'What\'s for dinner';
newH1.style.color = '#141250'
body.appendChild(newH1);


const testFood = document.createElement('img');
testFood.style.height = '400px';
testFood.style.width = '400px';
body.appendChild(testFood);

fetchFood();
// refresh button
const button = document.createElement('button');
 button.onclick = fetchFood;
 
 button.style.height = '50px';
 button.style.width = '100px';
 //button.textContent = 'Randomize'
body.appendChild(button);

function fetchFood(){
  fetch('https://foodish-api.com/api/')
    .then ((res) => {
       return res.json();
    })
    .then((data) => {
        const body = document.querySelector('body');
        
        // put url link to src
        testFood.src = data.image;

    })
    .catch ((error) => {
        console.log('err mesage', error);
    })
}    
});


