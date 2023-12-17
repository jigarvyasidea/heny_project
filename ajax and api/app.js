let input = document.querySelector('input');
let btn = document.querySelector('button');
let list = document.querySelector('#list');

btn.addEventListener('click', function () {
    let searchText = input.value;
    input.value = '';

    // Clear the previous search results
    list.innerHTML = '';

    fetchData(searchText)
        .then(function (response) {
            manipulateDOM(response);
        })
       
});

async function fetchData(searchText) {
    try {
        const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`);
        return response.data; // Assuming the API response contains the data you need directly
    } catch (error) {
        throw error;
    }
}

function manipulateDOM(data) {
    if (Array.isArray(data)) {
        for (let item of data) {
            if (item.show && item.show.image) {
                let figure = document.createElement('figure');
                figure.innerHTML = `
                    <img src="${item.show.image.original}" alt="${item.show.name}" />
                    <h1>${item.show.name}</h1>
                    <p>${item.show.summary}</p>
                `;
                list.appendChild(figure);
            }
        }
    } else {
        console.error('Data is not an array:', data);
    }
}
