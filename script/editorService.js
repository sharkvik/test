/**
 * Created by Viktor on 17.07.2016.
 */
(function(){
    var editorServiceObj = function(){};
    editorServiceObj.prototype = {
        scope:null,
        editor:null,
        textEditor: null,

        init: function( item, $scope, $document )
        {
            this.scope = $scope;
            if( typeof item === "string" )
            {
                this.textEditor = angular.element( document.querySelector(item));
            }
            else
            {
                this.textEditor = item;
            }
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
    app.factory( 'editorService', function(){ return new editorServiceObj(); });
})();