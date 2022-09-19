import { appState } from "../AppState.js";
import { Sandboxserver } from "./AxiosService.js";
import { SandboxPoke } from "../Models/SandboxPoke.js"

class SandboxPokesService {
    async addPoke() {
      if (!appState.activePoke) { return }
  
      // @ts-ignore
      const alreadyLearned = appState.sandboxPokes.find(s => s.name == appState.activePoke.name)
      if (alreadyLearned) {
        throw new Error('You already know this Poke')
      }
  
      if (appState.sandboxPokes.length > 20) {
        throw new Error('Your brain is full, buy more space use credit card to unlock your potential')
      }
  
  
      const res = await SandboxServer.post(`/api/${appState.user}/Pokes`, appState.activePoke)
      const newPoke = new SandboxPoke(res.data)
      appState.sandboxPokes = [...appState.sandboxPokes, newPoke]
  
    }
  
    async togglePoke(id) {
  
      const Poke = appState.sandboxPokes.find(s => s.id == id)
      if (!Poke) {
        throw new Error('bad id')
      }
  
    
      Poke.prepared = !Poke.prepared
      await SandboxServer.put(`/api/${appState.user}/Pokes/${id}`, Poke)
      appState.emit('sandboxPokes')
    }
  
    async deletePoke(id) {
      await SandboxServer.delete(`/api/${appState.user}/Pokes/${id}`)
      appState.sandboxPokes = appState.sandboxPokes.filter(s => s.id != id)
    }
    async getPokes() {
      const res = await SandboxServer.get(`/api/${appState.user}/Pokes`)
      appState.sandboxPokes = res.data.map(s => new SandboxPoke(s))
    }
  }
  
  export const sandboxPokesService = new SandboxPokesService()