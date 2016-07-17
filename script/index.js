/**
 * Created by Viktor on 15.07.2016.
 */
(function(){
    var purchaseApp = angular.module("testApplication", ["ngSanitize"]);

    purchaseApp.factory( 'editorService', function()
    {
        return {
            scope:null,
            editor:null,
            textEditor: null,
            test: 'this',

            root: function( $scope, $document )
            {
                this.scope = $scope;
                this.textEditor = angular.element( document.querySelector('#texteditor'));
                CKEDITOR.replace( this.textEditor[0], {
                    on: {
                        instanceReady : utils.proxy( this.initEditorActions, this )
                    }
                } );
            },

            getText: function()
            {
                if( this.editor )
                    return this.editor.getData();

                return '';
            },

            updateText: function () {
                this.scope.text = this.getText();
            },

            initEditorActions: function( ev ){
                this.editor = ev.editor;
                this.scope.update = utils.proxy( this.updateText, this );
                this.editor.on( 'change', utils.proxy( this.textEditorKeyUp, this ) );
            },

            textEditorKeyUp: function(){
                this.textEditor.triggerHandler('keyup');
            }
        };
    });

    purchaseApp.controller("EditorController",
        function EditorController($scope, $document, editorService) {
            $scope.mode = angular.element( document.querySelector('input[type="hidden"]')).val();
            $scope.loadContent = function(){
                if( $scope.mode == 1 )
                    return 'editor.php';

                return 'map.php';
            };
            $scope.init = function()
            {
                if( $scope.mode == 1 )
                    editorService.root( $scope, $document );
            }
        });
})();