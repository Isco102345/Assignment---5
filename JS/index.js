import { GamePlayList } from './Games.js'
import { GameDetails } from './detils.js'

    let gamePlayList = new GamePlayList();
    let gameDetails = new GameDetails();

       gamePlayList.addEventListeners()
       gamePlayList.getGames("mmorpg")
       gameDetails.showDetails()
