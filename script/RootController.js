/**
 * Created by Viktor on 19.07.2016.
 */
(function(){
    app.controller("RootController", rootControllerInit );

    function rootControllerInit( $scope, $document ) {
        $scope.mode=angular.element( document.querySelector('input[type="hidden"]')).val();
        $scope.loadContent = function(){
            if( $scope.mode == 1 )
                return 'editor.php';

            return 'map.php';
        };
    };
})();