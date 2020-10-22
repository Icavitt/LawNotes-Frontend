import $ from 'jquery'
/* eslint-disable no-extend-native */
Array.prototype.where = function (filter) {

    var collection = this;

    switch(typeof filter) { 

        case 'function':
            return $.grep(collection, filter); 

        case 'object':
            for(var property in filter) {
              if(!filter.hasOwnProperty(property)) 
                  continue; // ignore inherited properties

              // eslint-disable-next-line no-loop-func
              collection = $.grep(collection, function (item) {
                  return item[property] === filter[property];
              });
            }
            return collection.slice(0); // copy the array 
                                      // (in case of empty object filter)

        default: 
            throw new TypeError('func must be either a' +
                'function or an object of properties and values to filter by'); 
    }
};


Array.prototype.firstOrDefault = function(func){
    return this.where(func)[0] || null;
};