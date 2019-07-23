// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const getAxios = axios.get('https://lambda-times-backend.herokuapp.com/articles');

getAxios
    .then(data => {
        // console.log('response.data', data);
        const getAxios = data.data.articles;
        Object.keys(getAxios).forEach((articleTopic) =>{
            getAxios[articleTopic].forEach(topic =>{
                const newCards = cardContent(topic);
                const cards = document.querySelector('.cards-container');
                cards.appendChild(newCards);
            })
        })

    })
    .catch( err => {
        console.log('error', err);
})


const cardContent = (cardObj) => {
    // main div
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    
    // headline
    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = cardObj.headline;
    cardDiv.appendChild(headline);
    
    // author div
    const authorDiv = document.createElement('div');
    authorDiv.classList.add('author');
    cardDiv.appendChild(authorDiv);

    // img container
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    authorDiv.appendChild(imgContainer);
    // img src
    const img = document.createElement('img');
    img.src = cardObj.authorPhoto;
    imgContainer.appendChild(img);

    const authorName = document.createElement('span').textContent = `By ${cardObj.authorName}`;
    // console.log(author);
    authorDiv.append(authorName);

    return cardDiv;
}