export class PokeDetail {
    constructor(data) {
      this.id = data.id
      this.name = data.name
      this.description = data.description || data.desc.join('</br>') || 'Unable to decipher'
      this.range = data.range
      this.material = data.material
      this.duration = data.duration
      this.level = data.level
      this.castingTime = data.castingTime || data.casting_time
      this.components = data.components
    }
  
    get CardTemplate() {
      return /*html*/`
        <div class="card">
          <div class="card-body">
            <h3>${this.name} - <i class="mdi mdi-clock"></i>${this.castingTime}</h3>
            <p class="d-flex align-items-center justify-content-around">
              <kbd class="bg-info">Range:${this.range}</kbd>
              <kbd class="bg-warning">Duration:${this.duration}</kbd>
              <kbd>Level:${this.level}</kbd>
            </p>
            <p class="border-top py-2">
              ${this.description}
            </p>
            </div>
          <div class="card-footer">
            <!--TODO remove button or disable if to many Pokes-->
            <button class="btn btn-secondary" onclick="app.sandboxPokesController.addPoke()">Add to Pokebook</button>
          </div>
        </div>
      `
    }
  }
  