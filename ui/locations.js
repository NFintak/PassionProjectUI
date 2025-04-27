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
    document.getElementById('level').innerHTML = errm;
    });
}

function show(data) {

    const ul = document.getElementById('posts'); //needs to match w id in div tag
    const list = document.createDocumentFragment();

    data.map(function (post) {
        console.log('Locations:', post);
        let li = document.createElement('li');
        let name = document.createElement('p');
        let initDesc = document.createElement('p');
        name.innerHTML = `${post.name}`;
        initDesc.innerHTML = `${post.initDesc}`;

        li.appendChild(name);
        li.appendChild(initDesc);
        list.appendChild(li);

        });

    ul.appendChild(list);
}

fetchLevelSelection();