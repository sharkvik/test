/**
 * Created by Viktor on 17.07.2016.
 */
(function(){
    utils = {};
    utils.proxy = function( f, context, args ){
        return function(){
            f.apply( context, (args || arguments), arguments );
        }
    };

    String.prototype.capitalizeFirstLetter = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };

    HTMLElement.prototype.data = function()
    {
        var dataItems = [];
        for( var i = 0; i<this.attributes.length; i++ )
        {
            if( this.attributes[i].name.indexOf( 'data-' ) == 0 )
            {
                var nameArr = this.attributes[i].name.replace('data-','').split( '-' );
                var name = nameArr[0];
                nameArr.forEach( function( item, index ){
                    if( index == 0 )
                        return;

                    name += item.capitalizeFirstLetter();
                } );
                dataItems[name] = this.attributes[i].value;
            }
        }
        return dataItems;
    };
})();