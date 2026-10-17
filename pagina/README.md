# Linajes — sitio informativo

Sitio web estático, adaptable a móvil y modular para presentar el negocio de carne al barril Linajes y recibir solicitudes de cotización.

## Tecnologías

- HTML semántico para la estructura.
- CSS organizado por secciones y variables para mantener la identidad visual.
- JavaScript nativo en módulos ES (`js/main.js`), sin necesidad de un framework.
- [Lucide](https://lucide.dev/) para iconos mediante CDN.
- Google Fonts: Oswald y Roboto Condensed.

No necesita Node.js ni un proceso de compilación.

## Estructura

```text
linajes-web/
├── index.html
├── README.md
├── assets/
│   ├── logo-linajes.png
│   └── tarjetas-presentacion-linajes.png
├── css/
│   └── styles.css
└── js/
    └── main.js
```

## Cómo ejecutarlo

Como se usan módulos JavaScript, es mejor abrirlo mediante un servidor local en vez de abrir `index.html` directamente.

Con Python instalado:

```bash
python3 -m http.server 8000
```

Después abre `http://localhost:8000`.

También puedes usar la extensión **Live Server** de Visual Studio Code: abre la carpeta del proyecto y selecciona **Open with Live Server**.

## Antes de publicar

1. Abre `js/main.js`.
2. Reemplaza el valor vacío de `WHATSAPP_NUMBER` por el número de WhatsApp del negocio, con indicativo de país y solo dígitos. Ejemplo de formato colombiano: `573001112233`.
3. Verifica que el número sea correcto y prueba el formulario desde un teléfono y un computador.
4. Reemplaza o ajusta los textos para que reflejen exactamente los servicios, cobertura y oferta de Linajes.
5. Si tienes fotos propias de la carne al barril y de eventos reales, puedes agregarlas para hacer la página más cercana y convincente.

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

## Publicación

Al ser un sitio estático puedes desplegar la carpeta en GitHub Pages, Netlify, Cloudflare Pages o un hosting estático similar. No requiere servidor Node.js.
