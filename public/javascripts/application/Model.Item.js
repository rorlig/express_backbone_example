

define(['use!backbone'],
    function(Backbone) {
        var Item = Backbone.Model.extend({
        
          urlRoot: "http://127.0.0.1:3000/api/items",

          initialize:function() {
          	console.log('model item initialize');
          }
        });
        return Item;
});

