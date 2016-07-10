(function($){
    $("#texteditor").ckeditor();
    var purchaseApp = angular.module("testEditor", ["ngSanitize"]);
    purchaseApp.controller("testEditorController",
        function ($scope) {
            var editor = $('#texteditor').ckeditorGet();
            $scope.text = editor.getData();
            $scope.update = function(){
                $scope.text = editor.getData();
            }
            editor.on( 'change', function(){
                $('#texteditor').keyup();
            } )
        });
})(jQuery);
