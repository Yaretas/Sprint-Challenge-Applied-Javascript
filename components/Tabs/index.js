// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(data => {
    console.log('response.data', data);
    const tab = document.querySelector('.tabs');
    tab.appendChild(tabContent(data.data));
})
.catch( err => {
    console.log('error', err);
})

const tabContent = (objTab) =>{
    const tabDiv = document.createElement('div');
    tabDiv.classList.add('tab');
    tabDiv.textContent = objTab.topics;

    return tabDiv;
}
