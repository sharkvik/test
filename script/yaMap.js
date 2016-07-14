/**
 * Created by Viktor on 14.07.2016.
 */
(function($){
    ymaps.ready(init);
    var data = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "id": 0,
                "geometry": {
                    "type": "Point",
                    "coordinates": [59.964585, 30.314978]
                },
                "properties": {
                    "balloonContent": "Содержимое балуна",
                    "clusterCaption": "Метка 1",
                    "hintContent": "Текст подсказки"
                }
            },
            {
                "type": "Feature",
                "id": 1,
                "geometry": {
                    "type": "Point",
                    "coordinates": [59.964586, 30.314980]
                },
                "properties": {
                    "balloonContent": "Содержимое балуна",
                    "clusterCaption": "Метка 2",
                    "hintContent": "Текст подсказки"
                }
            },
            {
                "type": "Feature",
                "id": 2,
                "geometry": {
                    "type": "Point",
                    "coordinates": [60.0, 30.314980]
                },
                "properties": {
                    "balloonContent": "Содержимое балуна",
                    "clusterCaption": "Метка 3",
                    "hintContent": "Текст подсказки"
                }
            }
        ]
    };
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [59.964584, 30.314979],
            zoom: 15
        });
        var objectManager = new ymaps.ObjectManager({clusterize: true});
        objectManager.add(data);
        objectManager.objects.setObjectOptions('preset', 'islands#greenDotIcon');
        myMap.geoObjects.add(objectManager);
    }
})(jQuery);