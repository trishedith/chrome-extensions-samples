document.addEventListener('DOMContentLoaded', async () => {

const testFood = document.createElement('img');
testFood.style.height = '400px';
testFood.style.width = '400px';


  fetch('https://foodish-api.com/api/')
    .then ((res) => {
       return res.json();
    })
    .then((data) => {
        const body = document.querySelector('body');
        const newH1 = document.createElement('h1');
        newH1.textContent = 'Food for Thought';
        //newH1.style.color = 
        body.appendChild(newH1);

        
        // put url link to src
        testFood.src = data.image;

        body.appendChild(testFood);
        // console.log(data[0])

    })
    .catch ((error) => {
        console.log('err mesage', error);
    })
    
});


// search the current page and 