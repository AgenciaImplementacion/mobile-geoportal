const config = {
  url_datos: 'https://geo.proadmintierra.info/geoserver/ODK/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=ODK:datos&maxFeatures=50&outputFormat=application%2Fjson',
  url_poligonos: 'https://geo.proadmintierra.info/geoserver/ODK/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=ODK:poligono&maxFeatures=50&outputFormat=application%2Fjson',
  ortofoto: {
    url: 'http://geo.red:8080/geoserver/ODK/wms',
    layers: 'ODK:ortofoto_la_palma_208IB2',
    format: 'image/png'
  },
  url_poligonos_muestreo: 'https://geo.proadmintierra.info/geoserver/ODK/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=ODK:Muestreo&maxFeatures=50&outputFormat=application%2Fjson'
};

export default config;
