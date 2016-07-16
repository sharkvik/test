(function($){
    var controller = {
        scope:null,
        editor:null,
        textEditor: null,

        root: function( $scope )
        {
            this.scope = $scope;
            this.textEditor = angular.element( document.querySelector('#texteditor'));
            var self = this;
            var editorInit = this.initEditorActions;
            CKEDITOR.replace( 'texteditor', {
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

        updateText: function () {
            this.scope.text = this.getText();
            debugger;
        },

        initEditorActions: function( ev, self ){
            debugger;
            self.editor = self.textEditor.ckeditorGet();

            var updateFunc = self.updateText;
            debugger;
            self.scope.update = function(){ updateFunc(); };
            self.editor.on( 'change', self.textEditor.keyup );
        }
    };
    $( document ).on( 'content-loaded', function( ev, $scope ){
        controller.root( $scope );
    } )
})(jQuery);
