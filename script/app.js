/**
 * Created by Viktor on 16.07.2016.
 */
(function(){
    var app = angular.module("testApplication", ["ngSanitize"]);
    app.factory( 'mapService', function()
    {
        return {
            scope:null,
            editor:null,
            textEditor: null,

            root: function( $scope, $document )
            {
                this.scope = $scope;
                this.textEditor = $document.find('#texteditor');
                var self = this;
                CKEDITOR.replace( this.textEditor[0], {
                    on: {
                        instanceReady : function(ev){ self.initEditorActions(ev, self); }
                    }
                } );
            },

            getText: function()
            {
                if( this.editor )
                    return this.editor.getData();

                return '';
            },

            updateText: function ( self ) {
                self.scope.text = self.getText();
            },

            initEditorActions: function( ev, self ){
                self.editor = ev.editor;
                var updateFunc = self.updateText;
                self.scope.update = function(){
                    updateFunc(self);
                };
                self.editor.on( 'change', function(){
                    self.textEditor.keyup();
                } );
            }
        };
    });
})();