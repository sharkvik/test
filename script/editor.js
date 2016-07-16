(function($){
    var controller = {
        scope:null,
        editor:null,
        initialized: null,
        $textEditor: null,

        root: function( $scope )
        {
            this.scope = $scope;
            this.$textEditor = $("#texteditor");
            this.$textEditor.ckeditor( $.proxy( this.initEditorActions, this) );
            this.initialized = true;
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

        initEditorActions: function(){
            this.editor = this.$textEditor.ckeditorGet();
            this.scope.update = $.proxy( this.updateText, this );
            this.editor.on( 'change', $.proxy( function(){
                this.$textEditor.keyup();
            }, this ) );
        }
    };
    $( document ).on( 'content-loaded', function( ev, $scope ){
        controller.root( $scope );
    } )
})(jQuery);
