# Obsidian IOS Highlight Plugin

Este es un plugin para Obsidian que resalta la sintaxis de configuraciones IOS en tus notas.

## Características

- Resalta configuraciones de dispositivos como `SW1(config)#`, `SW1(config-if)#`, etc.
- Resalta comandos específicos como `int`, `description`, `spanning-tree`, etc.
- Resalta líneas de comentarios que comienzan con `!`.
- Resalta cualquier texto dentro de llaves `{}`.

## Cómo usar

- Clona este repositorio.
- Asegúrate de que tu NodeJS sea al menos la versión v16 (`node --version`).
- `npm i` o `yarn` para instalar dependencias.
- `npm run build` para iniciar la compilación en modo de observación.

## Instalación manual del plugin

- Copia `main.js`, `styles.css`, `manifest.json` a tu bóveda `VaultFolder/.obsidian/plugins/your-plugin-id/`.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Para más detalles, consulta el archivo [LICENSE](LICENSE).
