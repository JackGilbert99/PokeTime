import { ActivePokeController } from "./Controllers/ActivePokeController.js";
import { DndPokesController } from "./Controllers/DndPokesController.js";
import { SandboxPokesController } from "./Controllers/SandboxPokesController.js";

class App {
  activePokeController = new ActivePokeController()
  dndPokesController = new DndPokesController()
  sandboxPokesController = new SandboxPokesController()
}

window["app"] = new App();
