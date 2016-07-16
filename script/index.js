/**
 * Created by Viktor on 15.07.2016.
 */
(function(){
    var purchaseApp = angular.module("testApplication", ["ngSanitize"]);
    purchaseApp.controller("EditorController",
        function ($scope) {
            var $document = angular.element(document);
            $scope.mode=angular.element(document.querySelector('input[type="hidden"]')).val();
            $scope.loadContent = function(){
                if( $scope.mode == 1 )
                    return 'editor.php';

                return 'map.php';
            };
            $scope.init = function()
            {
                $document.triggerHandler( 'content-loaded', $scope );
            }
        });
})();