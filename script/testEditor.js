(function($){
    var controller = {
        scope:null,
        editor:null,
        initialized: null,

        root: function( $scope )
        {
            this.scope = $scope;
            this.initTestEditor( $.proxy( this.initEditorActions, this) );
            this.initialized = true;
        },

        initTestEditor: function( callback )
        {
            $("#texteditor").ckeditor( callback );
        },

        getText: function()
        {
            if( this.editor )
                return this.editor.getData();

            return '';
        },

        updateText: function () {
            controller.scope.text = controller.getText();
        },

        initEditorActions: function(){
            this.editor = $('#texteditor').ckeditorGet();
            this.scope.update = this.updateText;
            this.editor.on( 'change', function(){
                $('#texteditor').keyup();
            } );
        }
    };
    $( document ).on( 'content-loaded', function( ev, $scope ){
        controller.root( $scope );
    } )
})(jQuery);
