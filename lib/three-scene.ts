import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

/**
 * Ponto único de carregamento do Three.js + OrbitControls.
 * Mantém tudo num só chunk lazy, evitando duplicar a biblioteca no bundle.
 */
export { THREE, OrbitControls };
