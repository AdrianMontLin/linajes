# Linajes — sitio informativo

Sitio web estático, adaptable a móvil y modular para presentar el negocio de carne al barril Linajes y recibir solicitudes de cotización.

## Tecnologías

- HTML semántico para la estructura.
- CSS organizado por secciones y variables para mantener la identidad visual.
- JavaScript nativo en módulos ES (`js/main.js`), sin necesidad de un framework.
- [Lucide](https://lucide.dev/) para iconos mediante CDN.
- Google Fonts: Oswald y Roboto Condensed.

## Estructura

```text
pagina/
├── index.html
├── assets/
│   └── logo-linajes.png
├── css/
│   └── styles.css
└── js/
    └── main.js
README.md
```

## Módulos y buenas prácticas

- `index.html`: contenido y secciones de la página.
- `css/styles.css`: estilos, colores, tipografía, componentes y adaptación responsive.
- `js/main.js`: menú móvil, formulario de contacto y año del pie de página.
- `assets/`: imágenes de marca.
- Variables CSS centralizadas para cambiar colores con facilidad.
- Etiquetas semánticas, texto alternativo en imágenes, estados de foco visibles y respeto por la preferencia de movimiento reducido.
- El formulario no almacena información: prepara el mensaje y abre WhatsApp. No es un backend ni envía datos automáticamente.

## Paleta usada

- Carbón: `#171615`
- Negro suave: `#24211f`
- Beige pergamino: `#d7b889`
- Crema: `#e5d2b4`
- Rojo óxido: `#7c2c20`
- Rojo acento: `#a33b2b`
