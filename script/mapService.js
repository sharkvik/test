/**
 * Created by Viktor on 18.07.2016.
 */
(function(){
    var mapServiceObj = function(){};
    mapServiceObj.prototype = {
        scope:null,
        root: null,
        center: null,
        zoom: null,
        points: null,

        init: function( item, $scope, $document )
        {
            this.scope = $scope;
            if( typeof item === "string" )
            {
                this.root = angular.element( document.querySelector(item));
            }
            else
            {
                this.root = item;
            }
            this.points = this.getPoints();
            this.zoom = 15;
            this.center = [59.98, 30.314979];
            ymaps.ready( utils.proxy( this.build, this ) );
        },

        getPoints: function()
        {
            var pointObjs = angular.element( '*[data-point]' );
            var points = [];
            pointObjs.each( function( index, item ){
                var attrs= item.attributes;
                var dataItem = {};
                for( var i = 0; i<attrs.length; i++ )
                {
                    if(attrs[i].name == 'data-x')
                        dataItem.x = attrs[i].value;
                    if(attrs[i].name == 'data-y')
                        dataItem.y = attrs[i].value;
                    if(attrs[i].name == 'data-name')
                        dataItem.name = attrs[i].value;
                    if(attrs[i].name == 'data-text')
                        dataItem.text = attrs[i].value;
                    if(attrs[i].name == 'data-title')
                        dataItem.title = attrs[i].value;
                }
                points.push({
                    coordinates: [dataItem.x, dataItem.y],
                    name: dataItem.name,
                    text: dataItem.text,
                    title: dataItem.title
                });
            } );
            return points;
        },

        build: function()
        {
            if( !this.root.attr( 'id' ) )
            {
                this.root.attr( 'id', 'map' + (new Date()) );
            }
            var myMap = new ymaps.Map(this.root.attr('id'), {
                center: this.center,
                zoom: this.zoom
            });
            var objectManager = new ymaps.ObjectManager({clusterize: true});
            objectManager.add(this.getData());
            objectManager.objects.setObjectOptions('preset', 'islands#greenDotIcon');
            myMap.geoObjects.add(objectManager);
        },

        getData: function()
        {
            var data = {
                "type": "FeatureCollection",
                "features": []
            };

            var count = this.points.length;
            this.points.forEach( function( index, item ){
                data.features.push(
                    {
                        "type": "Feature",
                        "id": count + index,
                        "geometry": {
                            "type": "Point",
                            "coordinates": item.coordinates
                        },
                        "properties": {
                            "clusterCaption": item.name,
                            "balloonContent": item.text,
                            "hintContent": item.title
                        }
                    }
                )
            } );
            return data;
        }
    };
    app.factory( 'mapService', function(){ return new mapServiceObj(); });
})();