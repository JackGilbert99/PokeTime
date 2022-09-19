import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";


function drawActivePoke() {
  if (appState.activePoke == null) { return }
  setHTML('active-Poke', appState.activePoke.CardTemplate)
}


export class ActivePokeController {
  constructor() {
    appState.on('activePoke', drawActivePoke)
  }
}