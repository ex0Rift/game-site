const grid = document.getElementById('grid');

//make the game list from JSON file
fetch('../data/gameList.json')
    .then (res => res.json())
    .then (data => {
        //this code runs per item in list of games
        data.forEach(item => {
            //makes the DIVS
            const div = document.createElement('div');
            //gives it the classes
            div.className = 'item basic-style';
            //adds the HTML
            div.innerHTML = `
                <img src="${item.thumbnail}">
                <div class="item-text-section">
                    <h2>${item.title}</h2>
                    <p>${item.description}</p>
                </div>
            `;
            //Puts it inside the grid element
            grid.appendChild(div);
        });
    });