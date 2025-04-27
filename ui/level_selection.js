const API_URL = 'http://localhost:8080';

function fetchLevelSelection() {
    fetch(`${API_URL}/level_selection`) //needs to match Intellij file mapping
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

    const ul = document.getElementById('levels'); //needs to match w id in div tag
    const list = document.createDocumentFragment();

    data.map(function (post) {
        console.log('Levels:', post);
        let li = document.createElement('li');
        let levelName = document.createElement('p');
        let desc = document.createElement('p');
        levelName.innerHTML = `<a href="./locations.html?id=1"> ${post.levelName}</a>`;
        desc.innerHTML = `${post.desc}`;

        li.appendChild(levelName);
        li.appendChild(desc);
        list.appendChild(li);

        });

    ul.appendChild(list);
}

fetchLevelSelection();