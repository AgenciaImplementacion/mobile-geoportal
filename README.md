[![Build Status](https://travis-ci.org/AgenciaImplementacion/mobile-geoportal.svg?branch=master)](https://travis-ci.org/AgenciaImplementacion/mobile-geoportal)

# mobile-geoportal
Versión del GeoPortal para dispositivos móviles, se ve desde el navegador web inicialmente.

# Requerimientos

- nodejs (necesario instalar): con este lenguaje se hace el build del proyecto
y el arranque de entorno de desarrollo. https://nodejs.org
- npm (necesario instalar): maneja las dependencias usadas en el proyecto.
https://www.npmjs.com

# Dependencias del entorno de desarrollo

- babel-loader: babel es un compilador de javascript que lee otros lenguajes
para web y los compila en javascript que entiende el navegador web. Ejemplos de
esos lenguajes son JSX, Next-JS, es2015, es2016, es2017, entre otros.
https://github.com/babel/babel-loader
- babel-minify-webpack-plugin: permite minificar/minimizar el código compilado
por babel. http://webpack.js.org/plugins/babel-minify-webpack-plugin
- css-loader: este loader de webpack permite leer archivos CSS y ponerlos en un
único archivo CSS. https://www.npmjs.com/package/css-loader
- extract-text-webpack-plugin: este loader permite extraer el texto de ficheros
que contentan texto. Se usa para extraer el texto CSS y concatenarlo en un único
fichero. https://www.npmjs.com/package/extract-text-webpack-plugin
- file-loader: permite que cualquier recurso especificado, sea cargado desde el
código javascript como un archivo, al momento del build se crean esto con nombres
en código. https://www.npmjs.com/package/file-loader
- html-webpack-plugin: es un loader que permite extraer el texto de
ficheros html, se usa para el index.html como plantilla.
https://github.com/jantimon/html-webpack-plugin
- url-loader: por ahora no se usa por problemas de rendimiento del JS compilado,
pero se puede usar para codificar archivos en base64 y dárselos a los programas
JS como URLs. Ejemplo, una imagen punto.png se convierte en la URL, "data:image/png;base64,iVBORw0KGgoAAA
ANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4
//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU
5ErkJggg==". https://www.npmjs.com/package/url-loader
- webpack: es el componente más importante del proyecto, es un constructor, qué
permite cargar cualquier recurso usado para generar elementos estáticos de un
sitio web. https://webpack.js.org/
- webpack-dev-server: componente de webpack para realizar el live-reload
(al modificar un archivo, compila una versión del programa y recarga el
  navegador). https://webpack.js.org/configuration/dev-server
https://github.com/webpack/webpack-dev-server

# Dependencias del desarrollo

- chart.js: api escogida para realizar gráficas. http://chartjs.org
- color: biblioteca para la transformación de colores.
https://www.npmjs.com/package/color
- jquery: nos permite manejar el dom de la aplicación. https://jquery.com
- materialize-css: la biblioteca de gráficos con diseño material (creado por
  google). http://materializecss.com https://material.io
- ol: biblioteca para el manejo del mapa. http://openlayers.org
http://openlayers.org/en/latest/apidoc

# Entorno de desarrollo
1) Clonar el proyecto.

```bash
git clone https://github.com/AgenciaImplementacion/mobile-geoportal
```

2) Instalar las dependencias.

```bash
cd mobile-geoportal
npm install
```

## Desarrollo live-reload

```bash
npm run live
```

# Despliegue
Crear el bundle.

```bash
npm run build
```

# Abrir proyecto
Abrir el `index.html` para ver los resultados.

```bash
open index.html
```

# Conveniciones para construir el proyecto
 - https://github.com/kriasoft/Folder-Structure-Conventions

# Basado en
 - https://github.com/gipong/shp2geojson.js
 - https://github.com/wavded/js-shapefile-to-geojson
 - https://www.genbetadev.com/javascript/webpack-gestion-integrada-y-eficiente-de-tus-assets
 - https://github.com/AgenciaImplementacion/odk-viewer
 - https://github.com/AgenciaImplementacion/shapefile-viewer
