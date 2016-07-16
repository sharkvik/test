/**
 * Created by Viktor on 16.07.2016.
 */
(function($){
    $.yandexMap = function( $item, points ){
        var settings = $item.data();
        var center = [settings.centerX || 59.98, settings.centerY || 30.314979];
        this.zoom = settings.zoom || 15;
        this.center = center;
        this.points = points || [];
        this.$root = $item;
        this.init();
    };

    $.yandexMap.prototype = {
        center: null,
        zoom: null,
        points: null,
        $root: null,

        init: function()
        {
            ymaps.ready( $.proxy( this.build, this ) );
        },

        build: function()
        {
            if( !this.$root.attr( 'id' ) )
            {
                this.$root.attr( 'id', 'map' + (new Date()) );
            }
            var myMap = new ymaps.Map(this.$root.attr('id'), {
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
            $.each( this.points, function( index, item ){
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

    $.fn.yandexMap = function(){
        var $item = $( this );
        var $pointObjects = $( '*[data-point]', $item );
        var points = [];
        $pointObjects.each( function( index, item ){
            var data = $( item ).data();
            points.push({
                coordinates: [data.x, data.y],
                name: data.name,
                text: data.text,
                title: data.title
            });
        } );
        return new $.yandexMap( $item, points );
    };
})(jQuery);