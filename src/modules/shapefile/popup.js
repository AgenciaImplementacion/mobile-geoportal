import Select from 'ol/interaction/select';

var content = document.getElementById('popup-content');

var select_interaction = new Select();
select_interaction.on('select', function(evt) {
  var capa = lastFeature.getId().split('.')[0];
  // if(capa === 'poligono'){
  //   return;
  // }
  console.log(evt);
  window.evt = evt;
  var coordinate = evt.mapBrowserEvent.coordinate;

  var properties = lastFeature.getProperties();
  var contentHTML = '';

  for (var property in properties) {
    if (properties.hasOwnProperty(property)) {
      if (['geometry'].indexOf(property) === -1) { //Si geometry no pertenece al conjunto
        if(property === 'imagen_predio'){
          contentHTML += '<span>' + property + ':</p> <img src="' + properties[property] + '" style="width:200px; height:200px;"/><br/><br/>';
        } else {
          contentHTML += '<span>' + property + ': ' + properties[property] + '</span><br/>';
        }
      }
    }
  }

  if(typeof(properties['numero']) !== 'undefined'){
    contentHTML += '<p><a href="#" onclick="masInformacion(\'' + properties['numero'] + '\')">Más Información</a></p>';
  }

  if(typeof(properties['cod_cat_rg']) !== 'undefined'){
    contentHTML += '<p><a href="#" onclick="masInformacion(\'' + properties['cod_cat_rg'] + '\')">Más Información</a></p>';
  }

  content.innerHTML = contentHTML;
  window.overlay.setPosition(coordinate);
});

var lastFeature = null;
select_interaction.getFeatures().on("add", function(evt) {
  console.log(evt);
  window.evt2 = evt;
  var feature = evt.element; //the feature selected
  lastFeature = feature;
})

map.addInteraction(select_interaction);
