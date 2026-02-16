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
                <div class="item-attribute-row">
                    <h4>${item.type}</h4>
                </div>
            `;
            //change background colour of item.type depeding on paltform
            if (item.type === "web"){
                div.querySelector("h4").style.backgroundColor = "#0b72e9ff";
            } else {
                div.querySelector("h4").style.backgroundColor = "#e91a0b";
            }

            //add event listener to redirect when pressed
            div.addEventListener("click", () =>{
                window.location.href = item.location;
            });

            //Puts it inside the grid element
            grid.appendChild(div);
        });
    });