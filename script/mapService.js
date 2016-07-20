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
            this.zoom = parseInt( this.root[0].data().zoom || "15" );
            debugger;
            this.center = [parseFloat( this.root[0].data('center_x') || "59.98" ), parseFloat( this.root[0].data('center_x') || "30.314979" )];
            ymaps.ready( utils.proxy( this.build, this ) );
        },

        getPoints: function()
        {
            var pointObjs = angular.element( document.querySelectorAll( '*[data-point]' ) );
            var points = [];
            for( var i = 0; i<pointObjs.length; i++ )
            {
                var item = pointObjs[i];
                var point = item.data().point;
                points.push({
                    coordinates: [point.x, point.y],
                    name: point.name,
                    text: point.text,
                    title: point.title
                });
            }
            return points;
        },

        build: function()
        {
            if( !this.root.attr( 'id' ) )
            {
                this.root.attr( 'id', 'map' + (new Date()).getMilliseconds() );
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
            this.points.forEach( function( item, index ){
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