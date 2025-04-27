const API_URL = 'http://localhost:8080';

function fetchLevelSelection() {
    fetch(`${API_URL}/home`)
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

    const ul = document.getElementById('level');
    const list = document.createDocumentFragment();

    data.map(function (post) {
        console.log('Levels:', post);
        let li = document.createElement('li');
        let name = document.createElement('p');
        let desc = document.createElement('p');
        name.innerHTML = `<a href="./location.html?id=1"> ${post.name}</a>`;
        desc.innerHTML = `${post.desc}`;

        li.appendChild(name);
        li.appendChild(desc);
        list.appendChild(li);

        });

    ul.appendChild(list);
}

fetchLevelSelection();