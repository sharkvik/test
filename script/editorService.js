/**
 * Created by Viktor on 17.07.2016.
 */
(function(){
    var editorServiceObj = {
        scope:null,
        editor:null,
        textEditor: null,

        init: function( item, $scope, $document )
        {
            this.scope = $scope;
            if( typeof item === "string" )
            {
                this.textEditor = $document.find( item );
            }
            else
            {
                this.textEditor = item;
            }
            var self = this;
            CKEDITOR.replace( this.textEditor[0], {
                on: {
                    instanceReady : this.onReady
                }
            } );
        },

        onReady: function( callback, context, args )
        {
            callback.apply( context, args );
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
    app.factory( 'editorService', function(){ return editorServiceObj; });
})();