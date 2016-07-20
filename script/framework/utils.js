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

    String.prototype.toFieldName = function() {
        var nameArr = this.split( '-' );
        var name = nameArr[0];
        nameArr.forEach( function( item, index ){
            if( index == 0 )
                return;

            name += item.capitalizeFirstLetter();
        } );
        return name;
    };

    HTMLElement.prototype.data = function( key )
    {
        if(key)
        {
            return this.getAttribute('data-'+key);
        }
        var dataItems = [];
        var dataObj = {};
        for( var i = 0; i<this.attributes.length; i++ )
        {
            if( this.attributes[i].name.indexOf( 'data-' ) == 0 )
            {
                dataItems.push({name: this.attributes[i].name.replace('data-',''), value: this.attributes[i].value});
            }
        }
        dataItems.forEach(function( item, index ){
            var segments = item.name.split( '_' );
            var current = dataObj;
            segments.forEach( function( segment, segmentIndex ){
                var val = segmentIndex != segments.length - 1 || item.value == '' ? {} : item.value;
                current = addSegmentIfNotExists( current, segment.toFieldName(), val );
            } );
        });
        return dataObj;
    };

    function addSegmentIfNotExists( obj, segment, value )
    {
        if( !obj )
            obj = {};

        if( obj[segment] )
            return obj[segment];

        obj[segment] = value;
        return obj[segment];
    }
})();