[![Build Status](https://travis-ci.org/AgenciaImplementacion/mobile-geoportal.svg?branch=master)](https://travis-ci.org/AgenciaImplementacion/mobile-geoportal)

# mobile-geoportal
Versión del GeoPortal para dispositivos móviles, se ve desde el navegador web inicialmente.

# Requerimientos

- nodejs (necesario instalar): con este lenguaje se hace el build del projecto
y el arranque de entorno de desarrollo.
- npm (necesario instalar): maneja las dependencias usadas en el proyecto

# Dependencias de desarrollo

- chart.js: api escogida para realizar gráficas
- color: biblioteca para la transformación de colores
- jquery: nos permite manejar el dom de la aplicación
- material-design-lite: la biblioteca de gráficos con diseño material (creado por google)
- ol: biblioteca para el manejo del mapa

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

# Conveniciones para construir el projecto
 - https://github.com/kriasoft/Folder-Structure-Conventions

# Basado en
 - https://github.com/gipong/shp2geojson.js
 - https://github.com/wavded/js-shapefile-to-geojson
 - https://www.genbetadev.com/javascript/webpack-gestion-integrada-y-eficiente-de-tus-assets
