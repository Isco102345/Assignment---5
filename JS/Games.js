/* let loading = document.getElementById("loading")
let navLinks = document.querySelectorAll(".navbar-nav .nav-link"); 

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function (e) {
        e.preventDefault(); 
        let category = e.target.getAttribute("data-category"); 
        getGames(category); 
        for (let j = 0; j < navLinks.length; j++) {
            navLinks[j].classList.replace("text-info","text-white");
        }
        e.target.classList.replace("text-white","text-info");

    });
}

getGames("mmorpg")

let allGames = []

async function getGames(category) {
    let options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '8790f1dafamsh856b2e63bc188c7p162535jsn887206772f31',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    loading.classList.remove("d-none")
    let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
    let response = await api.json()
    allGames = response;

    disblayData()
    loading.classList.add("d-none")
}
function disblayData() {
    let cartona = "";

    for (let i = 0; i < allGames.length; i++) {
        cartona += `
       <div class="col-md-6 col-lg-3">
            <div class="card bg-transparent h-100" role="button"  data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="showDetails(${allGames[i].id})">
                            <div class="card-img-top img-container">
                                <img src="${allGames[i].thumbnail}" alt="Tarisland" class="img-fluid">
                            </div>
                            <div class="card-body text-center d-flex justify-content-between">
                                <h6 class="fw-bold text-white">${allGames[i].title}</h6>
                                <span class="badge-span ">Free</span>
                            </div>
                            <p class="card-text small text-center">
                                ${allGames[i].short_description}
                            </p>
                            <footer class="card-footer d-flex justify-content-between">
                                <span class="badge badge-color">${allGames[i].publisher.split(" " , 2).join( " ")}</span>
                                <span class="badge badge-color">${allGames[i].platform}</span>
                            </footer>
            </div>
        </div>
       `
    }
    document.getElementById("games-row").innerHTML =cartona;
}
 */


export class GamePlayList {
    constructor() {
        this.apiOptions = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '8790f1dafamsh856b2e63bc188c7p162535jsn887206772f31',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        this.allGames = [];
        this.loadingElement = document.getElementById("loading");
        this.navLinks = document.querySelectorAll(".navbar-nav .nav-link");

        this.addEventListeners();

        this.getGames("mmorpg");
    }

    addEventListeners() {
        for (let i = 0; i < this.navLinks.length; i++) {
            this.navLinks[i].addEventListener("click", (e) => {
                e.preventDefault(); 
                let category = e.target.getAttribute("data-category"); 
                this.getGames(category); 
    
                for (let j = 0; j < this.navLinks.length; j++) {
                    this.navLinks[j].classList.replace("text-info", "text-white");
                }
                e.target.classList.replace("text-white", "text-info");
            });
        }
    }
   
    async getGames(category) {
        try {
            this.showLoading();
            let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, this.apiOptions);
            this.allGames = await api.json();
            this.displayData();
        } catch (error) {
            console.error("Error fetching games:", error);
        } finally {
            this.hideLoading();
        }
    }

    showLoading() {
        this.loadingElement.classList.remove("d-none");
    }

    hideLoading() {
        this.loadingElement.classList.add("d-none");
    }


    displayData() {
        let cartona = "";
        for (let i = 0; i < this.allGames.length; i++) {
            cartona += `
            <div class="col-md-6 col-lg-3">
                <div class="card bg-transparent h-100" role="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="gameDetails.showDetails(${this.allGames[i].id})">
                    <div class="card-img-top img-container">
                        <img src="${this.allGames[i].thumbnail}" alt="Game Thumbnail" class="img-fluid">
                    </div>
                    <div class="card-body text-center d-flex justify-content-between">
                        <h6 class="fw-bold text-white">${this.allGames[i].title}</h6>
                        <span class="badge-span">Free</span>
                    </div>
                    <p class="card-text small text-center">
                        ${this.allGames[i].short_description}
                    </p>
                    <footer class="card-footer d-flex justify-content-between">
                        <span class="badge badge-color">${this.allGames[i].publisher.split(" ", 2).join(" ")}</span>
                        <span class="badge badge-color">${this.allGames[i].platform}</span>
                    </footer>
                </div>
            </div>
            `;
        }
        document.getElementById("games-row").innerHTML = cartona;
    }
    

}
// let gamePlayList = new GamePlayList();

// displayData() {
    //     let cartona = "";

    //     for (let i = 0; i < this.allGames.length; i++) {
    //         cartona += `
    //         <div class="col-md-6 col-lg-3">
    //             <div class="card bg-transparent h-100" role="button"  data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="showDetails(${this.allGames[i].id})">
    //                 <div class="card-img-top img-container">
    //                     <img src="${this.allGames[i].thumbnail}" alt="Game Thumbnail" class="img-fluid">
    //                 </div>
    //                 <div class="card-body text-center d-flex justify-content-between">
    //                     <h6 class="fw-bold text-white">${this.allGames[i].title}</h6>
    //                     <span class="badge-span">Free</span>
    //                 </div>
    //                 <p class="card-text small text-center">
    //                     ${this.allGames[i].short_description}
    //                 </p>
    //                 <footer class="card-footer d-flex justify-content-between">
    //                     <span class="badge badge-color">${this.allGames[i].publisher.split(" ", 2).join(" ")}</span>
    //                     <span class="badge badge-color">${this.allGames[i].platform}</span>
    //                 </footer>
    //             </div>
    //         </div>
    //         `;
    //     }

    //     document.getElementById("games-row").innerHTML = cartona;
    // }