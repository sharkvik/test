/**
 * Created by Viktor on 16.07.2016.
 */
(function(){
    app.controller("EditorController", editorControllerInit );

    function editorControllerInit($scope, $document, editorService ) {
        editorService.init( '#texteditor', $scope, $document );
    };
})();