/**
 * Created by Viktor on 15.07.2016.
 */
(function($){
    var purchaseApp = angular.module("testEditor", ["ngSanitize"]);
    purchaseApp.controller("testEditorController",
        function ($scope) {
            $scope.mode=$('input[type="hidden"]').val();
            $scope.loadContent = function(){
                if( $scope.mode == 1 )
                    return 'editor.php';

                return 'map.php';
            };
            $scope.init = function()
            {
                $( document ).trigger( 'content-loaded', $scope );
            }
        });
})(jQuery);