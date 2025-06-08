import { Plugin } from 'obsidian';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

// Colores para los diferentes tokens
const DEVICE_CONFIG_COLOR = 'color: #ff0000'; // Rojo para configuraciones de dispositivos
const COMMAND_COLOR = 'color: #008000'; // Verde para comandos
const COMMENT_COLOR = 'color: #888'; // Gris para comentarios
const CURLY_BRACES_COLOR = 'color: #00ffff'; // Celeste para texto dentro de llaves
const CODE_BLOCK_BACKGROUND_COLOR = 'background-color: #f5f5f5'; // Fondo para bloques de código

// Define el lenguaje personalizado para IOS
Prism.languages.ios = {
  // Resalta configuraciones de dispositivos como SW1(config)#, SW1(config-if)#, etc.
  'device-config': {
    pattern: /(\w+(?:\(\w+(?:-\w+)?\)#))/g, // Patrones como "nombre(modo)#"
    alias: 'keyword' // Usa el estilo definido para 'keyword' en CSS
  },
  // Resalta comandos específicos como int, description, spanning-tree, etc.
  'command': {
    pattern: /\b(int|description|spanning-tree|portfast|bpduguard|enable)\b/g, // Añade más comandos aquí separados por |
    alias: 'function' // Usa el estilo definido para 'function' en CSS
  },
  // Resalta líneas de comentarios que comienzan con !
  'comment-line': {
    pattern: /^!.*$/gm, // Líneas que comienzan con !
    alias: 'comment' // Usa el estilo definido para 'comment' en CSS
  },
  // Resalta cualquier texto dentro de llaves {}
  'curly-braces': {
    pattern: /\{[^}]*\}/g, // Texto dentro de llaves
    alias: 'curly-braces' // Usa el estilo definido para 'curly-braces' en CSS
  }
};

export default class MyPlugin extends Plugin {
  private styleEl: HTMLStyleElement;

  async onload() {
    console.log('Plugin loaded');

    // Añadir estilos CSS personalizados para los tokens definidos
    this.styleEl = document.createElement('style');
    this.styleEl.textContent = `
      code.language-ios {
        display: block;
        ${CODE_BLOCK_BACKGROUND_COLOR};
        padding: 10px;
        border-radius: 5px;
      }
      .token.keyword {
        ${DEVICE_CONFIG_COLOR} !important;
        font-weight: bold;
      }
      .token.function {
        ${COMMAND_COLOR} !important;
        font-weight: bold;
      }
      .token.comment {
        ${COMMENT_COLOR} !important;
        font-style: italic;
      }
      .token.curly-braces {
        ${CURLY_BRACES_COLOR} !important;
        font-style: italic;
        font-weight: bold;
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
