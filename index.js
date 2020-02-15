axios.get("https://sv443.net/jokeapi/category/Miscellaneous?blacklistFlags=nsfw").then(response => {

        const getJokes = newCard(response.data);
        cards.appendChild(getJokes);
    })
    .catch(error => {
        console.log(error);
    });

// sets up refresh button
function refreshPage(){
    window.location.reload();
} 

const cards = document.querySelector('.cards');

const newCard = (data) => {
    const card = document.createElement('div'),
          jokeContainer = document.createElement('div'),
          setUp = document.createElement('p'),
          delivery = document.createElement('p');

    card.classList.add('card');
    jokeContainer.classList.add('jokeContainer');

    setUp.textContent = data.setup;
    delivery.textContent = data.delivery;

    card.appendChild(jokeContainer);
    card.appendChild(setUp);
    card.appendChild(delivery);
    
    return card;
}

