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
})();