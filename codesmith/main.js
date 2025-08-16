document.addEventListener('DOMContentLoaded', async () => {

const testFood = document.createElement('img');

  fetch('https://foodish-api.com/api/')
    .then ((res) => {
       return res.json();
    })
    .then((data) => {
        console.log('url: ' + data.image);
        
        console.log('data test-' + data);
        const body = document.querySelector('body');
        // put url link to src
        testFood.src = data.image;
        testFood.style.height = '400px';
        testFood.style.width = '400px';
        
        body.appendChild(testFood);
        // console.log(data[0])

    })
    .catch ((error) => {
        console.log('err mesage', error);
    })
    
});


// search the current page and 