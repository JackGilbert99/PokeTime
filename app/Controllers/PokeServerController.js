import { appState } from "../AppState.js"
import { dndPokesService } from "../Services/DndPokesService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"

function _drawDndPokes() {
  let template = ''
  appState.dndPokes.forEach(s => template += s.ListTemplate)
  setHTML('dnd-Pokes', template)
}

export class DndPokesController {
  constructor() {
    appState.on('dndPokes', _drawDndPokes)
    this.getPokes()
  }

  async getPokes() {
    try {
      await dndPokesService.getPokes()
    } catch (error) {
      console.error('[getPokes]', error)
      Pop.error(error)
    }
  }

  async getPokeDetails(url) {
    try {
      
      await dndPokesService.getPokeDetails(url)
    } catch (error) {
      console.error('[getPokeDetails]', error)
      Pop.error(error)
    }
  }

}