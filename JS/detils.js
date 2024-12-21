class GameDetails {
    constructor() {
        this.apiOptions = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '8790f1dafamsh856b2e63bc188c7p162535jsn887206772f31',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        this.allDetails = [];
        this.loadingElement = document.getElementById("loading");
        this.gameBodyElement = document.getElementById("game-body");
        this.showDetails()
    }

    async showDetails(id) {
        try {
            this.showLoading();  
            let apiResponse = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, this.apiOptions);
            let response = await apiResponse.json();

            this.allDetails = response;  

            this.displayData(response);  
        } catch (error) {
            console.error("Error fetching game details:", error);
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

    displayData(response) {
        this.gameBodyElement.innerHTML = `
            <div class="row" id="detailsContent">
                <div class="col-md-4">
                    <img src="${response.thumbnail}" class="img-fluid" alt="game photo">
                </div>
                <div class="col-md-8">
                    <h3>Title: ${response.title}</h3>
                    <p>Category: <span class="badge text-bg-info">${response.genre}</span></p>
                    <p>Platform: <span class="badge text-bg-info">${response.platform}</span></p>
                    <p>Status: <span class="badge text-bg-info">${response.status}</span></p>
                    <p class="small">${response.description}</p>
                    <a class="btn btn-outline-warning" target="_blank" href="${response.game_url}">Show Game</a>
                </div>
            </div>
        `;
    }
}

let gameDetails = new GameDetails();
    // let gameId = 'game-id';  
    // gameDetails.showDetails(gameId);





/****************Comments********************/

/* 

let allDetails = []


async function showDetails(id) {
    let options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '8790f1dafamsh856b2e63bc188c7p162535jsn887206772f31',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    loading.classList.remove("d-none")
    let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
    let response = await api.json()
    allDetails = response;
    disblayData()
    loading.classList.add("d-none")
    document.getElementById("game-body").innerHTML = `
    <div class="row" id="detailsContent">
       <div class="col-md-4">
                                    <img src="${response.thumbnail}" class="img-fluid" alt="game photo">
         </div>
            <div class="col-md-8">
                                    <h3>Title: ${response.title}</h3>
                                    <p>Category: <span class="badge text-bg-info"> ${response.genre}</span> </p>
                                    <p>Platform: <span class="badge text-bg-info"> ${response.platform}</span></p>
                                    <p>Status: <span class="badge text-bg-info"> ${response.status}</span></p>
                                    <p class="small">${response.description}</p>
                                    <a class="btn btn-outline-warning" target="_blank" href="${response.game_url}">Show Game</a>
            </div>
   </div>
    `
}
 */

// class GameDetails {
//     constructor() {
//         this.apiOptions = {
//             method: 'GET',
//             headers: {
//                 'x-rapidapi-key': '8790f1dafamsh856b2e63bc188c7p162535jsn887206772f31',
//                 'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
//             }
//         };
//         this.allDetails = [];
//         this.loadingElement = document.getElementById("loading");
//         this.gameBodyElement = document.getElementById("game-body");
//     }
//     async showDetails(id) {
//         try {
//             this.showLoading();
//             let apiResponse = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, this.apiOptions);
//             let response = await apiResponse.json();
//             this.allDetails = response;
//             this.displayData();
//         } catch (error) {
//             console.error("Error fetching games:", error);
//         } finally {
//             this.hideLoading();
//         }
//     }

//     showLoading() {
//         this.loadingElement.classList.remove("d-none");
//     }

//     hideLoading() {
//         this.loadingElement.classList.add("d-none");
//     }

//     displayData() {
//         let game = this.allDetails;
//         this.gameBodyElement.innerHTML = `
//     <div class="row" id="detailsContent">
//        <div class="col-md-4">
//                                     <img src="${game.thumbnail}" class="img-fluid" alt="game photo">
//          </div>
//             <div class="col-md-8">
//                                     <h3>Title: ${game.title}</h3>
//                                     <p>Category: <span class="badge text-bg-info"> ${game.genre}</span> </p>
//                                     <p>Platform: <span class="badge text-bg-info"> ${game.platform}</span></p>
//                                     <p>Status: <span class="badge text-bg-info"> ${game.status}</span></p>
//                                     <p class="small">${game.description}</p>
//                                     <a class="btn btn-outline-warning" target="_blank" href="${game.game_url}">Show Game</a>
//             </div>
//    </div>
//     `
//     }
// }

// const gameDetails = new GameDetails();
// gameDetails.showDetails('game-id');


