$(function() {
    var map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([18.095676013284994, 42.65078632846504]),
          zoom: 9
        })
      });
});
    

