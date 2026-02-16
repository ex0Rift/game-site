const grid = document.getElementById('grid');

let filters = [];

function renderGameList(){
    //make the game list from JSON file
    fetch('../data/gameList.json')
        .then (res => res.json())
        .then (data => {
            //this code runs per item in list of games
            data.forEach(item => {

                //check if this item is in filters
                let show = false;
                filters.forEach(filter =>{
                    if (filter === item.type){
                        show = true;
                    }
                });

                //if filters is empyty shows all
                if (filters.length === 0) show = true;
                //skips this div if filters dont pass with any true
                if (!show) return;

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
}

function addFilter(button, type){
    //change teh button to look "in use"
    button.style.backgroundColor = "#8f8f8f";

    //check if item is already in filters
    if (!filters.includes(type)){
        //if not add to filters
        filters.push(type);
    } else{
        //if is then remove it from filiters and put button back to normal
        filters = filters.filter(item => item !== type);
        button.style.backgroundColor = "#303030";
    }
    //reset the gameList
    grid.innerHTML = "";
    renderGameList();
}


renderGameList();