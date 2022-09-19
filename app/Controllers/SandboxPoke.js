import { appState } from "../AppState.js"
import { sandboxPokesService } from "../Services/SandboxPokesService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML, setText } from "../Utils/Writer.js"

function drawSandboxPokes() {

  let template = ''
  appState.sandboxPokes.forEach(s => template += s.ListTemplate)

  setHTML('Poke-slots', template)

  setText('Poke-count', appState.sandboxPokes.length)

}


export class SandboxPokesController {
  constructor() {
    this.getPokes()
    appState.on('sandboxPokes', drawSandboxPokes)
  }

  async getPokes() {
    try {
      await sandboxPokesService.getPokes()
    } catch (error) {
      console.error('[GettinPokes]', error)
      Pop.error(error)
    }
  }

  async addPoke() {
    try {
      await sandboxPokesService.addPoke()
      Pop.success('Poke learned')
      if (appState.sandboxPokes.length == 2) {
        Pop.toast('isn\t this is awesone', 'question', 'center', 8000, true)
      }
    } catch (error) {
      console.error('[AddingPoke]', error)
      Pop.error(error)
    }
  }

  async togglePokePrepared(id) {
    try {
      await sandboxPokesService.togglePoke(id)
    } catch (error) {
      console.error('[TogglePoke]', error)
      Pop.error(error)
    }
  }

  async deletePoke(id) {
    try {
      const yes = await Pop.confirm('Forget this Poke?')
      if (!yes) { return }
      await sandboxPokesService.deletePoke(id)
    } catch (error) {
      console.error('[DeletePoke]', error)
      Pop.error(error)
    }
  }

}