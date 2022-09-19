import { PokeDetail } from "./PokeDetail.js";

export class SandboxPoke extends PokeDetail {
  constructor(data) {
    super(data);
    this.prepared = data.prepared
  }

  get ListTemplate() {
    return /*html*/`
    <div class="no-select text-light p-3 ">
      <p class="mb-0 d-flex align-items-center justify-content-between"> 
      <!-- TRIGGERS PUT REQUEST -->
        <input type="checkbox" ${this.prepared ? 'checked' : ''} onchange="app.sandboxPokesController.togglePokePrepared('${this.id}')" >
        <b>${this.name}</b>
        <i class="mdi mdi-delete-forever on-hover" onclick="app.sandboxPokesController.deletePoke('${this.id}')"></i>
      </p>
    </div>
    `
  }


}
