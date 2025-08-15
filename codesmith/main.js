document.addEventListener('DOMContentLoaded', async () => {
// get 
// document.querySelector

//random generator of food images normal webiste and use that to show the food images and a button that can cycle

//https://foodish-api.com/images/burger/
const foodApi = fetch ('https://foodish-api.com/images/burger/')
    .then ((res) => {
        return res.json();
    })
    .then((data) => {
        console.log("data test? ",data);
        console.log(data[0])

    })
    .catch (error => {
        console.log("err mesage");
        console.error(error.message);
    })
    
// console.log(foodApi())

}
/*
document.addEventListener('DOMContentLoaded', async () => {
  const title = document.createElement('h1');
  const body = document.querySelector('body')?.appendChild(title);
  const textView = document.createElement('div');

  title.innerText = 'Online Chatroom';

  textView.setAttribute(
    'style',
    'overflow:auto; height: 400px; width: 750px; border: 1px solid #333333'
  );

  body?.appendChild(textView);

  fetch('https://ohwuvawrw4.execute-api.us-west-2.amazonaws.com/messages', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // handle the data from the server
      const message = document.createElement('div');
      message.id = 'messages';
      message.innerText = JSON.stringify(data);

      textView.appendChild(message);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });

  // make AJAX call here....
});
*/