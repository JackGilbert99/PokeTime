export class Poke {
    constructor(data) {
      this.name = data.name
      this.url = data.url
    }
  
    get ListTemplate(){
      return /*html*/`
      <div class="selectable no-select text-light p-3" onclick="app.PokesController.getPokeDetails('${this.url}')">
        <p class="mb-0"><b>${this.name}</b></p>
      </div>
      `
    }
  }