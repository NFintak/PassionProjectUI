const API_URL = 'http://localhost:8080';

function fetchLevelSelection() {
    fetch(`${API_URL}/locations`) //needs to match Intellij file mapping
    .then(res => {
    return res.json();
    })
    .then(data => {
        console.log(`data ${data}`);
        show(data);
    })
    .catch(error => {
    errm = `Error fetching data : ${error}`
    console.log(`Error fetching data: ${errm}`);
    console.error("CORS err", errm)
    document.getElementById('locations').innerHTML = errm;
    });
}

function show(data) {

    const ul = document.getElementById('locations'); //needs to match w id in div tag
    const list = document.createDocumentFragment();

    data.map(function (post) {
        console.log('Locations:', post);
        let li = document.createElement('li');
        let locationName = document.createElement('p');
        let initDesc = document.createElement('p');
        let id = document.createElement('p');
        locationName.innerHTML = `${post.locationName}`;
        initDesc.innerHTML = `At a glance: ${post.initDesc}`;
        id.innerHTML = `<a href="./locations/${id}>" see more?`;

        li.appendChild(locationName);
        li.appendChild(initDesc);
        li.appendChild(id);
        list.appendChild(li);

        });

    ul.appendChild(list);
}

fetchLevelSelection();