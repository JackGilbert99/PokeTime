import { appState } from "../AppState.js"
import { Poke } from "../Models/Poke.js"
import { PokeDetail } from "../Models/PokeDetail.js"
import { Server } from "./AxiosService.js"

class PokesService {
  async getPokeDetails(url) {
    const res = await Server.get(url)
    appState.activePoke = new PokeDetail(res.data)
  }

  async getPokes() {
    const res = await Server.get('/api/Pokes')
    console.log(res.data);
    appState.Pokes = res.data.results.map(s => new Poke(s))

  }
}
export const PokesService = new PokesService() 