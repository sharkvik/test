/**
 * Created by Viktor on 16.07.2016.
 */
(function(){
    app.controller("EditorController", editorControllerInit );

    function editorControllerInit($scope, $document, editorService ) {
        $scope.mode=$document.find('input[type="hidden"]').val();
        $scope.loadContent = function(){
            if( $scope.mode == 1 )
                return 'editor.php';

            return 'map.php';
        };
        
        $scope.init = function()
        {
            if( $scope.mode == 1 )
                editorService.init( '#textarea', $scope, $document );
        }
    };
})();