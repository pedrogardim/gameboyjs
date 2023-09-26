# GameboyJS 🎮

![GameboyJS](https://github.com/pedrogardim/jsboy/assets/81443264/3289bf5a-41e7-4823-9bd7-fe8c459ee238)

Recrea la experiencia nostálgica del GameBoy clásico directamente en tu navegador. Construido con HTML, CSS y JavaScript, este proyecto no solo emula el aspecto del dispositivo, sino que también ofrece una versión jugable del clásico juego Snake 🐍.

Este proyecto ha sido realizado como el Proyecto 2 del Bootcamp de Full Stack Developer en Geekshubs Academy.

## 🚀 Vista previa

Si deseas ver el Gameboy en acción, simplemente [accede desde aquí](https://pedrogardim.github.io/gameboyjs/).

## 🌟 Características

- **Diseño 3D Interactivo**: Al presionar las flechas, el GameBoy se desplaza en un diseño 3D, proporcionando una experiencia visual dinámica.
- **Juego Snake**: ¡Juega al clásico juego Snake directamente en esta emulación!
- **Sonidos Clásicos**: Gracias a la biblioteca [Tone.js](https://tonejs.github.io/), esta emulación reproduce sonidos, obtenidos de [FreeSound.org](https://freesound.org/). Asegúrate de tener tus altavoces o auriculares conectados. 🔊

## 🎮 Cómo jugar

1. **Navegar**: Usa las teclas de flecha de tu teclado para mover el GameBoy en 3D.
2. **Jugar al Snake**:
   - Presiona `Enter` para iniciar el juego.
   - Usa las teclas de flecha para dirigir la serpiente.
   - Intenta conseguir la máxima puntuación posible sin chocarte!

## 🛠️ Decisiones técnicas

- Se ha utilizado CSS `grid` para maquetar la forma del Gameboy, por su praticidad y responsividad.
- Como reto, me propuse a hacer un Gameboy como un ortoedro 3D con sus 6 lados con puro CSS, pero debido a que no de aprecian todo sus lados, en la actual versión sus otras lados están comentadas en el HTML.
- Para los sonidos, se ha utilizado [Tone.js](https://tonejs.github.io/), una poderosa librería contruída sobre `WebAudio API`, debido a su forma sencilla de reproducir diferentes archivos de audio.
- Se ha utilizado como unidad los `vw` para garantizar que el gameboy mantenga sus proporciones en diferentes tamaños de pantalla.

## ✒️ Autor

- **Pedro Gardim** - Desarrollador del proyecto
  - [GitHub](https://github.com/pedrogardim) - [LinkedIn](https://www.linkedin.com/in/pedro-gardim) - [Portfolio](https://pedrogardim.com)

## 🎓 Agradecimientos

- A **Geekshubs Academy** por la oportunidad de aprender y crecer como desarrollador.

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.
