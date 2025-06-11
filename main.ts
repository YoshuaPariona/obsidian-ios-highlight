// main.ts
import { Plugin } from 'obsidian';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import { iosPatterns } from './patterns'; // Importa los patrones desde patterns.ts

// Colores para los diferentes tokens
const COMMAND_COLOR = 'color: #008000'; // Comandos (alta) - Verde fuerte
const CURLY_BRACES_COLOR = 'color: #ff5000'; // Texto dentro de llaves del usuario (media) - Naranja oscuro
const DEVICE_CONFIG_COLOR = 'color: #8888ff'; // Dispositivos (baja) - Azul moderado
const COMMENT_COLOR = 'color: #888'; // Comentarios (fija) - Gris neutro
const CODE_BLOCK_BACKGROUND_COLOR = 'background-color: #ffffff'; // Fondo blanco para bloques de código

// Define el lenguaje personalizado para IOS usando los patrones importados
Prism.languages.ios = iosPatterns;

export default class MyPlugin extends Plugin {
  private styleEl: HTMLStyleElement;

  async onload() {
    console.log('Plugin loaded');

    // Añadir estilos CSS personalizados para los tokens definidos
    this.styleEl = document.createElement('style');
    this.styleEl.textContent = `
      code.language-ios {
        display: block;
        ${CODE_BLOCK_BACKGROUND_COLOR} !important;
        margin: -15px !important;
        padding: 10px !important;
      }
      .token.keyword {
        ${DEVICE_CONFIG_COLOR} !important;
      }
      .token.function {
        ${COMMAND_COLOR} !important;
      }
      .token.comment {
        ${COMMENT_COLOR} !important;
        font-style: italic !important;
      }
      .token.curly-braces {
        ${CURLY_BRACES_COLOR} !important;
        font-style: italic !important;
      }
    `;
    document.head.appendChild(this.styleEl);
    console.log('CSS styles added');

    // Registrar el procesador para el modo de lectura
    this.registerMarkdownPostProcessor((element) => {
      this.applyHighlighting(element);
    });
  }

  onunload() {
    // Limpiar cualquier cosa que hayas añadido
    if (this.styleEl && this.styleEl.parentNode) {
      document.head.removeChild(this.styleEl);
    }
  }

  // Aplica el resaltado de sintaxis a los bloques de código
  private applyHighlighting(element: HTMLElement) {
    console.log('Applying highlighting');
    element.querySelectorAll('code.language-ios').forEach((codeBlock) => {
      if (codeBlock instanceof HTMLElement) {
        console.log('Highlighting code block:', codeBlock);
        codeBlock.innerHTML = Prism.highlight(codeBlock.innerText, Prism.languages.ios, 'ios');
      }
    });
  }
}
