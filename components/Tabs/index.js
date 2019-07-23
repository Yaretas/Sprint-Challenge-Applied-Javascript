// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const topicsData = axios.get('https://lambda-times-backend.herokuapp.com/topics');

topicsData
.then(data => {
    // console.log('response.data', data);
    const dataTabs = data.data.topics;
    // console.log(dataTabs);

    dataTabs.forEach(topic => {
        const tabComponent = tabContent(topic);
        const tabTopics = document.querySelector('.topics');
        tabTopics.appendChild(tabComponent);
    })
})
.catch( err => {
    console.log('error', err);
})

const tabContent = (objTab) =>{
    const tabDiv = document.createElement('div');
    tabDiv.classList.add('tab');
    tabDiv.textContent = objTab;

    return tabDiv;
}
