/**
 * Created by Viktor on 19.07.2016.
 */
(function(){
    app.controller("MapController", mapControllerInit );

    function mapControllerInit($scope, $document, mapService ) {
        mapService.init( '.map', $scope, $document );
    };
})();